import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Welcome.styles.js';
import Logo from '../../../components/icons/Logo.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';

const Welcome = ({navigation}) => {
    return (
      <View style={styles.background}>
        <Logo>logo.png</Logo>
        <Text style={[styles.text, {fontSize: 25}, {marginTop: 5},{marginBottom: 10}]}>Welcome to Plant To Plate</Text>
        <Text style={[styles.text, {fontSize: 18}, {marginBottom: 20}, {marginTop: 10}]}> Your user friendly 
        Plant Growth Recognition app to help you keep track of your food pantry and crop growth. 
        Get your meal suggestions along with your crop harvestation timeframes and avail your produce to their best abilities. 
</Text>
        <Text style={[styles.text, {fontSize: 15}, {marginBottom: 5}, {marginTop: 10}]}> The following pages will ask for your dietary requirements along with the current ingredients/crops available in your pantry before you avail the app's features.  
</Text>
        <Text style={[styles.text, {fontSize: 15},  {marginTop: 1}]}>  </Text>
        <GreenButton text="Start" onPress={() => navigation.navigate('DietReq')}></GreenButton>
      </View>
    );
};
  
export default Welcome;
