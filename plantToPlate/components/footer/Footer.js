import React, {useRef, useEffect, useState} from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GreenButtonRound from '../greenButtonRound/GreenButtonRound.js';
import styles from './Footer.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCaretDown, faGear, faCamera, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Footer = ({isCamera, takePic, navigation}) => {
  const menuSlide = useRef(new Animated.Value(0)).current;
  const menuFade = useRef(new Animated.Value(1)).current;

  const [menuOpen, setMenuOpen] = useState(false);

  openMenu = () => {
    Animated.timing(
        menuSlide,
        {
          toValue: -410,
          duration: 250,
          useNativeDriver: true,
        }
    ).start();
    setMenuOpen(true);
   };

   closeMenu = () => {
    Animated.timing(
        menuSlide,
        {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }
    ).start();
    setMenuOpen(false);
   };

   leavePage = (pageName) => {
    Animated.timing(
        menuFade,
        {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }
    ).start();
    setTimeout(function(){
        navigation.navigate(pageName);  
    }, 100);
   };


  return (
    <Animated.View style={[styles.container, {transform: [{translateY: menuSlide}], opacity: menuFade}]}>
        <View style={styles.footer}>
            {!menuOpen && <View style={styles.btnBox}>
                <TouchableOpacity onPress={this.openMenu} >
                    <FontAwesomeIcon style={styles.btn} icon={faBars} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.btn} icon={faGear} size={30}/>
                </TouchableOpacity>
            </View>}

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuBtn}>
                    <Text style={styles.menuText}>My Garden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn} onPress={() => this.leavePage('MyIngredients')}>
                    <Text style={styles.menuText}>My Ingredients</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn}>
                    <Text style={styles.menuText}>Meal Generator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn}>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn}>
                    <Text style={styles.menuText}>FAQ</Text>
                </TouchableOpacity>
            </View>

        </View>

        <View style={styles.cameraBtn}>
            {menuOpen ? <GreenButtonRound iconName={faCaretDown} onPress={this.closeMenu}></GreenButtonRound>
            : <GreenButtonRound iconName={isCamera ? faCamera : faCaretUp} iconSize={50} onPress={takePic}></GreenButtonRound>}
        </View>
    </Animated.View>
  );
};

export default Footer;
