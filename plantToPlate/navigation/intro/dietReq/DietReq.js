import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './DietReq.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { useIntroContext } from '../../../App';

const DietReq = ({navigation, isIntro}) => {
  const intro = useIntroContext();
  const allergies = ['Tree nuts', 'Peanuts', 'Fish', 'Shellfish', 'Egg', 'Soy']

  return (
    <SafeAreaView style={styles.background}>
      <Header title="Dietary Requirements" isIntro={intro} notifications={intro ? false : true}></Header>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Allergies</Text>
        <Text style={styles.question}>Are you allergic to any of the following?</Text>
        {allergies.map((allergy,index) =>
          <View key={index} style={styles.row}>
            <Text style={styles.mainText}>{allergy}</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
        )}
        <Text style={styles.title}>Diet Preferences</Text>
      </ScrollView>

      {intro ? <View style={{top: 40}}><GreenButton text="Continue" style={styles.btn} onPress={() => navigation.navigate('MyIngredients')}></GreenButton></View>
      : <Footer isCamera={true} navigation={navigation}></Footer>}   

    </SafeAreaView>
  );
};
  
export default DietReq;
