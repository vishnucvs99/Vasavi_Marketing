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
          This Shipping Policy outlines how Vasavi Marketing processes, ships,
          and delivers customer orders placed through our website.
        </p>

        {/* Sections */}
        <Section title="1. Processing Time">
          <p>
            All orders are processed within <strong>1–2 business days</strong>.
            During peak periods such as festival seasons, processing may take
            slightly longer; however, we make every effort to ship orders as
            quickly as possible.
          </p>
        </Section>

        <Section title="2. Shipping Coverage">
          <p>
            We currently ship products across Andhra Pradesh. Shipping availability
            to remote or rural locations may vary depending on courier partner coverage.
          </p>
        </Section>

        <Section title="3. Delivery Time">
          <p className="mb-3">
            Delivery times depend on your location and courier availability:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Standard delivery: 3–7 business days</li>
            <li>High-demand or festive periods may cause delays</li>
            <li>Delays may also occur due to weather conditions or unforeseen events</li>
          </ul>
        </Section>

        <Section title="4. Shipping Charges">
          <ul className="list-disc ml-6 space-y-2">
            <li>Shipping charges vary based on delivery location and product weight.</li>
            <li>Cash on Delivery (COD) orders may include additional handling charges.</li>
          </ul>
        </Section>

        <Section title="5. Order Tracking">
          <p>
            Once your order is shipped, you will receive a tracking number via
            email or SMS. You can use this tracking information to monitor your
            shipment in real time.
          </p>
        </Section>

        <Section title="6. Delivery Issues">
          <ul className="list-disc ml-6 space-y-2">
            <li>If the courier attempts delivery when you are unavailable, a re-delivery will be scheduled.</li>
            <li>After two failed delivery attempts, the order may be returned to us.</li>
          </ul>
        </Section>

        <Section title="7. Damaged or Missing Items">
          <ul className="list-disc ml-6 space-y-2">
            <li>Any damaged or missing items must be reported within 24 hours of delivery.</li>
            <li>An unboxing video is mandatory for processing damage claims.</li>
            <li>Replacement or resolution will be provided after verification.</li>
          </ul>
        </Section>

        <Section title="8. Contact Us">
          <p className="mb-2">📧 Email: vishnucvs@gmail.com</p>
          <p className="mb-2">📞 Phone: +91 8247438114</p>
          <p>
            🏢 Address: Kurnool(D), Sirvella (M), Yerraguntla (V),
            Main Street, Murali Book Stores Opposite, 518510
          </p>
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
