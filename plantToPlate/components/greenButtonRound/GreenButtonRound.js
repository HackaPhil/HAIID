import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreenButtonRound.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const GreenButtonRound = ({iconName, propStyles, iconSize, onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn, propStyles]} onPress={onPress}>
      <FontAwesomeIcon style={styles.icon} icon={iconName} size={iconSize} />
    </TouchableOpacity>
  );
};

GreenButtonRound.defaultProps = {
  iconSize: 50,
}

export default GreenButtonRound;
