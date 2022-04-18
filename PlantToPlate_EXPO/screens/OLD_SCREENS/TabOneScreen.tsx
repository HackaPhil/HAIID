import { StyleSheet, Image, Platform, TouchableOpacity, Text, View, Button } from 'react-native';
import axios from 'axios';
import { Component } from 'react';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FAB, Portal, Provider, Title } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import * as cam from 'react-native-vision-camera';

//const ImagePicker = require('react-native-image-picker');



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let options: ImagePicker.CameraOptions = {
    saveToPhotos: true,
    mediaType: 'photo',
    cameraType: 'front'
  };
  
  


  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://192.168.0.11:5000/some_thing')  //CHANGE THE IP ADDRESS AS NEEDED!!!
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  }

  


  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open } : {open:any}) => setState({ open});

  const [response, setResponse] = React.useState<any>(null);

  const { open } = state;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One SUIEFNSKNDFNDGKIUBNEW</Text>
      <Text> 
        sgdgiodfg
      </Text>

      <Button onPress = {
        () =>
        ImagePicker.launchCamera({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            alert("hi mate");
            //console.log(response);
            //this.SetState({resourcePath: response});
            
          },
        )
        //const result = await ImagePicker.launchImageLibrary({mediaType: 'photo', includeBase64: false, maxHeight: 200, maxWidth: 200});
      }
      title = "Select Image" />



      <Button onPress = {
        () =>
        ImagePicker.launchCamera(options, (response) => {
          if (response.assets) {
            console.log(response.assets);
          }
        })
      }
      title = "Select Image dude" />


      <Button onPress= { 
        () =>
        {
          const devices = cam.useCameraDevices('wide-angle-camera')
          const device = devices.back
      
          if (device == null) return <LoadingView />
          return (
            <cam.Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
            />
          )
        }
      }
      title = "Select Image new" />



      {response?.assets &&
                response?.assets.map(({ uri } : {uri:any}) => (
                    <View key={uri} style={styles.image}>
                        <Image
                            resizeMode="cover"
                            resizeMethod="scale"
                            style={{ width: 200, height: 200 }}
                            source={{ uri: uri }}
                        />
                    </View>
                ))}
            <Provider>
                <Portal>
                    <FAB.Group
                        fabStyle={styles.fab}
                        open={open}
                        icon={open ? 'minus' : 'plus'}
                        actions={[
                            {
                                icon: 'camera', small: false, onPress: () => {
                                    launchCamera({
                                        saveToPhotos: true,
                                        mediaType: 'photo',
                                        includeBase64: false,
                                    }, setResponse)
                                }
                            },
                            {
                                icon: 'image-area',
                                small: false,
                                onPress: () => {
                                  launchImageLibrary({
                                      selectionLimit: 0,
                                      mediaType: 'photo',
                                      includeBase64: false,
                                  }, setResponse)
                              },
                            }
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Provider>

      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
          <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,    
  },
  image: {
    marginVertical: 24,
    alignItems: 'center'
  },
  fab:{
    backgroundColor: '#EA5B70',
    marginBottom:200,
  },
});


