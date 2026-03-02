import type { Metadata } from "next";
import { Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Base URL is used for absolute links (canonical, open graph, etc.)
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dehawk.xyz",
  ),

  title: {
    default: "De Hawk",
    template: "%s | De Hawk",
  },

  description:
    "DeHawk bridges the gap between crypto projects and their audience through authentic engagements, influencer marketing, and community activation.",

  keywords: [
    "Web3",
    "crypto",
    "community",
    "marketing",
    "DeHawk",
    "blockchain",
    "growth",
  ],

  authors: [{ name: "De Hawk", url: "https://dehawk.xyz" }],

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  openGraph: {
    title: "De Hawk - Web3 Growth Partner",
    description:
      "DeHawk bridges the gap between crypto projects and their audience through authentic engagements, influencer marketing, and community activation.",
    url: "/",
    siteName: "De Hawk",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "De Hawk Open Graph Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "De Hawk - Web3 Growth Partner",
    description:
      "DeHawk bridges the gap between crypto projects and their audience through authentic engagements, influencer marketing, and community activation.",
    images: ["/og-image.png"],
    creator: "@dehawk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {/* structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "De Hawk",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://dehawk.xyz",
              logo:
                (process.env.NEXT_PUBLIC_SITE_URL || "https://dehawk.xyz") +
                "/logo.svg",
              sameAs: [
                "https://twitter.com/dehawk",
                "https://www.linkedin.com/company/dehawk",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
