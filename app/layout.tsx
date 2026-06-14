import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://anujsharma.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anuj Sharma — Presales Professional with a Consultant's Mindset",
  description:
    "Anuj Sharma is a presales professional specializing in ERP, GST, and tax technology — helping organizations make better technology decisions through consultative, workflow-first thinking.",
  openGraph: {
    title: "Anuj Sharma | Presales with a Consultant's Mindset",
    description:
      "Anuj Sharma is a presales professional specializing in ERP, GST, and tax technology — helping organizations make better technology decisions through consultative, workflow-first thinking.",
    url: siteUrl,
    siteName: "Anuj Sharma",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Sharma | Presales with a Consultant's Mindset",
    description:
      "Presales professional specializing in ERP, GST, and tax technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        {children}
      </body>
    </html>
  );
}
