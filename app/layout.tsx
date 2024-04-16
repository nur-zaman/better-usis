import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better USIS",
  description: "The better version of USIS",
  twitter: {
    site: "https://betterusis.vercel.app",
    title: "Better USIS",
    description:
      "The better version of BRAC University's USIS (Student Portal).",
    images: "/opengraph-image.png",
  },

  openGraph: {
    type: "website",
    url: "https://betterusis.vercel.app",
    title: "Better USIS",
    description:
      "The better version of BRAC University's USIS (Student Portal).",
    images: "/opengraph-image.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <Providers session={session}>
          <Toaster />
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V86NQDMETC"
        />
        <Script id="gtag">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V86NQDMETC');`}
        </Script>
      </body>
    </html>
  );
}
