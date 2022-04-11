import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './DietReq.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';

const DietReq = ({navigation, isIntro}) => {
    return (
      <SafeAreaView style={styles.background}>
        <Header title="Dietary Requirements" notifications='false'></Header>

        <ScrollView>
          
        </ScrollView>

        {{isIntro} ? <GreenButton text="Continue" style={styles.btn} onPress={() => navigation.navigate('MyIngredients')}></GreenButton>
        : <Text></Text>}   

      </SafeAreaView>
    );
};
  
export default DietReq;
