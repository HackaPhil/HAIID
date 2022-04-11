import React from 'react';
import { View, Text, StyleSheet, Section } from 'react-native';
import styles from './Header.styles.js';


const Header = ({title, notifications}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      {this.notifications && {
      }}
    </View>
  );
};

Header.defaultProps = {
    title: "Lover List",
}

export default Header;
