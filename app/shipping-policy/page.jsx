import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Delivery Policy | Kineticdrive',
  description:
    'Understand how Kineticdrive delivers its digital services after payment — timelines, onboarding, and delivery expectations.',
};

export default function ShippingPolicy() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          Shipping &amp; Delivery Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 1 January 2025</p>

        <p className="mb-6 text-lg leading-relaxed">
          Kineticdrive is a 100% digital services company. We do not sell or ship any physical
          goods. This policy explains how our digital services are delivered to clients after a
          successful payment.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          1. Nature of Delivery
        </h2>
        <p className="mb-4 leading-relaxed">
          All services provided by Kineticdrive — including web development, app development,
          digital marketing, SEO, social media management, and consulting — are delivered
          digitally. There is no physical shipment involved. Deliverables are shared via:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>Email (reports, documents, design files)</li>
          <li>Shared cloud drives (Google Drive, OneDrive)</li>
          <li>Project management platforms (Notion, Trello, or equivalent)</li>
          <li>Direct deployment to client servers / hosting environments</li>
          <li>Video call walkthroughs and screen-sharing sessions</li>
        </ul>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          2. Service Delivery Timelines
        </h2>
        <p className="mb-4 leading-relaxed">
          Delivery timelines vary by service type and are confirmed in the individual project
          agreement or proposal. Typical timelines are:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-amber-300">
                <th className="py-2 pr-6">Service</th>
                <th className="py-2">Typical Delivery Timeline</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">Website Design &amp; Development</td>
                <td className="py-3">2 – 6 weeks</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">Mobile App Development</td>
                <td className="py-3">6 – 16 weeks</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">Digital Marketing Setup</td>
                <td className="py-3">3 – 7 business days</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">SEO Audit &amp; Strategy</td>
                <td className="py-3">5 – 10 business days</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">Social Media Management (monthly)</td>
                <td className="py-3">Ongoing — first content within 5 days</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-6">Logo &amp; Branding</td>
                <td className="py-3">3 – 7 business days</td>
              </tr>
              <tr>
                <td className="py-3 pr-6">Consulting / Strategy Session</td>
                <td className="py-3">Scheduled within 48 hours of payment</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-gray-400">
          * These are estimated timelines. Actual delivery may vary based on project complexity,
          client feedback cycles, and timely provision of required assets/information.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          3. Onboarding After Payment
        </h2>
        <p className="mb-4 leading-relaxed">
          After a successful payment, our team will contact you within{' '}
          <strong>1 business day</strong> to initiate the onboarding process. This includes:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>Kickoff call to understand requirements in detail</li>
          <li>Sharing a project timeline and milestone plan</li>
          <li>Requesting necessary access, assets, and credentials</li>
          <li>Assigning a dedicated account manager or project lead</li>
        </ul>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          4. Client Responsibilities
        </h2>
        <p className="mb-4 leading-relaxed">
          Timely delivery depends on collaboration from the client. Delays caused by the following
          may extend the agreed timeline:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>Late provision of required content, images, or credentials</li>
          <li>Delayed feedback or approvals on submitted work</li>
          <li>Frequent scope changes after project commencement</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Kineticdrive will not be held responsible for delays arising from client-side
          dependencies.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          5. Delivery Confirmation
        </h2>
        <p className="mb-4 leading-relaxed">
          A service is considered delivered when:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          <li>The deliverable is shared with the client via email or project platform, or</li>
          <li>The service (e.g., website, ad campaign) is live and accessible, or</li>
          <li>The client has acknowledged receipt in writing.</li>
        </ul>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
          6. Contact Us
        </h2>
        <p className="mb-4 leading-relaxed">
          For any questions regarding service delivery, please contact:
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
