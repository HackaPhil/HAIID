import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Tutorial.styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import GreenButton from '../greenButton/GreenButton.js';

const Tutorial = ({end}) => {

    const [step, setStep] = useState(1);

    nextStep = () => {
        setStep(step+1);
    }

    previousStep = () => {
        setStep(step-1);
    }

    return (
        <View style={styles.container}>
            {step==1 && <View style={[styles.popup, styles.popup1]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>
                <Text style={styles.text}>Welcome to the tutorial for the Plant To Plate camera feature!
                You can skip this tutorial at any time by closing this box. You can also reactivate it by tapping the 'Settings' icon 
                shown below.</Text>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker1]}></View>
            </View>}
            {step==2 && <View style={[styles.popup, styles.popup2]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>Center your plant within this dotted frame, then tap the camera button
                below - we'll do the rest!</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker2]}></View>
            </View>}
            {step==3 && <View style={[styles.popup, styles.popup3]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>We'll identify the plant type and estimate how much time it'll need until you can harvest it
                - the information will be presented in a popup box just like this one.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
            </View>}
            {step==4 && <View style={[styles.popup, styles.popup4]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>Remember, we're not perfect! However, we're constantly trying to improve; if we get the 
                plant type wrong, simply tap the 'Wrong Plant?' button in the popup that appears. This will allow you to correct
                the scan, while giving us more data to work with so that we make fewer mistakes in future.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
            </View>}
            {step==5 && <View style={[styles.popup, styles.popup5]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>Once a plant is identified, you'll be able to monitor its progress and re-scan it at 
                any time by tapping this menu icon and going to 'My Garden'. You can also update your available ingredients in 'My Ingredients'.
                The information from these two sections, as well as your dietary requirements - editable in 'Settings' - will decide what you'll see
                when you go to 'Meal Generator'.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker5]}></View>
            </View>}
            {step==6 && <View style={[styles.popup, styles.popup6]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>Tap this icon to choose a plant image from your camera roll - the rest of the scanning process will
                be identical to when you take a photo with the camera.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker6]}></View>
            </View>}
            {step==7 && <View style={[styles.popup, styles.popup7]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>Tap this icon to toggle camera flash.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker7]}></View>
            </View>}
            {step==8 && <View style={[styles.popup, styles.popup8]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>If we think one of your plants is almost ready to harvest,
                we'll give you a heads up, and recommend that you re-scan to make sure. Tap here to see all your notifications.</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={this.nextStep} propStyles={styles.btnNext} text="Next" small={true}></GreenButton>
                <View style={[styles.marker, styles.marker8]}></View>
            </View>}
            {step==9 && <View style={[styles.popup, styles.popup9]}>
                <Text style={styles.count}>{step}/9</Text>
                <TouchableOpacity onPress={end}>
                    <FontAwesomeIcon style={styles.icon} icon={faXmark} size={20}></FontAwesomeIcon>
                </TouchableOpacity>                
                <Text style={styles.text}>That's it! If there's anything else you'd like to know, check the 'FAQ' section in the menu,
                and remember that you can reactivate this tutorial at any time by going to 'Settings'. Have fun!</Text>
                <GreenButton onPress={this.previousStep} propStyles={styles.btnPrev} text="Back" small={true}></GreenButton>
                <GreenButton onPress={end} propStyles={styles.btnNext} text="Finish" small={true}></GreenButton>
            </View>}
        </View>
    );
};
  
export default Tutorial;
