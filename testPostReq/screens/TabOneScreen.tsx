import React from 'react';
import axios from 'axios';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';

var formData = new FormData();
//var imageFile = require('images/iu-7.jpeg');
var imageFile = require('../assets/images/iu-7.jpeg');

formData.append('image',
      {
         uri:imageFile,
         name:'iu-7.jpeg',
         type:'image/jpeg'
      }
);



export function App() {
  const postDataSimple = () => {
    axios
        .post('http://192.168.0.11:5000/get_progress', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
        })
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
            console.log(formData)
        })
    };
  return (
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Example of Axios Networking in React Native
        </Text>
        {/*Running GET Request*/}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={postDataSimple}>
          <Text>Simple Get Call</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});


export default App;