import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FistScreen = () => {
    return (
        <View style={styles.main}>
            <Image
                source={require('../../assets/Ellipse8.png')}
                style={styles.image_banner}
            />
            <Text
                style={styles.textH1}
            >
                GROW <br/>YOUR BUSINESS
            </Text>
            <Text
                style={styles.textP1}
            >
                We will help you to grow your business using online server
            </Text>
            <View 
                style={styles.groupBtn}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={{/*  */}}
                >
                    <Text
                        style={styles.txtButton}
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={{/*  */}}
                >
                    <Text
                        style={styles.txtButton}
                    >
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FistScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%',
        backgroundColor: '#ccf2ff'
    },
    image_banner: {
        width: 150,
        height: 150
    },
    textH1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        width: 300,
        paddingTop: 50,
        color: 'black'
    },
    textP1 : {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 800,
        fontFamily: 'Roboto',
        width: '350px',
        paddingTop: 50,
        color: 'black'
    },
    groupBtn : {
        flexDirection: 'row',
        paddingTop: '80px',
        margin: '0 30px'

    },
    button: {
        backgroundColor: 'rgba(227, 192, 0, 1)',
        height: '45px',
        width:'119px',
        borderRadius: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px'
    },
    txtButton: {
        width: '80px',
        height: '23px',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center'
    }
})