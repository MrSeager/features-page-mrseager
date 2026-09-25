import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Features Page by Mr.Seager",
  description: "Features Page created using Next.JS, TypeScript, Tailwind",
  icons: { 
    icon: "/images/favicon.ico", 
  },
  openGraph: {
    title: "Features Page by Mr.Seager",
    description: "Features Page created using Next.JS, TypeScript, Tailwind",
    images: [
      {
        url: "/images/abstractly.png",
        width: 224,
        height: 64,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/abstractly.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
