import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
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
    }
})