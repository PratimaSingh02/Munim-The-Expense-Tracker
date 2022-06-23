const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;

    case 'DELETE_TRANSACTION_BY_INDEX':
      if (state.length >= action.payload) {
        transactions = state.filter((transaction, index) => index !== action.payload - 1);

        localStorage.setItem('transactions', JSON.stringify(transactions));

        return transactions;
      }
      else
        return state;

    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;