import { factories } from "@strapi/strapi";
import twilio from "twilio";

export default factories.createCoreController("api::order.order", ({ strapi }) => ({
  async orderEmail(ctx) {
    const { customer, cart, total } = ctx.request.body;

    if (!customer || !cart) {
      return ctx.badRequest("Missing fields");
    }

    // --- Create order ---
    const order = await strapi.entityService.create("api::order.order", {
      data: {
        customer_name: customer.name,
        customer_email: customer.email,
        customer_phone: customer.phone,
        address: customer.address,
        pincode: customer.pincode,
        cart_items: cart,
        total: total,
        order_status: "Pending",
      },
    });

    // --- Send Email ---
    try {
      await strapi.plugins["email"].services.email.send({
        to: customer.email,
        subject: "Order Received Successfully",
        text: `Thank you ${customer.name}! Your order total is ₹${total}.`,
      });
    } catch (err) {
      console.log("Email error:", err);
    }

    // --- Send SMS ---
   // --- Send SMS ---
try {
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  await client.messages.create({
    body: `Hi ${customer.name}, your order has been received successfully! Total: ₹${total}.`,
    from: process.env.TWILIO_PHONE, // MUST be Twilio SMS-enabled number
    to: `+91${customer.phone}`, // Always include +91 for India
  });

} catch (err) {
  console.log("SMS error:", err);
}


    return { success: true, order };
  },
}));
