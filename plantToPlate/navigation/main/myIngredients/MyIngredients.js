import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native'
import styles from './MyIngredients.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';

const MyIngredients = ({navigation, isIntro}) => {
    return (
      <SafeAreaView style={styles.background}>
        <Header title="My Ingredients" notifications='false'></Header>

        <ScrollView>
          
        </ScrollView>

        {{isIntro} ? <GreenButton text="Continue" onPress={() => navigation.navigate('MainCamera')}></GreenButton>
        : <Text></Text>}
        
      </SafeAreaView>
    );
};
  
export default MyIngredients;
