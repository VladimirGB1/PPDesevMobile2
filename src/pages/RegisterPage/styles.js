import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8D3B6'
    },
    imgLogo:{
        height: '130px',
        width: '360px',
        marginBottom: 16
    },
    input:{
      width: '80%',
      height: 40,
      marginBottom: 16,
      paddingLeft: 8,
      border: '1px solid black',
      borderRadius: 5,
      backgroundColor: 'white'
    },
    button: {
        height: 45,
        width: '80%',
        backgroundColor: '#c9080b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        border: '1px solid black',
        marginTop: 6

    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    links:{
        color: '#0066cc',
        fontSize: 14,
        textDecorationLine: 'underline',
        marginTop: 8
    }
});

export default styles;