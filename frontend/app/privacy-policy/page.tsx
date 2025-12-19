"use client";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-purple-500 mb-3">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website or services.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, shipping
              address, phone number, and payment information when you make a
              purchase, create an account, or contact us.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, operating
              system, and browsing behavior used to improve our website and services.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>To process and fulfill your orders</li>
            <li>To communicate order updates and respond to inquiries</li>
            <li>To send promotional emails if you have opted in</li>
            <li>To analyze usage and improve website performance</li>
          </ul>
        </Section>

        <Section title="3. Information Sharing">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with trusted partners who assist with payment processing,
              website operations, and order delivery.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if
              required by law or to protect our rights.
            </li>
          </ul>
        </Section>

        <Section title="4. Data Security">
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Access and Correction:</strong> You can access and update your
              personal information through your account.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may unsubscribe from promotional emails
              using the link provided in the email.
            </li>
          </ul>
        </Section>

        <Section title="6. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </Section>

        {/* <Section title="7. Contact Us">
          <p className="mb-1">📧 Email: vishnucvs99@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
          <p>
            🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V), Main Street,
            Murali Book Stores Opposite, 518510
          </p>
        </Section> */}

        <p className="text-sm text-gray-500">
          Continued use of our website indicates acceptance of this Privacy Policy.
        </p>

      </div>
    </div>
  );
}
