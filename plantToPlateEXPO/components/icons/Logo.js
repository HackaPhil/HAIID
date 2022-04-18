import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.placeholder}></View>
    );
};

const styles = StyleSheet.create({
    placeholder: {
        height: 100,
        width: 100,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 100,
    },
}); 

export default Logo;
