import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {
      position: 'absolute',
      top: 200,
      width: '90%',
      paddingHorizontal: 20,
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    title: {
      fontSize: 22,
      color: '#32910F',
      fontWeight: 'bold',
    //   marginTop: 10,
    },
    bigText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    mainText: {
      fontSize: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      height: 30,
      width: 30,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 50,
      backgroundColor: 'white',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    icon: {
        color: '#40B913',
    },
    iconDisabled: {
        opacity: 0.75,
    },
    customIcon: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#32910F',
        borderRadius: 50,
        bottom: 10
    },
    iconBtn: {
        marginLeft: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40B913',
        borderRadius: 20,
        width: 30,
        height: 30,
    },
    iconBtn2: {
        width: 40,
        height: 40,
    },
    iconBtn3: {
        marginLeft: 0,
        marginRight: 10,
        width: 40,
        height: 40,
    },
    progressBarOuter: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 25,
        width: 300,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 15,
    },
    progressBarInner: {
        height: 23,
        backgroundColor: '#40B913',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
    },
    progressBarMarker: {
        height: 30,
        borderLeftWidth: 5,
        borderLeftColor: '#32910F',
    },
    divider: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopWidth: 1,
        borderColor: '#9CE382',
        width: '50%',
        marginVertical: 15,
    },
    dropdown: {
        position: 'absolute',
        height: 900,
        zIndex: -2,
        width: '160%',
        backgroundColor: '#9CE382',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 300,
    },
    dropdownView: {
        top: '15%',
        width: 300,
    },
    image: {
        width: 70,
        height: 70,
        borderWidth: 3,
        borderColor: '#32910F',
        borderRadius: 50,
        marginRight: 10,
    },
    ingredient: {
        textAlign: 'center',
        fontWeight: 'normal',
    },
    aboutInfo: {
        fontSize: 18,
        marginTop: 15,
    },
    estimate: {
        fontSize: 18,
        color: '#32910F',
        fontWeight: 'bold',
        textAlign: 'center',
    }
}); 