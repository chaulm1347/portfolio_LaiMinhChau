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
  title: "Le Duy Khanh - The Fullstack Hero | Portfolio",
  description:
    "Portfolio of Le Duy Khanh - A versatile Product Engineer with expertise in ReactJS, NestJS, .NET, and VoIP systems. Specializing in fullstack development and microservices architecture.",
  keywords: [
    "Fullstack Developer",
    "Le Duy Khanh",
    "ReactJS",
    "NestJS",
    ".NET",
    "TypeScript",
    "Portfolio",
    "Product Engineer",
    "VoIP",
    "Microservices",
  ],
  authors: [{ name: "Le Duy Khanh" }],
  openGraph: {
    title: "Le Duy Khanh - The Fullstack Hero",
    description:
      "A versatile Product Engineer with expertise in ReactJS, NestJS, and .NET",
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
