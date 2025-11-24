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

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Return & Refund Policy
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          At CameraScan Kottayam, we want every customer to enjoy a smooth and
          satisfying shopping experience. This Return and Refund Policy explains
          when and how returns or refunds are handled.
        </p>

        <Section title="1. Eligibility for Returns">
          <ul className="list-disc ml-6 space-y-2">
            <li>Products can be returned within <strong>7 days</strong> of delivery.</li>
            <li>Items must be unused, in original packaging, and with all accessories.</li>
            <li>Products damaged due to misuse are not eligible.</li>
            <li>Returns must include a valid proof of purchase.</li>
          </ul>
        </Section>

        <Section title="2. Non-Returnable Products">
          <ul className="list-disc ml-6 space-y-2">
            <li>Memory cards & storage devices</li>
            <li>Software products</li>
            <li>Batteries & consumables</li>
            <li>Used or physically damaged items</li>
          </ul>
        </Section>

        <Section title="3. Refund Methods">
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Online Payments:</strong> Refund will be processed back to the original payment method.</li>
            <li><strong>COD Orders:</strong> Refund will be issued to the customer's bank account.</li>
            <li>Refund processing time: <strong>7–10 working days</strong>.</li>
          </ul>
        </Section>

        <Section title="4. Replacement Policy">
          If a product is defective or damaged during shipping, customers may
          request a replacement. Approval is subject to inspection and availability.
        </Section>

        <Section title="5. Cancellation Policy">
          <ul className="list-disc ml-6 space-y-2">
            <li>Orders can be cancelled before dispatch.</li>
            <li>Shipped orders cannot be cancelled.</li>
            <li>Cancelled prepaid orders will be refunded within 5–7 days.</li>
          </ul>
        </Section>

        <Section title="6. Contact Us">
          <p className="mb-1">📧 Email: vishnucvs@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
            <p>🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V), main street Murali Book stores opposite [518510]</p>
        </Section>

      </div>
    </div>
  );
}
