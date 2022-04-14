import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    preview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    text: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      marginTop: 30,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '90%',
        zIndex: 1,
        top: 20,
        opacity: 0.75,
    },
    btn: {
    //   marginLeft: 20,
    }
});