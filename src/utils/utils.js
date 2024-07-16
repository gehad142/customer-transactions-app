
export const getTotalTransactionAmount = (transactions, customerId) => {
    return transactions
      .filter(transaction => transaction.customer_id === customerId)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };
  