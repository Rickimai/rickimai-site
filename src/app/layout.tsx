import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  title: "Rick Imai | Senior Technical Program Manager",
  description:
    "Senior Technical Program Manager with 15+ years of experience leading enterprise security, cybersecurity, and data platform initiatives at AWS, Charles Schwab, and Experian.",
  keywords: [
    "Technical Program Manager",
    "TPM",
    "Cybersecurity",
    "AWS",
    "Program Management",
    "Security",
    "Enterprise Architecture",
  ],
  authors: [{ name: "Rick Imai" }],
  openGraph: {
    title: "Rick Imai | Senior Technical Program Manager",
    description:
      "Senior Technical Program Manager with 15+ years of experience leading enterprise security and data platform initiatives.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Imai | Senior Technical Program Manager",
    description:
      "Senior Technical Program Manager with 15+ years of experience leading enterprise security and data platform initiatives.",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-white text-neutral-900`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
