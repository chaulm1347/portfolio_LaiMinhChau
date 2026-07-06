import type { Metadata, Viewport } from "next";
import { Bangers, Patrick_Hand, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Display font - Bangers (tiêu đề, tên hero, chapter numbers, starburst) — hỗ trợ tiếng Việt
const bangers = Bangers({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-bangers",
  display: "swap",
});

// Dialogue font - Patrick Hand (speech bubble, caption, chú thích) — viết tay, hỗ trợ tiếng Việt
const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-patrick",
  display: "swap",
});

// Body font - Nunito (toàn bộ body text) — tròn trịa, dễ đọc, hỗ trợ tiếng Việt
const nunito = Nunito({
  weight: ["400", "700", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
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
        className={`${bangers.variable} ${patrickHand.variable} ${nunito.variable} antialiased font-body`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
