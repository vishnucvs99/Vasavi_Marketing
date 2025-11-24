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

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          These Terms & Conditions govern your use of our website, services, 
          and purchase of products including electronics, grinders, mixers, 
          fans, plastic household items, and more. By accessing our platform, 
          you agree to follow all rules and guidelines listed below.
        </p>

        <Section title="1. Use of Website">
          <ul className="list-disc ml-6 space-y-2">
            <li>You must be at least 18 years old to place an order.</li>
            <li>You agree not to misuse, copy, or distribute our content.</li>
            <li>Providing false information may lead to order cancellation or account suspension.</li>
          </ul>
        </Section>

        <Section title="2. Product Information">
          We ensure product descriptions, images, and specs are accurate.
          However, minor variations may occur due to updates from manufacturers or lighting differences.
        </Section>

        <Section title="3. Pricing & Availability">
          <ul className="list-disc ml-6 space-y-2">
            <li>Prices may change at any time without prior notice.</li>
            <li>Orders can be cancelled if stock is unavailable.</li>
            <li>Any pricing errors may result in order cancellation.</li>
          </ul>
        </Section>

        <Section title="4. Limitation of Liability">
          We are not responsible for indirect or consequential damages resulting from the use of our website or products.
        </Section>

        <Section title="5. Modifications">
          We may update these Terms & Conditions at any time. Continued use of our website means you accept the latest version.
        </Section>

        <Section title="6. Contact Us">
          <p className="mb-1">📧 Email: camerascan958@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 9188526787</p>
          <p>🏢 Address: YMCA International Building, Kottayam, Kerala 686061</p>
        </Section>

      </div>
    </div>
  );
}
