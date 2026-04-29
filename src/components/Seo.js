import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export function Seo({ title, description, pathname, children }) {
  const site = useSiteMetadata();

  const fullTitle = title ? `${title} — ${site.title}` : site.title;
  const metaDescription = description || site.description;
  const canonicalUrl = `${site.siteUrl}${pathname || ""}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={site.twitterHandle} />
      {children}
    </>
  );
}
