import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen1_d = () => {

    const [showPassword, setShowPassword] = useState(true)

    const ToggleEye = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput
                onChange={() => {
                    /*  */
                }}
                placeholder='Email'
                style={styles.txtInput}
            />
            <View style={styles.groupPass}>
                <TextInput
                    onChange={() => {
                        /*  */
                    }}
                    placeholder='Password'
                    style={styles.txtInput}
                    secureTextEntry={showPassword}
                />
                <TouchableOpacity
                    onPress={() => ToggleEye()}
                    style={styles.btnShowPass}
                >
                    <Image
                        source={require('../../assets/eye1.png')}
                        style={styles.imgInFormPass}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={{
                    /*  */
                }}
            >
                <Text style={styles.txtBtnLogin}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <Text
                style={styles.txt2}
            >
                When you agree to terms and conditions
            </Text>
            <Text style={styles.txt3}>
                For got your password?
            </Text>
            <Text style={styles.txt2}>
            Or login with
            </Text>
        </View>
    )
}

export default Screen1_d

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: '25px',
        fontWeight: '700',
        marginTop: '80px',
        marginBottom: '60px'
    },
    txtInput: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        height: '50px',
        padding: '15px',
        marginBottom: '35px',
        borderRadius: '8px'
    },
    groupPass: {
        width: '90%',
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        height: '50px',
    },
    btnShowPass: {
        justifyContent: 'center',
        paddingRight: '15px'
    },
    imgInFormPass: {
        width: '30px',
        height: '30px',
    },
    btnLogin: {
        marginTop: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E53935',
        width: '90%',
        height: '45px',
        borderRadius: '8px'
    },
    txtBtnLogin: {
        fontSize: '20px',
        color: 'white',
        fontWeight: '700'
    },
    txt2 : {
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '20px'
    },
    txt3 : {
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '20px',
        color : '#5D25FA'
    }
})