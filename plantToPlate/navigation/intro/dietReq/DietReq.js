import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './DietReq.styles.js';
import Logo from '../../../components/icons/Logo.js';

const DietReq = ({title}) => {
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>          
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    );
};
  
export default DietReq;
