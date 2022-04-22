import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
    },
    btnNext: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    btnPrev: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#32910F',
        fontWeight: 'bold',
    },
    title2: {
        textAlign: 'center',
        marginBottom: 8,
    },
    bigText: {
        marginTop: 5,
        fontSize: 22,
        fontWeight: 'bold',
    },
    popup: {
        backgroundColor: '#9CE382',
        opacity: 0.95,
        borderRadius: 10,
        padding: 15,
    },
    popup1: {
        width: 380,
        height: 360,
    },
    popup2: {
        width: 380,
        height: 550,
        bottom: 20,
    },
    popup3: {
        width: 300,
        height: 210,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#32910F',
    },
    icon: {
        marginLeft: 'auto',
        marginVertical: 5,
        textAlign: 'right',
        fontSize: 20,
        color: '#32910F',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: '#32910F',
        borderRadius: 50,
        marginVertical: 10,
    },
    inputText: {
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        height: 35,
        width: 80,
        paddingHorizontal: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 50,
        fontSize:  20,
        backgroundColor: 'white',
    },
}); 