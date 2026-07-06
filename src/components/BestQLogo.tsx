import Image from "next/image";

export default function BestQLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <Image
  src="/logo-bestq.png"
  alt="Logo"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain"
/>
    </div>
  );
}
