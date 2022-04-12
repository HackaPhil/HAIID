import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreenButtonRound.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const GreenButtonRound = ({iconName, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        {/* <Text style={styles.btnText}>          
          <FontAwesomeIcon icon={iconName} size={30} />
        </Text> */}

        <FontAwesomeIcon style={styles.icon} icon={iconName} size={50} />

    </TouchableOpacity>
  );
};

export default GreenButtonRound;
