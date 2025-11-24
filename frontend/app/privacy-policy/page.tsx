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
          This Privacy Policy explains how we collect, use, store, and protect your
          personal information when you use our website. By accessing our services,
          you agree to the terms outlined in this policy.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc ml-6 space-y-2">
            <li>Name, email address, phone number</li>
            <li>Billing and shipping address</li>
            <li>Payment information (securely processed)</li>
            <li>Device details, IP address, and cookies</li>
            <li>Order history & customer support messages</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>To process and deliver orders</li>
            <li>To send order updates & account notifications</li>
            <li>To verify payments and prevent fraud</li>
            <li>To improve website performance and user experience</li>
            <li>To offer customer support</li>
          </ul>
        </Section>

        <Section title="3. Sharing of Information">
          <p>
            We do not sell or rent your personal information. However, we may
            share your data with trusted partners:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Secure payment gateways</li>
            <li>Courier partners for deliveries</li>
            <li>Law authorities if legally required</li>
          </ul>
        </Section>

        <Section title="4. Data Security">
          We use encryption, secure servers, and firewalls to safeguard your data.
          Only authorized personnel have access to sensitive information.
        </Section>

        <Section title="5. Cookies">
          Our website uses cookies to improve website performance and personalize
          your browsing experience.
        </Section>

        <Section title="6. Your Rights">
          <ul className="list-disc ml-6 space-y-2">
            <li>Request access to your data</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of personal data</li>
            <li>Opt out of promotional messages</li>
          </ul>
        </Section>

        <Section title="7. Contact Us">
          <p className="mb-1">📧 Email: vishnucvs99@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
           <p>🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V), main street Murali Book stores opposite [518510]</p>
        </Section>

        <p className="text-sm text-gray-500">
          Continued use of our website indicates acceptance of this Privacy Policy.
        </p>

      </div>
    </div>
  );
}
