import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kineticdrive',
  description: "Read Kineticdrive's privacy policy to understand how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>Effective Date: 1 January 2025</p>

        <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          At Kineticdrive, we respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains what data we collect, how we use it, and the
          choices you have regarding your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--accent-light)' }}>
          Information We Collect
        </h2>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          • Personal identification information (name, email address, phone number) when you contact
          us or subscribe to our newsletter.
        </p>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          • Usage data such as IP address, browser type, and pages visited, which helps us improve
          our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--accent-light)' }}>
          How We Use Your Information
        </h2>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          We use the collected data to provide and enhance our services, respond to inquiries, and
          send occasional updates. We never sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--accent-light)' }}>
          Your Rights
        </h2>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          You may request access, correction, or deletion of your personal data at any time by
          contacting us at{' '}
          <Link href="mailto:info@kineticdrive.in" className="hover:underline" style={{ color: 'var(--accent)' }}>
            info@kineticdrive.in
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
