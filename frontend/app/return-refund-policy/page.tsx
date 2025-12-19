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
          Return, Refund & Cancellation Policy
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Vasavi Marketing is committed to ensuring customer satisfaction and
          product quality. This policy explains our order cancellation, return,
          and refund rules.
        </p>

        <Section title="1. Order Cancellation (Physical Products)">
          <ul className="list-disc ml-6 space-y-2">
            <li>Orders can be cancelled <strong>only before the item is shipped</strong>.</li>
            <li>Orders that have already been shipped <strong>cannot be cancelled</strong>.</li>
          </ul>
        </Section>

        <Section title="2. Refund Policy (No-Refund Policy)">
          <p className="mb-3">
            We maintain a strict <strong>no-refund policy</strong> for all products.
            Refunds are provided only in the exceptional cases listed below:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Product not received by the customer</li>
            <li>Product lost during transit</li>
            <li>Wrong product delivered</li>
            <li>Product damaged during shipping</li>
          </ul>
        </Section>

        <Section title="3. Refund Process (When Applicable)">
          <p>
            If a refund is approved after verification, the refund amount will be
            credited back to the original payment method within
            <strong> 7–14 business days</strong>.
          </p>
        </Section>

        <Section title="4. Return Policy">
          <p className="mb-3">
            Returns are accepted strictly under the following conditions:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Only defective, damaged, or incorrect products are eligible for return</li>
            <li>Return request must be initiated within <strong>24 hours</strong> of delivery</li>
          </ul>
        </Section>

        <Section title="5. Return & Replacement Process">
          <ul className="list-disc ml-6 space-y-2">
            <li>Once the return request is approved, the replacement process will begin within <strong>2–3 business days</strong>.</li>
            <li>After dispatch, the replacement product is expected to be delivered within <strong>4–7 business days</strong>.</li>
          </ul>
        </Section>

        <Section title="6. Important Notes">
          <ul className="list-disc ml-6 space-y-2">
            <li>Delivery timelines may be affected by courier delays, weather conditions, or other unforeseen circumstances.</li>
            <li>We are not responsible for delays caused by external factors beyond our control.</li>
          </ul>
        </Section>

        <Section title="7. Contact Us">
          <p className="mb-1">📧 Email: vishnucvs@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
          <p>
            🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V),
            Main Street, Murali Book Stores Opposite, 518510
          </p>
        </Section>

      </div>
    </div>
  );
}
