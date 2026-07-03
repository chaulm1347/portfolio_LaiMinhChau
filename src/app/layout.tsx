import type { Metadata, Viewport } from "next";
import { Bangers, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Comic Header Font - Bangers (giữ nguyên cho phong cách comic)
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

// Body Font - Montserrat (dễ đọc, hiện đại; hỗ trợ tiếng Việt)
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lại Minh Châu - Product Owner | Portfolio",
  description:
    "Portfolio of Lại Minh Châu - Product Owner & Delivery Coordinator. B2B AI product delivery, partner ecosystem development, and cross-functional coordination.",
  keywords: [
    "Product Owner",
    "Lại Minh Châu",
    "Delivery Coordinator",
    "Product Management",
    "Business Analyst",
    "Go-to-Market",
    "Stakeholder Management",
    "Portfolio",
    "B2B",
    "AI Product",
  ],
  authors: [{ name: "Lại Minh Châu" }],
  openGraph: {
    title: "Lại Minh Châu - Product Owner",
    description:
      "Product Owner & Delivery Coordinator — B2B AI product delivery and partner ecosystem development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${bangers.variable} ${montserrat.variable} antialiased font-body`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
