import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
      position: 'absolute',
      height: 600,
      bottom: -450,
      width: '160%',
      backgroundColor: '#32910F',
      borderRadius: 300,
    },
    text: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      position: 'absolute',
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    cameraBtn: {
        marginBottom: 120,
    },
    btnBox: {
        width: '100%',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    btn: {
        marginTop: 22,
        marginHorizontal: 100,
        color: '#fff',
    },
    menu: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    menuBtn: {
        paddingVertical: 26,
    },
    menuText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
});