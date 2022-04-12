import React, {useRef, useEffect, useState} from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GreenButtonRound from '../greenButtonRound/GreenButtonRound.js';
import styles from './Footer.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCaretDown, faGear, faCamera, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Footer = ({isCamera}) => {
  const menuAnim = useRef(new Animated.Value(0)).current;
  const [menuOpen, setMenuOpen] = useState(false);

  openMenu = () => {
    Animated.timing(
        menuAnim,
        {
          toValue: -410,
          duration: 500,
          useNativeDriver: true,
        }
    ).start();
    setMenuOpen(true);
   };

   closeMenu = () => {
    Animated.timing(
        menuAnim,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }
    ).start();
    setMenuOpen(false);
   };

  return (
    <Animated.View style={[styles.container, {transform: [{translateY: menuAnim}]}]}>
        <View style={styles.footer}>
            <View style={styles.btnBox}>
                <TouchableOpacity onPress={this.openMenu} >
                    <FontAwesomeIcon style={styles.btn} icon={faBars} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.btn} icon={faGear} size={30}/>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.cameraBtn}>
            {menuOpen ? <GreenButtonRound iconName={faCaretDown} onPress={this.closeMenu}></GreenButtonRound>
            : <GreenButtonRound iconName={isCamera ? faCamera : faCaretUp}></GreenButtonRound>}
        </View>
    </Animated.View>
  );
};

export default Footer;
