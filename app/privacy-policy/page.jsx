import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Kineticdrive</title>
        <meta
          name="description"
          content="Read Kineticdrive's privacy policy to understand how we handle your data."
        />
      </Head>
      <section className="bg-gray-900 text-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-8">
            Privacy Policy
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            {/* Placeholder policy text – replace with actual legal content */}
            At Kineticdrive, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy explains what data we
            collect, how we use it, and the choices you have regarding your data.
          </p>
          <h2 className="text-2xl font-semibold text-amber-300 mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            • Personal identification information (name, email address, phone
            number) when you contact us or subscribe to our newsletter.
          </p>
          <p className="mb-4">
            • Usage data such as IP address, browser type, and pages visited, which
            helps us improve our services.
          </p>
          <h2 className="text-2xl font-semibold text-amber-300 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the collected data to provide and enhance our services, respond
            to inquiries, and send occasional updates. We never sell your personal
            information to third parties.
          </p>
          <h2 className="text-2xl font-semibold text-amber-300 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="mb-4">
            You may request access, correction, or deletion of your personal data
            at any time by contacting us at{' '}
            <Link href="mailto:info@kineticdrive.in" className="text-amber-400 hover:underline">
              info@kineticdrive.in
            </Link>
            .
          </p>
          <p className="mt-12 text-sm text-gray-400">
            *This is placeholder content. Replace it with your actual privacy policy.
          </p>
        </div>
      </section>
    </>
  );
}
