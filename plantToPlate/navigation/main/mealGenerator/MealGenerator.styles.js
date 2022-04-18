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
    title: {
      fontSize: 22,
      color: '#32910F',
      fontWeight: 'bold',
      marginTop: 10,
    },
    showAll: {
      fontSize: 20,
      marginLeft: 10,
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
        marginRight: 10,
    },
    check: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        width: 30,
        height: 30,
    },
    checkFilled: {
        backgroundColor: '#40B913',
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
    recipeStep: {
        fontSize: 20,
        marginTop: 15,
    },
}); 