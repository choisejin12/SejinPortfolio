import type { Metadata } from "next";
import { Noto_Sans_KR, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "최세진 | 웹 개발자 포트폴리오",
  description:
    "웹 개발자 최세진의 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
