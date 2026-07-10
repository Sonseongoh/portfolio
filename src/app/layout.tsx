import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: Vercel 배포 후 실제 도메인으로 교체 (OG 이미지 절대경로 생성에 필요)
  // metadataBase: new URL("https://portfolio-sonseongoh.vercel.app"),
  title: "손성오 | 프론트엔드 개발자",
  description:
    "문제를 정의하고 가설을 검증하며 만드는 프론트엔드 개발자 손성오의 포트폴리오. React, Next.js, TypeScript.",
  openGraph: {
    title: "손성오 | 프론트엔드 개발자",
    description:
      "문제를 정의하고 가설을 검증하며 만드는 프론트엔드 개발자 손성오의 포트폴리오.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
