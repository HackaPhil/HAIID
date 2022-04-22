import React, {useState, useRef} from 'react';
import { Animated, View, Text, TouchableOpacity, AsyncStorageStatic } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { launchImageLibrary} from 'react-native-image-picker';
import Footer from '../../../components/footer/Footer';
import GreenButtonRound from '../../../components/greenButtonRound/GreenButtonRound';
import styles from './MainCamera.styles';
import { faFileImage, faBell, faBolt, faVihara } from '@fortawesome/free-solid-svg-icons';
import { LogBox } from "react-native";
import { useIntroContext } from '../../../App';
import axios from 'axios';
import Tutorial from '../../../components/tutorial/Tutorial';
import Feedback from '../../../components/feedback/Feedback';
import { readFile, readDir, read, readdir, moveFile, copyFile, writeFile } from 'react-native-fs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

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

const MainCamera = ({navigation, arrived, addPlant}) => {

    const intro = useIntroContext();
    const [flash, setFlash] = useState(false);
    const [tutorial, setTutorial] = useState(intro ? true : false);
    const [feedback, setFeedback] = useState(false);
    // const [scanResult, setScanResult] = useState({"value": 0.774433424, "species": "tomato", 
    // "stage": "Mature", 'image':'/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg'});
    const [scanResult, setScanResult] = useState({"value": 0, "species": 'none', "stage": 'none', 'image':'none'});
    const tickFade = useRef(new Animated.Value(0)).current;

    takePicture = async function(camera) {
        const options = {quality: 0.5, base64: true, width: 500};
        const data = await camera.takePictureAsync(options);
        
        if (data.uri.slice(8,11)=='var') {
          postImage(data.uri.slice(7), data.base64); 
        } else {
          postImage(data.uri.slice(7)); 
        }

        setScanResult({"value": 0, "species": 'none', "stage": 'none', 'image':'none'});
        setFeedback(true)
    };

    getImageFromLibrary = async function() {
        const result = await launchImageLibrary();
        const data = result.assets[0]
     
        postImage(data.uri.slice(7)); 
        
        setScanResult({"value": 0, "species": 'none', "stage": 'none', 'image':'none'});
        setFeedback(true)
    };

    startTutorial = () => {
      setTutorial(true);
    }

    endTutorial = () => {
      setTutorial(false);
    }

    startFeedback = () => {
      setFeedback(true);
    }

    endFeedback = () => {
      setFeedback(false);
    }

    tick = () => {
      Animated.sequence([
          Animated.timing(
          tickFade,
          {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
      Animated.timing(
          tickFade,
          {
            delay: 1000,
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          })
      ]).start();
      setFeedback(false);
      this.addPlant(scanResult);
    };

    const postImage = (imageURI, base64?) => {

      var form = {}
      if (base64) {
        form = {'base64': base64}
      }
      else {
        form = {'image': imageURI}
      }
  
      axios
        .post('http://172.16.3.103:5000/get_progress', form)
        .then(function (response) {
          // store response          
          var value = response.data["value"];
          var species = response.data["species"]
          var stage = '';
          if (value<0.33) {
            stage = 'Seedling';
          } else if (value<0.66) {
            if (species=='potato' || species=='beetroot') {
              stage = 'Young';
            } else {
              stage = 'Flowering';
            }
          } else if (value<0.95) {
            stage = 'Mature';
          } else {
            stage = 'Ready to harvest!'
          };
          setScanResult({"value": value, "stage": stage, "species": response.data["species"], "image": imageURI});
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        })
        .finally(function () {
          // always executed
          // console.log(form)
        });
    };

    return (
      arrived(),
      <View style={styles.container}>

        {tutorial && <Tutorial end={this.endTutorial}></Tutorial>}
        {feedback && <Feedback scanResult={scanResult} add={this.tick} end={this.endFeedback}></Feedback>}

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
          flashMode = {flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off }
          captureAudio={false}
          rectOfInterest={{x:0, y:0.25, width:1, height:0.3}}
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
                    <Animated.View style={[styles.added, {opacity: tickFade}]}>
                      <Text style={[styles.addedText, {color: 'white'}]}>Added</Text>
                      <FontAwesomeIcon style={{color: 'white', marginRight: 20}} icon={faCheck} size={18}></FontAwesomeIcon>
                    </Animated.View>   
                    <View style={styles.scanFrame}></View>
                    <View style={styles.footer}>
                        <Footer isArrow={false} isOnCamera={true} navigation={navigation} takePic={() => this.takePicture(camera)}></Footer>
                    </View>
                </View>
            );
          }}
        </RNCamera>

      </View>
    );
};
  
export default MainCamera;
