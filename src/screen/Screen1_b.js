import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen1_b = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gradientBackground}>
            </View>
            <Image
                source={require('../../assets/lock-1528791.png')}
                style={styles.imgBaner}
            />
            <Text style={styles.text1}>
                FORGET {'\n'} PASSWORD
            </Text>
            <Text style={styles.text2}>
                Provide your account’s email for which you {'\n'} want to reset your password
            </Text>
            <View style={styles.groupEmail}>
                <Image
                    source={require('../../assets/mail-29353651.png')}
                    style={styles.imgEmail}
                />
                <TextInput
                    value=''
                    style={styles.textInput}
                    onChange={()=>{
                        /*  */
                    }}
                    placeholder='Email'
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> {
                    /*  */
                }}
            >
                <Text style={styles.txtButton}>
                    NEXT
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1_b

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    gradientBackground: {
        backgroundImage: 'linear-gradient(#C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    imgBaner: {
        marginTop: '150px',
        width: '105px',
        height: '117px'
    },
    text1: {
        fontSize: '25px',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '20px'
    },
    text2 : {
        width : '80%',
        fontSize : '15px',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '40px'
    },
    groupEmail : {
        height: '40px',
        width : '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '40px',
        borderRadius: '5px'
    },
    imgEmail : {
        width: '40px',
        height: '40px'
    },
    textInput : {
        height: '40px',
        backgroundColor: '#C4C4C4',
        width: '80%',
        margin: '0'
    },
    button : {
        backgroundColor : '#E3C000',
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',
        marginBottom : '60px',
        marginTop: '40px',
        borderRadius: '10px'
    },
    txtButton : {
        fontSize : '20px',
        fontWeight: '600'
    }
})