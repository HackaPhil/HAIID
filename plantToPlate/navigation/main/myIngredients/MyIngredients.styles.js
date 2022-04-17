import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    subHeader: {
        position: 'absolute',
        zIndex: -1,
        height: 600,
        width: '160%',
        backgroundColor: '#9CE382',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '70%',
        borderRadius: 300,
    },
    addIngredient: {
        position: 'absolute',
        right: 20,
        top: '25%',
    },
    navBox: {
        width: 340,
        height: 120,
        top: 235,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    navBtn: {
        borderRadius: 50,
    },
    added: {
        position: 'absolute', 
        backgroundColor: '#40B913',
        bottom: -20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        fontSize: 22,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#32910F',
    },
    scrollView: {
        position: 'absolute',
        top: 260,
        width: '90%',
        paddingHorizontal: 20,
        // backgroundColor: 'gray',
    },
    title: {
        fontSize: 22,
        color: '#32910F',
        fontWeight: 'bold',
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 150,
    },
    mainText: {
        fontSize: 20,
    },
    dataList: {
        marginTop: 30,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtn: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtnAlt: {
        backgroundColor: '#40B913',
        borderRadius: 20,
        width: 30,
        height: 30,
    },
    iconBtnAlt2: {
        backgroundColor: '#40B913',
        borderRadius: 20,
        width: 30,
        height: 30,
    },
    icon: {
        color: '#40B913'
    },
    input: {
        height: 35,
        width: 100,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 50,
        fontSize:  20,
        backgroundColor: 'white',
    },
    dropdown: {
        position: 'absolute',
        height: 700,
        zIndex: -2,
        width: '160%',
        backgroundColor: '#9CE382',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 300,
    },
    dropdownView: {
        top: '20%',
        width: 300,
    },
    footer: {

    },
}); 