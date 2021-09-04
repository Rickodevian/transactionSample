import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator, Button,
  FlatList, Text,
  View,
} from "react-native";

import styles from './Transaction.styles';
import TransactionItem from '../../Components/TransactionItem/TransactionItem.component';
import ListHeaderSearchBar from '../../Components/ListHeaderSearchBar/ListHeaderSearchBar.component';
import { getTransaction, sortTransaction } from '../../Utils/Transaction.utils';

const sortingCategory = [
  {value: 'name_inc', text: 'Nama A-Z'},
  {value: 'name_dec', text: 'Nama Z-A'},
  {value: 'date_dec', text: 'Tanggal Terbaru'},
  {value: 'date_inc', text: 'Tanggal Terlama'},
];

const Transaction = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [transactionList, setTransactionList] = useState([]);
  const [transactions, setTransactionData] = useState([]);

  const getTransactionData = async () => {
    try {
      const response = await fetch('https://nextar.flip.id/frontend-test');
      const result = await response.json();
      const transactionList = Object.values(result);
      setTransactionList(transactionList);
      setTransactionData(transactionList);
    } catch (error) {
      // show reload
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  const onPressItem = (transaction) => {
    navigation.navigate('Transaction Detail', { transaction });
  };

  const onSearchTransaction = (text) => {
    const result = getTransaction(transactions, text);

    setTransactionList(result);
  };

  const getSortedTransaction = (method) => {
    switch (method) {
      case 'name_inc':
        return sortTransaction(transactions, 'beneficiary_name');
      case 'name_dec':
        return sortTransaction(transactions, 'beneficiary_name', 'desc');
      case 'date_dec':
        return sortTransaction(transactions, 'created_at', 'desc');
      case 'date_inc':
        return sortTransaction(transactions, 'created_at');
    }
  }

  const onSelectedSearchMethod = (method) => {
    const result = getSortedTransaction(method);
    setLoading(true);
    setTimeout(() => {
      setTransactionList(result);
      setLoading(false);
    }, 300);
  };

  const renderItem = ({ item }) => {
    return <TransactionItem transaction={item} onPressItem={onPressItem} />;
  };

  const renderLoading = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );

  const renderContent = (transactionList) => (
    <View style={{flexDirection: 'column'}}>
      <FlatList
        data={transactionList}
        keyExtractor={({id}) => id}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeaderSearchBar
            onSearch={onSearchTransaction}
            onSelectedSearchMethod={onSelectedSearchMethod}
            sortingCategory={sortingCategory}
          />
        }
        ListHeaderComponentStyle={styles.listHeader}
        stickyHeaderIndices={[0]}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? renderLoading() : renderContent(transactionList)}
    </View>
  );
};

export default Transaction;
