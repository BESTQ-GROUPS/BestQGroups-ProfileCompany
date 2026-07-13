import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  JetBrains_Mono,
  Ubuntu, Noto_Sans, Playfair_Display
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestqgroups.com"),

  title: {
    default: "PT BestQ Sinergi Indonesia | Medical Device Manufacturing & Distribution",
    template: "%s | PT BestQ Sinergi Indonesia",
  },

  description:
    "PT BestQ Sinergi Indonesia is a company engaged in the production and distribution of medical devices that has obtained an official license from the Directorate General of Pharmacy and Medical Devices, Ministry of Health of the Republic of Indonesia. We are committed to providing high-quality, safe, and reliable healthcare products.",
  
    applicationName: "PT BestQ Sinergi Indonesia",

  authors: [
    {
      name: "PT BestQ Sinergi Indonesia",
    },
  ],

  creator: "PT BestQ Sinergi Indonesia",

  publisher: "PT BestQ Sinergi Indonesia",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bestqgroups.com",
    title: "BestQ Groups - Medical Device Manufacturing & Distribution",
    description:
      "PT BestQ Sinergi Indonesia is a company engaged in the production and distribution of medical devices that has obtained an official license from the Directorate General of Pharmacy and Medical Devices, Ministry of Health of the Republic of Indonesia. We are committed to providing high-quality, safe, and reliable healthcare products.",
    siteName: "BestQ Groups",
    images: [
      {
        url: "/logo-bestq.ico",
        width: 1200,
        height: 630,
        alt: "BestQ Groups",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BestQ Groups - Medical Device Manufacturing & Distribution",
    description:
      "PT BestQ Sinergi Indonesia is a company engaged in the production and distribution of medical devices that has obtained an official license from the Directorate General of Pharmacy and Medical Devices, Ministry of Health of the Republic of Indonesia. We are committed to providing high-quality, safe, and reliable healthcare products.",
    images: ["/logo-bestq.ico"],
  },

  icons: {
    icon: "/logo-bestq.ico",
    shortcut: "/logo-bestq.ico",
    apple: "/logo-bestq.ico",
  },

  category: "Medical, Healthcare",
};

import { ThemeProvider } from "../components/theme-provider";
import SplashScreen from "../components/ui/splash-screen";
import { cn } from "../lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable, ubuntu.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body
        suppressHydrationWarning
        className="
          bg-canvas
          text-ink
          font-sans
          antialiased
          overflow-x-hidden
          selection:bg-primary/20
          selection:text-charcoal
        "
      >
        <SplashScreen />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* GLOBAL BACKGROUND */}
          <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Mesh Gradient */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-80" />

            {/* Glow Orb Top */}
            <div className="absolute top-[-10%] left-[-10%] h-125 w-125 rounded-full bg-primary/10 blur-3xl animate-glow" />

            {/* Glow Orb Bottom */}
            <div className="absolute bottom-[-20%] right-[-10%] h-150 w-150 rounded-full bg-cyan-400/10 blur-3xl animate-float" />

            {/* Noise Layer */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise" />
          </div>

          {/* PAGE CONTENT */}
          <SmoothScroll />
          <Navbar />
          <main className="relative z-10 flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}