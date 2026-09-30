import Link from 'next/link';

export const metadata = {
  title: 'Refund & Cancellation Policy | Kineticdrive',
  description:
    'Read the Refund and Cancellation Policy of Kineticdrive to understand how refunds and cancellations are handled for our services.',
};

export default function RefundPolicy() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 1 January 2025</p>

        <p className="mb-6 text-lg leading-relaxed">
          At Kineticdrive, we strive to deliver high-quality digital services and ensure complete
          client satisfaction. This Refund &amp; Cancellation Policy outlines the conditions under
          which refunds or cancellations may be requested and processed.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          1. Service-Based Engagements
        </h2>
        <p className="mb-4 leading-relaxed">
          Since our offerings are primarily professional digital services (web development, app
          development, digital marketing, SEO, etc.), payments made for work that has already
          commenced are generally non-refundable. The following conditions apply:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Before project commencement:</span> A full
            refund will be issued if the cancellation is requested within 48 hours of payment and
            before any work has begun.
          </li>
          <li>
            <span className="font-medium text-white">After project commencement:</span> If work has
            started, only the unused portion of the payment (proportional to work remaining) may be
            refunded at Kineticdrive's discretion.
          </li>
          <li>
            <span className="font-medium text-white">Completed milestones:</span> Fees for
            completed and approved milestones are non-refundable.
          </li>
        </ul>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          2. Monthly Retainer / Subscription Services
        </h2>
        <p className="mb-4 leading-relaxed">
          For ongoing retainer-based services (e.g., monthly SEO, social media management):
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>
            Cancellations must be requested at least <strong>15 days</strong> before the next
            billing cycle via written notice to{' '}
            <Link href="mailto:info@kineticdrive.in" className="text-amber-400 hover:underline">
              info@kineticdrive.in
            </Link>
            .
          </li>
          <li>
            Payments for the current billing month are non-refundable once the cycle has begun.
          </li>
          <li>No partial-month refunds will be issued.</li>
        </ul>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          3. Non-Refundable Items
        </h2>
        <p className="mb-2 leading-relaxed">The following are strictly non-refundable:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>Domain registration and renewal fees</li>
          <li>Third-party software licences or tool subscriptions purchased on your behalf</li>
          <li>Advertising spend (Google Ads, Meta Ads, etc.) already deployed</li>
          <li>Rush/expedite fees</li>
          <li>Consulting and strategy fees once the session has been conducted</li>
        </ul>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          4. Refund Process
        </h2>
        <p className="mb-4 leading-relaxed">
          To request a refund, please email us at{' '}
          <Link href="mailto:info@kineticdrive.in" className="text-amber-400 hover:underline">
            info@kineticdrive.in
          </Link>{' '}
          with:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>Your full name and registered email address</li>
          <li>Invoice or order number</li>
          <li>Reason for the refund request</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Approved refunds will be processed within <strong>7–10 business days</strong> to the
          original payment method. Processing time may vary depending on your bank or payment
          provider.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          5. Cancellation by Kineticdrive
        </h2>
        <p className="mb-4 leading-relaxed">
          We reserve the right to cancel a project or service agreement if a client violates our
          Terms of Service, engages in fraudulent activity, or fails to provide necessary
          information or approvals for an extended period. In such cases, a pro-rated refund for
          undelivered work will be issued.
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          6. Disputes
        </h2>
        <p className="mb-4 leading-relaxed">
          If you are dissatisfied with our services or the refund decision, please contact us
          directly. We are committed to resolving all disputes amicably. Unresolved disputes shall
          be subject to the jurisdiction of courts in Prayagraj, Uttar Pradesh, India.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          7. Contact Us
        </h2>
        <p className="mb-4 leading-relaxed">
          For any questions regarding this policy, please reach out:
        </p>
        <ul className="list-none space-y-2 text-gray-300">
          <li>
            📧{' '}
            <Link href="mailto:info@kineticdrive.in" className="text-amber-400 hover:underline">
              info@kineticdrive.in
            </Link>
          </li>
          <li>
            📞{' '}
            <Link href="tel:+917388100850" className="text-amber-400 hover:underline">
              +91 7388100850
            </Link>
          </li>
        </ul>

        <p className="mt-12 text-sm text-gray-500">
          Last updated: 1 January 2025 · Kineticdrive Tech Solutions
        </p>
      </div>
    </section>
  );
}
