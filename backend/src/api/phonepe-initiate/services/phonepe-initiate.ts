export default {
  async generateTransactionId() {
    return "txn_" + Date.now();
  },
};
