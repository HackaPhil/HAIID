import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraElements: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanFrame: {
        zIndex: 1,
        width: 320,
        height: 320,
        borderRadius: 10,
        borderColor: '#9CE382',
        borderWidth: 5,
        borderStyle: 'dashed',
        opacity: 0.5,
    },
    preview: {
        flex: 1,
        width: '100%',
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
    footer: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        bottom: -40,
    }
});