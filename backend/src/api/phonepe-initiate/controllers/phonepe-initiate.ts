import crypto from "crypto";

export default {
  async create(ctx) {
    try {
      const { amount } = ctx.request.body;

      const merchantId = process.env.PHONEPE_MERCHANT_ID;
      const saltKey = process.env.PHONEPE_SALT_KEY;
      const saltIndex = process.env.PHONEPE_SALT_INDEX;
      const redirectUrl = process.env.PHONEPE_REDIRECT_URL;

      const phonePeUrl = "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";

      const payload = {
        merchantId,
        merchantTransactionId: "txn_" + Date.now(),
        merchantUserId: "user_" + Date.now(),
        amount: amount * 100, // convert to paise
        redirectUrl,
        callbackUrl: redirectUrl,
        paymentInstrument: { type: "PAY_PAGE" },
      };

      const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64");
      const checksum =
        crypto
          .createHash("sha256")
          .update(payloadBase64 + phonePeUrl + saltKey)
          .digest("hex") + "###" + saltIndex;

      const response = await fetch(phonePeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        body: JSON.stringify({ request: payloadBase64 }),
      });

      const data = await response.json();
      ctx.send(data);
    } catch (err) {
      console.error("PhonePe initiation error:", err);
      ctx.throw(500, "Payment initiation failed");
    }
  },
};
