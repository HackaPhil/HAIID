import React, {useState, useRef} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Animated, Image } from 'react-native'
import styles from './MealGenerator.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileLines, faCheck } from '@fortawesome/free-solid-svg-icons';


const MealGenerator = ({navigation}) => {
    const dropdownSlide = useRef(new Animated.Value(-750)).current;
    const screen1Fade = useRef(new Animated.Value(1)).current;
    const screen2Fade = useRef(new Animated.Value(0)).current;
    const [recipeInfo, setRecipeInfo] = useState(false);
    const [showAll, setShowAll] = useState(false);
    
    const recipeData = {
      'Beef Pesto Pasta': '33%',
      'Lasagne': '25%',
      'Chicken Stir Fry': '20%',
    }
    const otherRecipes = ['Mac & Cheese', 'Ratatouille', 'Vegetable Omelette', 'Breakfast Bap', 'Falafel']

    const recipeItems = [];
    const otherRecipeItems = [];

    dropdownFall = () => {
      Animated.timing(
          dropdownSlide,
          {
            toValue: 30,
            duration: 250,
            useNativeDriver: true,
          }
      ).start();
      Animated.timing(
          screen1Fade,
          {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }
      ).start();
      Animated.timing(
          screen2Fade,
          {
            delay: 200,
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
          }
      ).start();
      setRecipeInfo(true);
    };
  
    dropdownRise = () => {
      Animated.timing(
          dropdownSlide,
          {
            toValue: -750,
            duration: 250,
            useNativeDriver: true,
          }
      ).start();
      Animated.timing(
          screen1Fade,
          {
            delay: 200,
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
          }
      ).start();
      Animated.timing(
          screen2Fade,
          {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }
      ).start();
      setRecipeInfo(false);
    };

    const getRecipes = () => {
      axios.get(`http://172.16.3.103:5000/get_recipes?userIngredients=${ingredients}&allowMissed=2&recipesWanted=5`)
      .then(function (response) {
        // show response
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
    
    for (const i in recipeData) {
      recipeItems.push(
        <TouchableOpacity key={i} style={styles.row} onPress={() => dropdownFall()}>
          <View style={styles.section}>
            <FontAwesomeIcon style={styles.icon} icon={faFileLines} size={22}></FontAwesomeIcon>
            <Text style={styles.mainText}>{i}</Text>
          </View>
          <View>
            <Text style={styles.mainText}>{recipeData[i]}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    for (let i of otherRecipes) {
      {showAll && recipeItems.push(
        <TouchableOpacity key={i} style={styles.row}>
          <View style={styles.section}>
            <FontAwesomeIcon style={styles.icon} icon={faFileLines} size={22}></FontAwesomeIcon>
            <Text style={styles.mainText}>{i}</Text>
          </View>
          <View>
            <Text style={styles.mainText}>0%</Text>
          </View>
        </TouchableOpacity>
      )}
    }

    return (
      // getRecipes(),
      <SafeAreaView style={styles.background}>
        <Header title="Meal Generator" isIntro={false} notifications={true}></Header>

        <Animated.ScrollView style={[styles.scrollView, {zIndex: recipeInfo ? -3 : 0}, {opacity: screen1Fade}]}>
          <View style={styles.section}>
            <TouchableOpacity style={[styles.check, showAll && styles.checkFilled]} onPress={() => setShowAll(!showAll)}>
              {showAll && <FontAwesomeIcon style={{color: 'white'}} icon={faCheck} size={18}></FontAwesomeIcon>}
            </TouchableOpacity>
            <Text style={styles.showAll}>Show all</Text>
          </View>
         
          <View style={styles.row}>
            <Text style={styles.title}>Recipe</Text>
            <Text style={styles.title}>Status</Text>
          </View>

          {recipeItems}
          {otherRecipeItems}
        </Animated.ScrollView>

        <Animated.View style={[styles.dropdown, {transform: [{translateY: dropdownSlide}]}]}>
            <Animated.ScrollView style={[styles.dropdownView, {opacity: screen2Fade}]}>
              <View style={styles.section}>
                <Image source={require('../../../resources/images/istockphoto-168419882-170667a.jpeg')} style={styles.image}></Image>
                <Text style={[styles.title, {fontSize: 24}]}>Lasagne</Text>
              </View>
              <View style={{bottom: 20}}>
                <Text style={[styles.title, {textAlign: 'right'}]}>25%</Text>
                <Text style={[styles.title, {textAlign: 'right'}]}>1/4 Ingredients</Text>
              </View>
              <View>
                <Text style={[styles.title, {textAlign: 'center'}]}>Beef - 500g</Text>
                <Text style={[styles.title, styles.ingredient]}>Cheese - 500g</Text>
                <Text style={[styles.title, styles.ingredient]}>Lasagne Noodles - 100g</Text>
                <Text style={[styles.title, styles.ingredient]}>Tomato - 2</Text>
              </View>  
              <Text style={[styles.title, {marginTop: 20}]}>Recipe</Text>
              <Text style={styles.recipeStep}>1. Preheat the oven to 200C/180C Fan/Gas 6</Text>   
              <Text style={styles.recipeStep}>2. Heat the olive oil in a large frying pan over a medium heat. Add the mince to the hot oil with a good pinch of salt and pepper. Brown the mince for 5-6 minutes until coloured all over and beginning to crisp. Remove the mince from the pan and set aside.</Text>   
            </Animated.ScrollView>
        </Animated.View>

        <Footer isArrow={recipeInfo ? true : false} navigation={navigation} pressArrow={() => dropdownRise()} takePic={() => navigation.navigate('MainCamera')}></Footer>
      </SafeAreaView>
    );
};
  
export default MealGenerator;
