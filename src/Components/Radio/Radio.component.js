import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';

import styles from './Radio.component.styles';

const Radio = props => {
  const onPressRadio = () => {
    props.onPress(props.value);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressRadio}>
      <View style={styles.radio}>
        {props.selected && <View style={styles.selected} />}
      </View>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Radio;
