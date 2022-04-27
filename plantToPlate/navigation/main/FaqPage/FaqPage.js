import React, {useState, useRef} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Animated, Image } from 'react-native'
import styles from './FaqPage.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileLines, faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, StatusBar } from 'react-native';

const FaqPage = ({navigation}) => {
    const dropdownSlide = useRef(new Animated.Value(-750)).current;
    const screen1Fade = useRef(new Animated.Value(1)).current;
    const screen2Fade = useRef(new Animated.Value(0)).current;
    const [recipeInfo, setRecipeInfo] = useState(false);
    const [showAll, setShowAll] = useState(false);
    
    
    const recipeItems = [];
    const otherRecipeItems = [];

    
    return (
  

  
      <SafeAreaView style={styles.background}>
        <Header title="FAQ" isIntro={false} notifications={true}></Header>

        <Animated.ScrollView style={[styles.scrollView, {zIndex: recipeInfo ? -3 : 0}, {opacity: screen1Fade}]}>
          
         
          <View style={styles.container}>
            <Text style={styles.title}>My camera on the app isn’t functioning and I’m unable to avail the feature.</Text>
            <Text style={styles.answer}>Please enable the app’s use of the camera in your device’s permission settings. Once done, refresh the app and you will be able to avail the feature.
</Text>
            <Text style={styles.title}>What is PlantToPlate?</Text>
            <Text style={styles.answer}>PlantToPlate is a Plant Growth Recognition App designed with the aim to provide its users an automatic functionality for tasks such as tracking available ingredients, tracking any data collected about the plants they are growing, and measuring the plant growth based on visual data (photographs). It can also be used to assist its user’s decision making concerning plant harvest times, recipe suggestions, and shopping recommendations to enable the largest choice in available recipes (augment tasks) </Text>
            <Text style={styles.title}>How does the AI work? </Text>
            <Text style={styles.answer}>The AI in the app is used to classify maturity stages of common household crops for optimal harvest time. Using this technology, the user can gain a better understanding of the growth stage of their crops and be provided with an edit image for when the crop can be harvested. The maturity of the crop is determined based on the stem and leaves. The plant data produced by the AI is automatically stored on the app. 

The AI uses deep Convolutional Neural Networks (CNN) for image classification: images are first classified into a species, and then a second CNN is used to generate confidence values for specific growth stages. The confidence values are then used to create an estimate of the plant’s maturity as a percentage. The AI is defined such that correct species classification and percentage maturity estimation within 5% of the correct value is considered a success, and any incorrect classification or estimate is a failure. 

We made sure that growth classifiers for each species of plant were trained on datasets of comparable quality to maximise the success rate of classifications without any geographical bias.</Text>
            
          
          </View>

          {recipeItems}
          {otherRecipeItems}
        </Animated.ScrollView>

        

        <Footer isArrow={recipeInfo ? true : false} navigation={navigation} pressArrow={() => dropdownRise()} takePic={() => navigation.navigate('MainCamera')}></Footer>
      </SafeAreaView>

    );


};
  
export default FaqPage;
