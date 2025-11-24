"use client";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
        
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Shipping Policy
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          <strong>Effective Date:</strong> 02-04-2025
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          This Shipping Policy outlines how CameraScan Kottayam processes, 
          delivers, and handles shipping-related concerns for customer orders.
        </p>

        {/* Sections */}
        <Section title="1. Shipping Coverage">
          We currently ship products across Andhara Pradesh. Some remote locations may 
          have limited coverage based on courier partner availability.
        </Section>

        <Section title="2. Delivery Time">
          <ul className="list-disc ml-6 space-y-2">
            <li>Standard delivery: 2–5 business days</li>
            <li>High-demand or remote locations: 5–7 business days</li>
            <li>Store pickup orders: Ready within 24–48 hours</li>
          </ul>
        </Section>

        <Section title="3. Shipping Charges">
          <ul className="list-disc ml-6 space-y-2">
            <li>Shipping fees vary based on location and product weight.</li>
            <li>COD orders may include additional handling charges.</li>
          </ul>
        </Section>

        <Section title="4. Order Tracking">
          Once your order is shipped, you will receive an SMS or email containing 
          the tracking ID and courier partner details.
        </Section>

        <Section title="5. Delivery Issues">
          <ul className="list-disc ml-6 space-y-2">
            <li>If the courier attempts delivery and the customer is unavailable, re-delivery will be scheduled.</li>
            <li>After 2 failed attempts, the package may be returned to us.</li>
          </ul>
        </Section>

        <Section title="6. Damaged or Missing Items">
          <ul className="list-disc ml-6 space-y-2">
            <li>Report any damage within 24 hours of delivery.</li>
            <li>Unboxing video is mandatory for damage claims.</li>
            <li>Replacement will be provided after verification.</li>
          </ul>
        </Section>

        <Section title="7. Contact Us">
          <p className="mb-2">📧 Email: vishnucvs@gmail.com</p>
          <p className="mb-2">📞 Phone: +91 8247438114</p>
          <p>🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V), main street Murali Book stores opposite [518510]</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-purple-500 mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

