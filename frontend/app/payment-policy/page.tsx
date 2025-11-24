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

export default function PaymentPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Payment Policy
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="mb-8 text-gray-700 leading-relaxed">
          This Payment Policy explains the terms governing all payments made on
          our website. By placing an order, you agree to follow the payment
          rules and guidelines below. Our goal is to ensure safe, transparent,
          and smooth transactions for all customers.
        </p>

        <Section title="1. Payment Methods">
          <p className="mb-4 text-gray-700">
            We provide multiple secure payment options for your convenience:
          </p>

          <h3 className="font-semibold mb-2">A. Online Payments (Prepaid)</h3>
          <p className="mb-4">
            All prepaid transactions are processed through highly secure payment
            gateways supporting:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Credit Cards (Visa, MasterCard, Rupay, Amex)</li>
            <li>Debit Cards</li>
            <li>UPI (Google Pay, PhonePe, Paytm, BHIM UPI, etc.)</li>
            <li>Net Banking (All major banks)</li>
            <li>Wallets (Amazon Pay, Paytm, Mobikwik, etc.)</li>
            <li>EMI (Available for select banks)</li>
          </ul>

          <p className="mb-6">
            Once payment is completed, you will receive SMS/email confirmation.
          </p>

          <h3 className="font-semibold mb-2">B. Cash on Delivery (COD)</h3>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>COD is available only in select locations.</li>
            <li>Orders may be verified via SMS/phone call before dispatch.</li>
            <li>Additional COD handling charges may apply.</li>
            <li>Only cash accepted at delivery (no UPI/cards).</li>
          </ul>

          <h3 className="font-semibold mb-2">C. Store Pickup Payments</h3>
          <p className="mb-4">
            Customers choosing store pickup may pay using:
          </p>

          <ul className="list-disc ml-6 mb-6">
            <li>Cash</li>
            <li>UPI / QR Code Payments</li>
            <li>Bank Transfer</li>
          </ul>

          <p className="mb-6">
            Store pickup orders must be collected within 7 days.
          </p>
        </Section>

        <Section title="2. Payment Processing & Order Confirmation">
          <ul className="list-disc ml-6 space-y-2">
            <li>Online payments are auto-confirmed after successful transaction.</li>
            <li>COD orders are shipped only after verification.</li>
            <li>Store pickup requires a confirmation message before visiting.</li>
          </ul>
        </Section>

        <Section title="3. Transaction Security">
          <p className="mb-4">
            All online payments are fully encrypted and follow industry-standard security:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>PCI DSS Compliance</li>
            <li>3D Secure Authentication</li>
            <li>Fraud monitoring and protection</li>
          </ul>

          <p className="mt-4">
            We will <strong>never</strong> ask for OTP, passwords, or banking details via phone/email.
            Report any suspicious call immediately.
          </p>
        </Section>

        <Section title="4. International Payments">
          We currently accept only domestic INR payments. International cards and
          cross-border payments are not supported.
        </Section>

        <Section title="5. Changes to This Policy">
          We may update this Payment Policy from time to time. Continuing to use
          our website indicates acceptance of the updated terms.
        </Section>

        <Section title="6. Contact Information">
          <p className="mb-1">📧 Email: vishnucvs99@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
            <p>🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V), main street Murali Book stores opposite [518510]</p>
        </Section>

        <p className="text-sm text-gray-500">
          By making a purchase, you confirm that you have read and agree to this Payment Policy.
        </p>

      </div>
    </div>
  );
}
