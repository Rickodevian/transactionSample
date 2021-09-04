import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.component.styles';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button(props.type)} onPress={props.onPress}>
      <Text style={styles.textColor(props.type)}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
