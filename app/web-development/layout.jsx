export const metadata = {
  title: 'Professional Website Development Company | KineticDrive',
  description: 'We design and develop modern, scalable, SEO-friendly websites that help businesses generate more leads, improve credibility and grow online.',
  alternates: {
    canonical: 'https://kineticdrive.in/web-development',
  },
  openGraph: {
    title: 'Professional Website Development Company | KineticDrive',
    description: 'We design and develop modern, scalable, SEO-friendly websites that help businesses generate more leads, improve credibility and grow online.',
    url: 'https://kineticdrive.in/web-development',
    siteName: 'KineticDrive',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Website Development Company | KineticDrive',
    description: 'We design and develop modern, scalable, SEO-friendly websites that help businesses generate more leads, improve credibility and grow online.',
  },
};

export default function WebDevelopmentLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'KineticDrive',
    'description': 'We build fast, modern, responsive and SEO-friendly websites that help businesses generate more leads and grow online.',
    'url': 'https://kineticdrive.in/web-development',
    'telephone': '+917388100750',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
