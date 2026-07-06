"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BestQLogo from "./BestQLogo";
import {
  BriefcaseMedical
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Produk", href: "/produk" },
    { name: "Toko Online", href: "/toko-online" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0">
            <BestQLogo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm transition-all ${isActive
                      ? "font-bold text-bestq-blue"
                      : "font-medium text-bestq-orange hover:text-bestq-blue"
                    }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-bestq-orange" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link href="/kontak?subject=Request+Sample" className="bg-bestq-blue hover:bg-bestq-darkblue text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm flex flex-row-reverse items-center gap-2 cursor-pointer">
              Request Sample
              <BriefcaseMedical className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button could go here */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
