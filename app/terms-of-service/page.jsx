import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Kineticdrive',
  description:
    "Read Kineticdrive's Terms of Service to understand the rules and guidelines for using our website and services.",
};

export default function TermsOfService() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: 1 January 2025</p>

          <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Welcome to Kineticdrive. By accessing or using our website and services, you agree to
            be bound by these Terms of Service. Please read them carefully before using our
            platform.
          </p>

          {/* 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            1. Acceptance of Terms
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            By visiting our website or engaging with any of our services, you confirm that you are
            at least 18 years of age and have read, understood, and agreed to these Terms. If you
            do not agree, please discontinue use of our services immediately.
          </p>

          {/* 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            2. Services Provided
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Kineticdrive provides digital marketing, web development, app development, social media
            management, and related technology services. The scope of each engagement is defined in
            a separate service agreement or statement of work signed between Kineticdrive and the
            client.
          </p>

          {/* 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            3. Intellectual Property
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            All content on this website — including text, graphics, logos, images, and software —
            is the property of Kineticdrive and is protected by applicable intellectual property
            laws. You may not reproduce, distribute, or create derivative works without our express
            written consent.
          </p>

          {/* 4 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            4. User Obligations
          </h2>
          <p className="mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>When using our website or services, you agree not to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
            <li>Use the site for any unlawful purpose or in violation of any regulations.</li>
            <li>Attempt to gain unauthorised access to any part of our systems or infrastructure.</li>
            <li>Transmit any harmful, offensive, or disruptive content.</li>
            <li>Misrepresent your identity or affiliation.</li>
          </ul>

          {/* 5 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            5. Payment & Refunds
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            All fees for services are outlined in individual proposals or invoices. Payment terms
            are as agreed upon in your service contract. Refunds, if applicable, are processed in
            accordance with the specific terms agreed at the time of engagement.
          </p>

          {/* 6 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            6. Limitation of Liability
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            To the maximum extent permitted by law, Kineticdrive shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of our
            website or services. Our total liability for any claim shall not exceed the amount paid
            by you for the specific service giving rise to the claim.
          </p>

          {/* 7 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            7. Third-Party Links
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Our website may contain links to third-party websites. These links are provided for
            convenience only. Kineticdrive does not endorse and is not responsible for the content,
            privacy practices, or accuracy of any third-party sites.
          </p>

          {/* 8 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            8. Modifications to Terms
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We reserve the right to update these Terms at any time. Changes will be posted on this
            page with an updated effective date. Your continued use of our services after any
            changes constitutes your acceptance of the revised Terms.
          </p>

          {/* 9 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            9. Governing Law
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes arising under or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts located in Prayagraj, Uttar Pradesh.
          </p>

          {/* 10 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
            10. Contact Us
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            If you have any questions about these Terms, please reach out to us at{' '}
            <Link href="mailto:info@kineticdrive.in" className="hover:underline" style={{ color: 'var(--accent)' }}>
              info@kineticdrive.in
            </Link>{' '}
            or call us at{' '}
            <Link href="tel:+917388100850" className="hover:underline" style={{ color: 'var(--accent)' }}>
              +91 7388100850
            </Link>
            .
          </p>

          <p className="mt-12 text-sm" style={{ color: 'var(--text-muted)' }}>
            Last updated: 1 January 2025 · Kineticdrive Tech Solutions
          </p>
        </div>
    </section>
  );
}
