import React, {useState, useRef} from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Animated } from 'react-native'
import styles from './Feedback.styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../greenButton/GreenButton.js';
import GrowthTimes from '../../data/GrowthTimes.js';

const Feedback = ({scanResult, add, end}) => {

    const [step, setStep] = useState(1);
    const flicker = useRef(new Animated.Value(0.2)).current

    nextStep = () => {
        setStep(step+1);
    }

    previousStep = () => {
        setStep(step-1);
    }

    Animated.loop(
        Animated.sequence([
            Animated.timing(
            flicker,
            {
                toValue: 0.6,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(
            flicker,
            {
                toValue: 0.2,
                duration: 500,
                useNativeDriver: true,
            })
        ])
    ).start()
   

    return (
        <View style={styles.container}>
            {step==1 && <View style={[styles.popup, styles.popup1]}>
                {scanResult["species"]=="none" ? <View style={{height: '100%', width: '100%'}}>
                    <TouchableOpacity onPress={end}>
                        <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                    </TouchableOpacity>        
                    <View style={{alignItems: 'center'}}> 
                        <Text style={styles.title}>Calculating...</Text><Text style={styles.bigText}></Text>
                    </View>
                    <Animated.View style={{height: '77%', width: '100%', opacity: flicker}}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={[styles.image, {backgroundColor: '#40B913', borderColor: '#40B913',}]}></Image>
                            <GreenButton filler={true} onPress={add} text="Add to My Garden"></GreenButton>
                        </View>
                        <GreenButton filler={true} onPress={end} propStyles={[styles.btnPrev, {bottom: -5, left: -5}]} text="Retake" small={true}></GreenButton>
                        <GreenButton filler={true} onPress={this.nextStep} propStyles={[styles.btnNext, {bottom: -5, right: -5}]} text="Wrong Plant?" small={true}></GreenButton> 
                    </Animated.View>
                </View>
                :<View style={{height: '100%', width: '100%'}}>  
                    <TouchableOpacity onPress={end}>
                        <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.title}>Species</Text><Text style={styles.bigText}>
                                {scanResult["species"].charAt(0).toUpperCase() + scanResult["species"].slice(1)}
                            </Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.title}>Stage</Text><Text style={styles.bigText}>
                                {scanResult["stage"]}
                            </Text>
                        </View>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        {/* <Image source={require('/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg')} style={styles.image}></Image> */}
                        <Image source={{uri: scanResult['image']}} style={styles.image}></Image>
                        <GreenButton onPress={add} text="Add to My Garden"></GreenButton>
                    </View>
                    <GreenButton onPress={end} propStyles={[styles.btnPrev, {bottom: -5, left: -5}]} text="Retake" small={true}></GreenButton>
                    <GreenButton onPress={this.nextStep} propStyles={[styles.btnNext, {bottom: -5, right: -5}]} text="Wrong Plant?" small={true}></GreenButton> 
                </View>}
            </View>}
            {step==2 && <View style={[styles.popup, styles.popup2]}>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>
                <Text style={[styles.title, styles.title2]}>Feedback form</Text>
                <Text style={styles.text}>Did we get it wrong? Sorry about that. Please fill in the form below to the best of your ability
                if you'd like to help train our AI and prevent future mistakes.</Text>
                <View style={styles.row}>
                    {/* <Image source={require('/Users/philip/HAIID/plantToPlate/resources/images/iu-7.jpeg')} style={styles.image}></Image> */}
                    <Image source={{uri: scanResult['image']}} style={styles.image}></Image>
                    <View style={{alignItems: 'flex-end'}}>
                        <View style={styles.section}>
                            <Text style={styles.inputText}>Species</Text>
                            <TextInput style={[styles.input, {width: 150}]}></TextInput>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.inputText}>Progress (%)</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                    </View>       
                </View>       
                <Text style={[styles.title, styles.title2]}>Important: </Text><Text style={styles.text}>By pressing Submit, you're consenting to the form data being used,
                along with your image, in our database to train the app's AI. Other than the images you submit as feedback, none of your image data will be stored outside 
                of your device.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Submit" small={true}></GreenButton>
            </View>}
            {step==3 && <View style={[styles.popup, styles.popup3]}>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>
                
                <Text style={styles.text}>Thank you for the feedback! We will use this to improve our system and produce better results in the future.</Text>
                <GreenButton onPress={end} propStyles={styles.btnNext} text="Finish" small={true}></GreenButton>
            </View>}
        </View>
    );
};
  
export default Feedback;
