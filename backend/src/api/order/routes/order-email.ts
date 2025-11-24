export default {
  routes: [
    {
      method: "POST",
      path: "/order-email",
      handler: "order.orderEmail",
      config: {
        auth: false,   // if you want it public
      },
    },
  ],
};
