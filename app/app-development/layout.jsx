export const metadata = {
  title: 'Professional Mobile App Development Company | KineticDrive',
  description: 'We build scalable, high-performance Android, iOS and cross-platform mobile applications that help businesses grow, automate operations and engage customers.',
  alternates: {
    canonical: 'https://kineticdrive.in/app-development',
  },
  openGraph: {
    title: 'Professional Mobile App Development Company | KineticDrive',
    description: 'We build scalable, high-performance Android, iOS and cross-platform mobile applications that help businesses grow, automate operations and engage customers.',
    url: 'https://kineticdrive.in/app-development',
    siteName: 'KineticDrive',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Mobile App Development Company | KineticDrive',
    description: 'We build scalable, high-performance Android, iOS and cross-platform mobile applications that help businesses grow, automate operations and engage customers.',
  },
};

export default function AppDevelopmentLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'KineticDrive App Development',
    'description': 'We build scalable, high-performance Android, iOS and cross-platform mobile applications that help businesses grow, automate operations and engage customers.',
    'url': 'https://kineticdrive.in/app-development',
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
