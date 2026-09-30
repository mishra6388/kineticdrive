import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Kineticdrive',
  description:
    "Learn how Kineticdrive uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <section
      className="min-h-screen py-12 pt-20 sm:pt-24"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: 1 January 2025</p>

          <p className="mb-6 text-lg leading-relaxed">
            This Cookie Policy explains how Kineticdrive ("we", "us", or "our") uses cookies and
            similar tracking technologies when you visit our website. It describes what these
            technologies are, why we use them, and how you can control them.
          </p>

          {/* 1 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            1. What Are Cookies?
          </h2>
          <p className="mb-4 leading-relaxed">
            Cookies are small text files that are placed on your device (computer, smartphone, or
            tablet) when you visit a website. They are widely used to make websites work
            efficiently, to remember your preferences, and to provide information to website owners
            about how their site is used.
          </p>

          {/* 2 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            2. How We Use Cookies
          </h2>
          <p className="mb-4 leading-relaxed">We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
            <li>
              <span className="font-medium text-white">Essential cookies</span> — Required for the
              website to function correctly. These cannot be disabled.
            </li>
            <li>
              <span className="font-medium text-white">Analytics cookies</span> — Help us
              understand how visitors interact with our site by collecting and reporting information
              anonymously (e.g., Google Analytics).
            </li>
            <li>
              <span className="font-medium text-white">Preference cookies</span> — Remember your
              choices and settings to improve your experience on return visits.
            </li>
            <li>
              <span className="font-medium text-white">Marketing cookies</span> — Used to deliver
              advertisements relevant to you and your interests, and to track the effectiveness of
              our campaigns (e.g., Google Ads, Meta Pixel).
            </li>
          </ul>

          {/* 3 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            3. Types of Cookies We Use
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-amber-300">
                  <th className="py-2 pr-6">Cookie Name / Category</th>
                  <th className="py-2 pr-6">Purpose</th>
                  <th className="py-2">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">_ga, _gid (Google Analytics)</td>
                  <td className="py-3 pr-6">Analytics — tracks page views &amp; sessions</td>
                  <td className="py-3">Up to 2 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">_fbp (Meta Pixel)</td>
                  <td className="py-3 pr-6">Marketing — Facebook ad targeting</td>
                  <td className="py-3">90 days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">Session cookie</td>
                  <td className="py-3 pr-6">Essential — maintains your session</td>
                  <td className="py-3">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            4. Third-Party Cookies
          </h2>
          <p className="mb-4 leading-relaxed">
            Some cookies on our site are set by third-party services such as Google, Meta, and
            LinkedIn. These providers have their own privacy and cookie policies, which we encourage
            you to review:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
            <li>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Google Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Meta Privacy Policy
              </Link>
            </li>
          </ul>

          {/* 5 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            5. Managing & Disabling Cookies
          </h2>
          <p className="mb-4 leading-relaxed">
            You can control and manage cookies in several ways. Most web browsers allow you to
            refuse or delete cookies through their settings. Please note that disabling certain
            cookies may affect the functionality of our website.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
            <li>
              <span className="font-medium text-white">Browser settings</span> — Visit your
              browser's help section to learn how to manage cookies.
            </li>
            <li>
              <span className="font-medium text-white">Google Analytics opt-out</span> — Install
              the{' '}
              <Link
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </Link>
              .
            </li>
            <li>
              <span className="font-medium text-white">Ad preferences</span> — Manage your ad
              settings via{' '}
              <Link
                href="https://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Your Online Choices
              </Link>
              .
            </li>
          </ul>

          {/* 6 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            6. Changes to This Cookie Policy
          </h2>
          <p className="mb-4 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology,
            legislation, or our data practices. Any updates will be posted on this page with a
            revised effective date. We encourage you to check back periodically.
          </p>

          {/* 7 */}
          <h2 className="text-2xl font-semibold text-amber-300 mt-10 mb-4">
            7. Contact Us
          </h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about our use of cookies, please contact us at{' '}
            <Link href="mailto:info@kineticdrive.in" className="text-amber-400 hover:underline">
              info@kineticdrive.in
            </Link>{' '}
            or call{' '}
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
