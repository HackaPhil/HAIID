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
    popup: {
        backgroundColor: '#9CE382',
        opacity: 0.95,
        borderRadius: 10,
        padding: 15,
    },
    marker: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: '#9CE382',
        borderWidth: 5,
    },
    popup1: {
        width: 275,
        height: 290,
        bottom: 140,
        left: 50,
    },
    marker1: {
        top: 585,
        left: 148,
    },
    popup2: {
        width: 275,
        height: 210,
    },
    marker2: {
        top: 320,
        left: 82,
    },
    popup3: {
        width: 300,
        height: 250,
    },
    popup4: {
        width: 340,
        height: 340,
    },
    popup5: {
        width: 340,
        height: 380,
        right: 10,
        top: 80,
    },
    marker5: {
        top: 410,
        left: 10,
    },
    popup6: {
        width: 300,
        height: 250,
        right: 30,
        bottom: 145,
    },
    marker6: {
        top: -115,
        left: -10,
    },
    popup7: {
        width: 300,
        height: 160,
        bottom: 190,
    },
    marker7: {
        top: -115,
        left: 95,
    },
    popup8: {
        width: 300,
        height: 255,
        left: 30,
        bottom: 145,
    },
    marker8: {
        top: -112,
        left: 198,
    },
    popup9: {
        width: 330,
        height: 255,
    },
    count: {
        position: 'absolute',
        fontSize: 18,
        color: '#32910F',
        top: 17,
        left: 10,
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
    }
}); 