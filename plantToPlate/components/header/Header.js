import React from 'react';
import { View, Text, StyleSheet, Section } from 'react-native';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.styles.js';
import GreenButtonRound from '../greenButtonRound/GreenButtonRound.js';


const Header = ({title, isIntro, notifications}) => {
  return (
    <View style={[styles.header, {top: isIntro ? -500 : -480}]}>
      <Text style={styles.text}>{title}</Text>
      {notifications && 
      <View style={styles.notifBtn}>
        <GreenButtonRound propStyles={{backgroundColor: '#32910F'}} iconName={faBell} iconSize={25}></GreenButtonRound>
      </View>}
    </View>
  );
};

export default Header;
