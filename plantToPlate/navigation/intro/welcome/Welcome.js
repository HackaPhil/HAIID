import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Welcome.styles.js';
import Logo from '../../../components/icons/Logo.js';

const Welcome = ({navigation}) => {
    return (
      <View style={styles.background}>
        <Logo></Logo>
        <Text style={[styles.text, {fontSize: 25}]}>Welcome to Plant To Plate</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exe</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('DietReq')}>
          <Text style={styles.btnText}>          
            Start
          </Text>
        </TouchableOpacity>
      </View>
    );
};
  
export default Welcome;
