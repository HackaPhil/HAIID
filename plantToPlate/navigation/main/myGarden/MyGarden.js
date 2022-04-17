import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native'
import styles from './MyGarden.styles.js';
import GreenButton from '../../../components/greenButton/GreenButton.js';
import Header from '../../../components/header/Header.js';
import Footer from '../../../components/footer/Footer';
import { useIntroContext } from '../../../App';


const MyGarden = ({navigation}) => {
    const intro = useIntroContext();

    return (
      <SafeAreaView style={styles.background}>
        <Header title="My Garden" isIntro={intro} notifications={true}></Header>

        <ScrollView>
          
        </ScrollView>

        <Footer isArrow={false} navigation={navigation} takePic={() => navigation.navigate('MainCamera')}></Footer>
      </SafeAreaView>
    );
};
  
export default MyGarden;
