import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
      height: 600,
      width: '160%',
      backgroundColor: '#32910F',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 300,
    },
    text: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      marginBottom: 50,
    },
    notifBtn: {
        position: 'absolute',
        zIndex: 2,
        top: 450,
        right: 130,
    },
});