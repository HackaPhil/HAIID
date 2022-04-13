import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Footer from '../../../components/footer/Footer';
import styles from './MainCamera.styles';

const MainCamera = ({navigation, arrived}) => {

    // const [isIntro, setIsIntro] = useState(isIntro);

    return (
      <View style={styles.background}>
          <Footer isCamera={true} navigation={navigation}></Footer>
      </View>
    );
};
  
export default MainCamera;
