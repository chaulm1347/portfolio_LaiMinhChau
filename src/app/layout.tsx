import type { Metadata } from "next";
import { Bangers, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Comic Header Font - Bangers (giữ nguyên cho phong cách comic)
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

// Body Font - Nunito (tròn trịa, thân thiện, giữ nét comic nhưng dễ đọc hơn)
const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
  display: "swap",
});

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
        className={`${bangers.variable} ${nunito.variable} antialiased font-body`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
