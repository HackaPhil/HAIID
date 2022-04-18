import React, {useState, useRef} from 'react';
import { Animated, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import styles from './MyIngredients.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { useIntroContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import GreenButtonRound from '../../../components/greenButtonRound/GreenButtonRound.js';


const MyIngredients = ({navigation}) => {
  const intro = useIntroContext();
  const dropdownSlide = useRef(new Animated.Value(intro ? -500 : -400)).current;
  const screen1Fade = useRef(new Animated.Value(1)).current;
  const screen2Fade = useRef(new Animated.Value(0)).current;
  const tickFade = useRef(new Animated.Value(0)).current;
  const ingredients = ['Meat', 'Fruit', 'Vegetables', 'Dairy', 'Starch']
  const meats = ['Beef', 'Chicken', 'Lamb', 'Turkey', 'Venison', 'Pork']
  const navItems = [];
  const meatItems = [];
  const otherMeatItems = [];
  const meatData = {
    'Beef': '1.2',
    'Chicken': '1.5',
  }

  const [addIngredient, setAddIngredient] = useState(false);
  const [currentType, setCurrentType] = useState('Meat');
  const [testComplete, setTestComplete] = useState(false);

  tick = () => {
    Animated.sequence([
        Animated.timing(
        tickFade,
        {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
    Animated.timing(
        tickFade,
        {
          delay: 1000,
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        })
    ]).start();
    setTestComplete(true);
  };

  ingDropdownFall = () => {
    Animated.timing(
        dropdownSlide,
        {
          toValue: intro ? 110 : 160,
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
    setAddIngredient(true);
   };

   ingDropdownRise = () => {
    Animated.timing(
        dropdownSlide,
        {
          toValue: intro ? -500 : -400,
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
    setAddIngredient(false);
   };

    for (let i of ingredients) {
        navItems.push(
            <TouchableOpacity key={i} style={[styles.navBtn, currentType==i && {backgroundColor: '#40B913'}]} 
                onPress={() => setCurrentType(i)}>
                    <Text style={[styles.navText, currentType==i && {color: 'white'}]}>{i}</Text>
            </TouchableOpacity>
        );
    };

    for (let i of meats) {
        const [data, setData] = useState('');

        const add = () => {
            tick();
            setData('');
        };

        otherMeatItems.push(
            <View key={i} style={styles.listItem}>

                <Text style={styles.mainText}>{i}</Text>

                <View style={styles.itemDetails}>
                    <TextInput style={styles.input} value={data} onChangeText={data => setData(data)} placeholder="kg"></TextInput>

                    <TouchableOpacity style={[styles.iconBtn, styles.iconBtnAlt]} onPress={() => add()}>
                        <FontAwesomeIcon style={{color: 'white'}} icon={faPlus} size={18}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    for (const i in meatData) {
        const [editing, setEditing] = useState(false);
        const [data, setData] = useState(meatData[i]);

        meatItems.push(
            <View key={i} style={styles.listItem}>

                <Text style={styles.mainText}>{i}</Text>

                <View style={styles.itemDetails}>
                    {editing ? <TextInput style={styles.input} placeholder="kg" value={data} onChangeText={data => setData(data)}></TextInput>
                    : <Text style={styles.mainText}>{data} kg</Text>}

                    {editing ? <TouchableOpacity style={styles.iconBtn} onPress={()=>setEditing(false)}>
                        <FontAwesomeIcon style={styles.icon} icon={faCheck} size={22}></FontAwesomeIcon>
                    </TouchableOpacity>
                    : <TouchableOpacity style={styles.iconBtn} onPress={()=>setEditing(true)}>
                        <FontAwesomeIcon style={styles.icon} icon={faPencil} size={18}></FontAwesomeIcon>
                    </TouchableOpacity>}
                    <TouchableOpacity style={styles.iconBtn}>
                        <FontAwesomeIcon style={styles.icon} icon={faTrash} size={18}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    

    return (
      <SafeAreaView style={styles.background}>
        
        <Header style={{zIndex: 1}} title="My Ingredients" isIntro={intro} notifications={intro ? false : true}></Header>

        <View style={styles.subHeader}>
            <View style={styles.navBox}>
                {navItems}
            </View>
            <Animated.View style={[styles.navBtn, styles.added, {opacity: tickFade}]}>
                    <Text style={[styles.navText, {color: 'white'}]}>Added</Text>
                    <FontAwesomeIcon style={{color: 'white', marginRight: 20}} icon={faCheck} size={18}></FontAwesomeIcon>
            </Animated.View>   
        </View>

        {!addIngredient && <View style={[styles.addIngredient, !intro && {top: '31%'}]}>
            <GreenButtonRound iconName={faPlus} onPress={() => ingDropdownFall()}></GreenButtonRound>
        </View>}

        <Animated.ScrollView style={[styles.scrollView, !intro && {top: 340}, {zIndex: addIngredient ? -3 : 0}, {opacity: screen1Fade}]}>
                <Text style={styles.title}>{currentType}</Text>
                
                {testComplete ? <View style={styles.dataList}>
                    {meatItems}
                </View>
                : <View style={styles.empty}>
                    <Text style={styles.mainText}>Empty</Text>
                </View>}
        </Animated.ScrollView>

        <Animated.View style={[styles.dropdown, {transform: [{translateY: dropdownSlide}]}]}>
            <Animated.ScrollView style={[styles.dropdownView, {opacity: screen2Fade}]}>     
                <View style={styles.dataList}>
                    {otherMeatItems}
                </View>
            </Animated.ScrollView>
        </Animated.View>

        {intro ? <View style={{top: 40}}><GreenButton text="Continue" onPress={() => navigation.navigate('MainCamera')}></GreenButton></View>
        : <Footer isArrow={addIngredient ? true : false} navigation={navigation} pressArrow={() => ingDropdownRise()} takePic={() => navigation.navigate('MainCamera')}></Footer>}
        
      </SafeAreaView>
    );
};
  
export default MyIngredients;
