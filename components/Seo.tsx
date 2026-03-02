import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export default function Seo({
  title,
  description,
  keywords,
  image,
  url,
}: SeoProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dehawk.xyz";
  const fullTitle = title ? `${title} | De Hawk` : "De Hawk";
  const canonical = url ? new URL(url, siteUrl).toString() : siteUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(",")} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {image && (
        <meta
          property="og:image"
          content={new URL(image, siteUrl).toString()}
        />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      {description && <meta name="twitter:description" content={description} />}
      {image && (
        <meta
          name="twitter:image"
          content={new URL(image, siteUrl).toString()}
        />
      )}
    </Head>
  );
}
