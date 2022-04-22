import React, {useState, useRef} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Animated, Image } from 'react-native'
import styles from './MyGarden.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil, faCaretLeft, faCaretRight, faPlus, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import { usePlantContext } from '../../../App';
import GrowthTimes from '../../../data/GrowthTimes.js';


const MyGarden = ({navigation}) => {
  const plantData = usePlantContext();

  const dropdownSlide = useRef(new Animated.Value(-750)).current;
  const screen1Fade = useRef(new Animated.Value(1)).current;
  const screen2Fade = useRef(new Animated.Value(0)).current;
  const [plantInfo, setPlantInfo] = useState(false);
  const [plantDetails, setPlantDetails] = useState();
  const [showAll, setShowAll] = useState(false);


  const plantList = [];

  plantDropdownFall = (data) => {
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
    var growTime = GrowthTimes[data["species"].toLowerCase()];
    var estimate = growTime-(data["value"]*growTime).toFixed(0);
    setPlantDetails(
      [<View key={data["species"]}>
        <View style={styles.row}>
          <Text style={styles.title}>{data["species"]}</Text>
          <View style={[styles.section, {marginTop: 10}]}>
            <Text style={styles.title}>1/1</Text>
            <TouchableOpacity style={styles.iconBtn}>
                <FontAwesomeIcon style={{color: 'white'}} icon={faPlus} size={18}></FontAwesomeIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Stage: </Text><Text style={styles.bigText}>{data["stage"]}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesomeIcon style={[styles.icon, styles.iconDisabled]} icon={faCaretLeft} size={20}></FontAwesomeIcon>
          <View style={styles.section}>
            <TouchableOpacity style={[styles.iconBtn, styles.iconBtn3]}>
                <FontAwesomeIcon style={{color: 'white'}} icon={faTrash} size={20}></FontAwesomeIcon>
            </TouchableOpacity>
            {/* <Image source={require('/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg')} style={[styles.image, {marginRight: 0}]}></Image> */}
            <Image source={{uri: data["image"]}} style={[styles.image, {marginRight: 0}]}></Image>
            <TouchableOpacity style={[styles.iconBtn, styles.iconBtn2]}>
                <FontAwesomeIcon style={{color: 'white'}} icon={faCamera} size={20}></FontAwesomeIcon>
            </TouchableOpacity>
          </View>
          <FontAwesomeIcon style={[styles.icon, styles.iconDisabled]} icon={faCaretRight} size={20}></FontAwesomeIcon>
        </View>
        <View style={[styles.progressBarOuter]}>
          <View style={[styles.progressBarInner,{width: 300*data["value"]}]}>
            <View style={[styles.progressBarMarker, {left: 300*data["value"]}]}></View>
          </View>
        </View>
        <View style={styles.row}>
          <Image style={styles.customIcon}></Image>
          <Image style={styles.customIcon}></Image>
        </View>
        <Text style={styles.estimate}>Estimated time before harvest: {estimate} days</Text>
        <View style={[styles.divider, {borderColor: '#32910F'}]}></View>
        <Text style={[styles.title, {marginTop: 20}]}>About</Text>
        <Text style={styles.aboutInfo}>The {data["species"]} (Solanum lycopersicum) is a fruit from the nightshade family native to South America.
        Despite botanically being a fruit, it’s generally eaten and prepared like a vegetable.</Text>   
        <Text style={styles.aboutInfo}>Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer.
        They are also a great source of vitamin C, potassium, folate, and vitamin K.
        Usually red when mature, tomatoes can also come in a variety of colors, including yellow,</Text> 
      </View>]
    );
    setPlantInfo(true);
  };

  plantDropdownRise = () => {
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
    setPlantInfo(false);
  };

  var count = 0
  for (let i of plantData) {
    if (i['species'] != '') {
      var species = i["species"].charAt(0).toUpperCase() + i["species"].slice(1);
      i["species"] = species;
      plantList.push(
        <View key={count}>
          <TouchableOpacity style={styles.row} onPress={() => plantDropdownFall(i)}>
            <View style={styles.section}>
              {/* <Image source={require('/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg')} style={styles.image}></Image> */}
              <Image source={{uri: i["image"]}} style={styles.image}></Image>
              <Text style={styles.mainText}>{species}</Text>
            </View>
            <View>
              <FontAwesomeIcon style={styles.icon} icon={faPencil} size={20}></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
          <View style={[styles.section, {justifyContent: 'center'}]}>
            <FontAwesomeIcon style={[styles.icon, styles.iconDisabled]} icon={faCaretLeft} size={20}></FontAwesomeIcon>
            <Text style={styles.mainText}>1/1</Text>
            <FontAwesomeIcon style={[styles.icon, styles.iconDisabled]} icon={faCaretRight} size={20}></FontAwesomeIcon>
          </View>
          <View style={[styles.progressBarOuter]}>
            <View style={[styles.progressBarInner,{width: 300*i["value"]}]}>
              <View style={[styles.progressBarMarker, {left: 300*i["value"]}]}></View>
            </View>
          </View>
          <View style={styles.row}>
            <Image style={styles.customIcon}></Image>
            <Image style={styles.customIcon}></Image>
          </View>
          <View style={styles.divider}></View>
        </View>
      )
    }
    count+=1;
  }

  return (
    <SafeAreaView style={styles.background}>
      <Header title="My Garden" isIntro={false} notifications={true}></Header>

      <Animated.ScrollView style={[styles.scrollView, {zIndex: plantInfo ? -3 : 0}, {opacity: screen1Fade}]}>
        {plantList.length > 0 ? plantList :
          <View style={styles.empty}>
            <Text style={styles.mainText}>Nothing here yet</Text>
            <Text style={styles.mainText}>Take a picture to get started!</Text>
          </View>
        }
      </Animated.ScrollView>

      <Animated.View style={[styles.dropdown, {transform: [{translateY: dropdownSlide}]}]}>

          <Animated.ScrollView style={[styles.dropdownView, {opacity: screen2Fade}]}>
            {plantDetails}
          </Animated.ScrollView>
      </Animated.View>

      <Footer isArrow={plantInfo ? true : false} navigation={navigation} pressArrow={() => plantDropdownRise()} takePic={() => navigation.navigate('MainCamera')}></Footer>
    </SafeAreaView>
  );
};
  
export default MyGarden;
