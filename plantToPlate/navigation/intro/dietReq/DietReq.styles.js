import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      marginTop: 30,
    },
    btn: {
      bottom: 40,
    },
    scrollView: {
      position: 'absolute',
      top: 100,
      width: '90%',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 22,
      color: '#32910F',
      fontWeight: 'bold',
      marginTop: 50,
    },
    question: {
      fontSize: 20,
      marginTop: 20,
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
});