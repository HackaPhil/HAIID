import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './DietReq.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { useIntroContext } from '../../../App';
import axios from 'axios';
import { readFile, readDir, read, readdir } from 'react-native-fs';

const DietReq = ({navigation, isIntro}) => {
  const intro = useIntroContext();
  const allergies = ['Tree nuts', 'Peanuts', 'Fish', 'Shellfish', 'Egg', 'Soy']
  
  // const fs = require('react-native-fs');

  const getDataUsingPostCall = () => {
    const form = new FormData();

    // const image = {
    //   uri:  '../../../resources/images/iu-7.jpeg',
    //   name: "iu-7.jpeg",
    //   type: 'image/jpeg',
    // }

    // form.append('files',
    //     { image:  '../../../resources/images/iu-7.jpeg' }
    // );

    // form.append('image', image);
    // form.append('Content-Type', 'image/jpeg')

    form.append('image', '/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg');

    // form.append("image", {
    //   name: "splashScreen.png", // Whatever your filename is
    //   uri: 'file:///Users/philip/HAIID/plantToPlate/resources/splashScreen.png',
    //   type: "image/png", // video/mp4 for videos..or image/png etc...
    // });

    // form.append('image', {
    //   image: '/Users/philip/HAIID/plantToPlate/resources/splashScreen.png',
    // });

    // form.append('image', require('../../../resources/images/iu-7.jpeg'));

    const form2 = {image: '/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg'}

    const config = {
      method: 'post',
      url: 'http://172.16.3.103:5000/get_progress',
      headers: {
          "Content-Type": "multipart/form-data",
      },
      data: form
      // data: {image: '/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg'}
    };

    // axios(config)
    axios
      .post('http://172.16.3.103:5000/get_progress', form, 
        {
          withCredentials: true,
          // headers: {'Content-Type': 'multipart/form-data'},
        },
      )
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        console.log(form)
      });
  };

  return (
    getDataUsingPostCall(),
    <SafeAreaView style={styles.background}>
      <Header title="Dietary Requirements" isIntro={intro} notifications={intro ? false : true}></Header>

      <ScrollView style={styles.scrollView}>
        <GreenButton text="API call" onPress={() => getDataUsingPostCall()}></GreenButton>
        <Image source={require('../../../resources/images/iu-7.jpeg')} style={styles.image}></Image>
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
