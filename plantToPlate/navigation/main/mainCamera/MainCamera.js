import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { launchImageLibrary} from 'react-native-image-picker';
import Footer from '../../../components/footer/Footer';
import GreenButtonRound from '../../../components/greenButtonRound/GreenButtonRound';
import styles from './MainCamera.styles';
import { faFileImage, faBell, faBolt } from '@fortawesome/free-solid-svg-icons';
import { LogBox } from "react-native";
import { useIntroContext } from '../../../App';
import Tutorial from '../../../components/tutorial/Tutorial';
LogBox.ignoreLogs([
"ViewPropTypes will be removed",
])

const PendingView = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.text}>Waiting</Text>
    </View>
);

const MainCamera = ({navigation, arrived}) => {

    const intro = useIntroContext();
    const [flash, setFlash] = useState(false);
    const [tutorial, setTutorial] = useState(intro ? true : false);

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true, 
            flashMode: flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off };
        const data = await camera.takePictureAsync(options);

        // *** Image data
        console.log(data.uri);
    };

    getImageFromLibrary = async function(options?) {
        const result = await launchImageLibrary(options);

        // *** Image data
        console.log(result);
    };

    startTutorial = () => {
        setTutorial(true);
    }

    endTutorial = () => {
        setTutorial(false);
    }

    return (
      arrived(),
      <View style={styles.container}>

        {tutorial && <Tutorial end={this.endTutorial}></Tutorial>}

        <View style={styles.header}>
            <GreenButtonRound iconName={faFileImage} style={styles.btn} iconSize={30} onPress={() => this.getImageFromLibrary()}></GreenButtonRound>
            <View style={{opacity: flash ? 1 : 0.2}}>
                <GreenButtonRound iconName={faBolt} style={{opacity: flash ? 1 : 0.2}} iconSize={30} onPress={() => setFlash(!flash)}></GreenButtonRound>
            </View>
            <GreenButtonRound iconName={faBell} iconSize={30}></GreenButtonRound>
        </View>

        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>

          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
                <View style={styles.cameraElements}>
                    <View style={styles.scanFrame}></View>
                    <View style={styles.footer}>
                        <Footer isArrow={false} isOnCamera={true} navigation={navigation} takePic={() => this.takePicture(camera)}></Footer>
                    </View>
                </View>
            );
          }}
        </RNCamera>

        {/* <View style={styles.footer}>
            <Footer isArrow={false} isOnCamera={true} navigation={navigation} takePic={() => this.takePicture(camera)}></Footer>
        </View> */}
      </View>
    );
};
  
export default MainCamera;
