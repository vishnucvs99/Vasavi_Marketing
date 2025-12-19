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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          About Us
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to <strong>Vasavi Marketing</strong> — your trusted
          destination for  electronics, and premium accessories.
          Our mission is to provide high-quality products, transparent service,
          and exceptional customer support for every shopper.
        </p>

        <Section title="Who We Are">
          <p>
            Founded in Kurnool, Vasavi Marketing is a trusted electronics and household
            products store serving customers with quality and reliability. With years
            of experience in the retail market, we understand customer needs and focus
            on providing products that offer real value, durability, and performance.
          </p>
        </Section>

        <Section title="What We Offer">
          <ul className="list-disc ml-6 space-y-2">
            <li>Home & Kitchen Appliances</li>
            <li>Electrical & Electronic Items</li>
            <li>Fans, Mixers, Grinders & Small Appliances</li>
            <li>Mobile Accessories & Everyday Gadgets</li>
            <li>After-Sales Support & Service Assistance</li>
          </ul>
        </Section>


        <Section title="Our Values">
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Quality:</strong> Only premium and original products.</li>
            <li><strong>Trust:</strong> Transparent pricing & reliable service.</li>
            <li><strong>Support:</strong> Customer-first assistance before and after purchase.</li>
            <li><strong>Innovation:</strong> Always updated with the latest tech trends.</li>
          </ul>
        </Section>

        <Section title="Store Location">
          <p className="mb-1">📍 Yerraguntla(V)main street murali Book stores opposite</p>
          <p className="mb-1">Andhara Pradesh , Kurnool</p>
          <p>PIN: 518510</p>
        </Section>

        <Section title="Contact Us">
          <p className="mb-1">📧 Email: vishnucvs99@gmail.com</p>
          <p className="mb-1">📞 Phone: +91 8247438114</p>
        </Section>

        <p className="text-sm text-gray-500 mt-6">
          Thank you for choosing vasavi marketing. We look forward to serving you!
        </p>

      </div>
    </div>
  );
}
