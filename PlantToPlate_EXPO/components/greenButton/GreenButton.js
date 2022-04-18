import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreenButton.styles.js';


const GreenButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>          
            {text}
          </Text>
    </TouchableOpacity>
  );
};

export default GreenButton;
