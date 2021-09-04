import Constants from '../Constants/Constants';

const isTextMatch = (text, searchText) => text.indexOf(searchText) > -1;

export const getTransaction = (transactions, searchText) => {
  const textToSearch = searchText.toUpperCase();
  return transactions.filter((transaction) => {
    return isTextMatch(transaction.beneficiary_name.toUpperCase(), textToSearch) ||
      isTextMatch(transaction.sender_bank.toUpperCase(), textToSearch) ||
      isTextMatch(transaction.beneficiary_bank.toUpperCase(), textToSearch) ||
      isTextMatch(transaction.amount.toString(), searchText);
  });
};

const compareValue = (key, order = 'asc') => {
  return (objA, objB) => {
    // check property availability
    if (!objA.hasOwnProperty(key) || !objB.hasOwnProperty(key)) return 0;

    // get comparison value
    const valueA =
      typeof objA[key] === 'string' ? objA[key].toUpperCase() : objA[key];
    const valueB =
      typeof objB[key] === 'string' ? objB[key].toUpperCase() : objB[key];

    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export const sortTransaction = (transactions, key, order = 'asc') => {
  return transactions.sort(compareValue(key, order));
};

export const getFormattedAmount = amount => {
  return `${Constants.CURRENCY} ${amount.toLocaleString('id-ID', {
    currency: 'IDR',
  })}`;
};

export default {
  getFormattedAmount,
  getTransaction,
  sortTransaction
};
