import Link from 'next/link';

export const metadata = {
  title: 'Data Deletion | Kineticdrive',
  description: 'Learn how to request data deletion from Kineticdrive.',
};

export default function DataDeletion() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          Data Deletion Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>Effective Date: 1 January 2025</p>

        <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Kineticdrive is committed to protecting your personal data. This policy explains how you
          can request the deletion of your personal information from our systems.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
          How to Request Data Deletion
        </h2>
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          You may request deletion of your personal data at any time by contacting us at{' '}
          <Link href="mailto:info@kineticdrive.in" className="hover:underline" style={{ color: 'var(--accent)' }}>
            info@kineticdrive.in
          </Link>{' '}
          with the subject line <strong>"Data Deletion Request"</strong>. Please include your full
          name and the email address associated with your account.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
          Processing Time
        </h2>
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          We will process your deletion request within <strong>30 days</strong> of receipt and
          confirm via email once your data has been removed.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: 'var(--accent-light)' }}>
          Exceptions
        </h2>
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Certain data may be retained where required by law or for legitimate business purposes
          such as financial record-keeping.
        </p>

        <p className="mt-12 text-sm" style={{ color: 'var(--text-muted)' }}>
          Last updated: 1 January 2025 · Kineticdrive Tech Solutions
        </p>
      </div>
    </section>
  );
}
