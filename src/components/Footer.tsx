import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#004AAD] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16">

          {/* Logo Section */}
          <div className="flex flex-col items-start justify-center">
            {/* Needs white text for Best */}
            <div className="scale-150 origin-left">
              <div
                className="w-18 h-18 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-multiply"
                style={{
                  backgroundImage: "url('/logo-footer.png')",
                  backgroundPosition: "center bottom",
                }}
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3 text-sm text-white">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <Link href="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link>
            <Link href="/produk" className="hover:text-white transition-colors">Produk</Link>
            <Link href="/toko-online" className="hover:text-white transition-colors">Toko Online</Link>
            <Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 text-xs text-white">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>
                PT Best Sinergi Indonesia<br />
                Jakarta Timur, 13440<br />
                DKI Jakarta, Indonesia
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>+62 813-1748-5351</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>sales.bestq@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white">
          © 2026 BestQ Groups | All rights reserved        </div>
      </div>
    </footer>
  );
}
