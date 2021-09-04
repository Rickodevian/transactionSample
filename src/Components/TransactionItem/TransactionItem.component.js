import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight, faCircle} from '@fortawesome/free-solid-svg-icons';

import styles from './TransactionItem.component.styles';
import Button from '../Button/Button.component';
import {getFormattedAmount} from '../../Utils/Transaction.utils';
import {getFormattedDate} from '../../Utils/Date.utils';
import Constants from '../../Constants/Constants';

const {
  TRANSACTION_STATUS: { SUCCESS },
  BUTTON
} = Constants;

const TransactionItem = ({transaction, onPressItem}) => {
  const onPressListItem = () => {
    onPressItem(transaction);
  };

  const renderIcon = (icon, size = 15) => (
    <View style={styles.icon}>
      <FontAwesomeIcon icon={icon} size={size} />
    </View>
  );

  const renderBankTransaction = (from, to) => (
    <View style={styles.transactionContainer}>
      <Text style={styles.transactionBank}>{from}</Text>
      {renderIcon(faArrowRight)}
      <Text style={styles.transactionBank}>{to}</Text>
    </View>
  );

  const renderTransactionHistory = (amount, createdTransaction) => (
    <View style={styles.transactionContainer}>
      <Text style={styles.transactionText}>{getFormattedAmount(amount)}</Text>
      {renderIcon(faCircle, 10)}
      <Text style={styles.transactionText}>{getFormattedDate(createdTransaction)}</Text>
    </View>
  );

  const renderTransactionInfo = transaction => (
    <View style={styles.transactionInfo}>
      {renderBankTransaction(
        transaction.sender_bank,
        transaction.beneficiary_bank,
      )}
      <Text style={styles.transactionText}>{transaction.beneficiary_name}</Text>
      {renderTransactionHistory(transaction.amount, transaction.created_at)}
    </View>
  );

  const renderButton = (transaction) => {
    const type = transaction.status === SUCCESS ? BUTTON.TYPE.SUCCESS : BUTTON.TYPE.PENDING_INVERT;
    const text = transaction.status === SUCCESS ? 'Berhasil' : 'Pengecekan';
    return (
      <View style={styles.transactionButton}>
        <Button text={text} type={type} onPress={onPressListItem} />
      </View>
    );
  };

  return (
    <View style={styles.container(transaction.status)}>
      <View style={styles.transactionSection}>
        {renderTransactionInfo(transaction)}
        {renderButton(transaction)}
      </View>
    </View>
  );
};

export default TransactionItem;
