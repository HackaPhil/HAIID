import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Footer from '../../../components/footer/Footer';
import styles from './MainCamera.styles';

const MainCamera = () => {
    return (
      <View style={styles.background}>
          <Footer isCamera={true}></Footer>
      </View>
    );
};
  
export default MainCamera;
