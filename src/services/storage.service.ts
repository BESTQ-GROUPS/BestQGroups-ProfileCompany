import { logger } from '@/lib/logger';

export class StorageService {
  static async upload(file: File, publicId?: string) {
    try {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.CLOUDINARY_API_KEY;
      const apiSecret = process.env.CLOUDINARY_API_SECRET;

      if (!cloudName || !apiKey || !apiSecret) {
        logger.debug(`[MOCK CLOUDINARY] Uploaded ${file.name}`);
        return {
          key: publicId || file.name,
          url: `https://via.placeholder.com/800?text=${encodeURIComponent(file.name)}`
        };
      }

      const timestamp = Math.round(new Date().getTime() / 1000).toString();
      
      let signatureString = '';
      if (publicId) {
        signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
      } else {
        signatureString = `timestamp=${timestamp}${apiSecret}`;
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(signatureString);
      const hashBuffer = await crypto.subtle.digest('SHA-1', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('api_key', apiKey);
      formData.append('timestamp', timestamp);
      formData.append('signature', signature);
      if (publicId) {
        formData.append('public_id', publicId);
      }

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || 'Upload to Cloudinary failed');
      }

      return {
        key: result.public_id,
        url: result.secure_url
      };
    } catch (error) {
      logger.error('Failed to upload file to Cloudinary', error);
      throw new Error('Upload failed');
    }
  }

  static async delete(publicId: string) {
    try {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.CLOUDINARY_API_KEY;
      const apiSecret = process.env.CLOUDINARY_API_SECRET;

      if (!cloudName || !apiKey || !apiSecret) {
        logger.debug(`[MOCK CLOUDINARY] Deleted ${publicId}`);
        return true;
      }

      const timestamp = Math.round(new Date().getTime() / 1000).toString();
      const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;

      const encoder = new TextEncoder();
      const data = encoder.encode(signatureString);
      const hashBuffer = await crypto.subtle.digest('SHA-1', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('api_key', apiKey);
      formData.append('timestamp', timestamp);
      formData.append('signature', signature);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error?.message || 'Delete from Cloudinary failed');
      }

      return true;
    } catch (error) {
      logger.error('Failed to delete file from Cloudinary', error);
      throw new Error('Delete failed');
    }
  }

  static getPublicUrl(key: string) {
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${key}`;
  }
}
