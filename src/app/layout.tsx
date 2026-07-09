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

const SITE_URL = "https://portfolio-lai-minh-chau.vercel.app";
const SITE_TITLE = "Lại Minh Châu | Portfolio";
const SITE_DESCRIPTION =
  "Portfolio of Lại Minh Châu - Product Owner & Project Manager. B2B AI product delivery, partner ecosystem development, and cross-functional coordination.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Lại Minh Châu Portfolio",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/uploads/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Lại Minh Châu - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/uploads/avatar.jpg"],
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
