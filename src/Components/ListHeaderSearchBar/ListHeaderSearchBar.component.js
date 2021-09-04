import React, {useState} from 'react';
import {Text, TextInput, View } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import styles from './ListHeaderSearchBar.component.styles';
import Colors from '../../Utils/Colors.utils';
import Radio from '../Radio/Radio.component';

const ListHeaderSearchBar = ({ onSearch, onSelectedSearchMethod, sortingCategory }) => {
  const [isVisible, setVisibility] = useState(false);
  const [selectedSortMethod, setSortMethod] = useState('');

  const toggleModal = () => {
    setVisibility(!isVisible);
  };

  const onSortMethodSelected = value => {
    setSortMethod(value);
    onSelectedSearchMethod(value);
    setVisibility(false);
  };

  const onChangeText = (text) => {
    onSearch(text);
  };

  const renderRadio = () => (
    <React.Fragment>
      {sortingCategory.map(RadioButton => (
        <View style={styles.radioContainer}>
          <Radio
            value={RadioButton.value}
            onPress={onSortMethodSelected}
            selected={selectedSortMethod === RadioButton.value}
            text={RadioButton.text}
          />
        </View>
      ))}
    </React.Fragment>
  );

  const renderSortingModal = () => (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>{renderRadio()}</View>
        </View>
      </Modal>
    </View>
  );

  const renderSearchIcon = () => (
    <View style={styles.searchIcon}>
      <FontAwesomeIcon icon={faSearch} color={Colors.greyMediumLight} />
    </View>
  );

  const renderSortingButton = () => (
    <View style={styles.sortButton}>
      <TouchableOpacity style={styles.sortingWrapper} onPress={toggleModal}>
        <Text style={styles.sortText}>URUTKAN</Text>
        <FontAwesomeIcon
          icon={faChevronDown}
          color={Colors.orangeBright}
          style={styles.sortIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.searchBarContainer}>
      {renderSortingModal()}
      {renderSearchIcon()}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Cari nama, bank, atau nominal"
      />
      {renderSortingButton()}
    </View>
  );
};

export default ListHeaderSearchBar;
