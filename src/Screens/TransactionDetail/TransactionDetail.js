import React from 'react';
import { Text, View, Clipboard } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from './TransactionDetail.styles';
import Colors from '../../Utils/Colors.utils';
import {getFormattedAmount} from '../../Utils/Transaction.utils';
import {getFormattedDate} from '../../Utils/Date.utils';

const TransactionDetail = ({ route, navigation }) => {
  const { transaction } = route.params;

  const onCloseTransaction = () => {
    navigation.goBack();
  };

  const onPressCopy = () => {
    Clipboard.setString(transaction.id);
  };

  const renderTitle = (content = '', icon = null) => (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{content}</Text>
      {icon && (
        <TouchableOpacity onPress={onPressCopy}>
          <FontAwesomeIcon icon={icon} color={Colors.orangeBright} />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderTransactionInfo = (label, content) => (
    <View style={styles.transactionInfoTextContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.transactionContent}>{content}</Text>
    </View>
  );

  const renderBankTransfer = (transaction) => (
    <View style={styles.bankTransferContainer}>
      <Text style={styles.bankProvider}>{transaction.sender_bank}</Text>
      <FontAwesomeIcon icon={faArrowRight} />
      <Text style={styles.bankProvider}>{transaction.beneficiary_bank}</Text>
    </View>
  );

  const renderTransactionData = (transaction) => (
    <React.Fragment>
      <View style={styles.transactionInfoContainer}>
        {renderTransactionInfo(transaction.beneficiary_name,transaction.account_number )}
        {renderTransactionInfo('NOMINAL', getFormattedAmount(transaction.amount))}
      </View>
      <View style={styles.transactionInfoContainer}>
        {renderTransactionInfo('BERITA TRANSFER', transaction.remark)}
        {renderTransactionInfo('KODE UNIK', transaction.unique_code)}
      </View>
      <View style={styles.transactionInfoContainer}>
        {renderTransactionInfo('WAKTU DIBUAT', getFormattedDate(transaction.created_at))}
      </View>
    </React.Fragment>
  );

  const renderDetailText = () => (
    <View style={styles.detailLabelContainer}>
      {renderTitle('DETAIL TRANSAKSI')}
      <TouchableOpacity style={styles.closeDetail} onPress={onCloseTransaction}>
        <Text style={styles.detailText}>TUTUP</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTitle(`ID TRANSAKSI: ${transaction.id}`, faCopy)}
      {renderDetailText()}
      {renderBankTransfer(transaction)}
      {renderTransactionData(transaction)}
    </View>
  );
}

export default TransactionDetail;
