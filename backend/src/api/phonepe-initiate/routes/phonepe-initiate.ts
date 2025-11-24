export default {
  routes: [
    {
      method: "POST",
      path: "/phonepe-initiate",
      handler: "phonepe-initiate.create",
      config: {
        auth: false, // disable auth for public access
      },
    },
  ],
};
