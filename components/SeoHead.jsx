// components/SeoHead.jsx
// components/SeoHead.jsx
import Head from 'next/head';

/**
 * SEO Head component – adds meta tags for better search engine visibility.
 * Usage: <SeoHead title="Your Page Title" description="Brief description of the page" />
 */
export default function SeoHead({ title, description }) {
  const pageTitle = title ? `${title} | KineticDrive` : 'KineticDrive';
  const pageDescription = description || 'Discover KineticDrive – a premium web solution for lead capture, SEO, and modern UI.';
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Open Graph tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Head>
  );
}

