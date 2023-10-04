import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen1_e = () => {

    const [showPassword, setShowPassword] = useState(true)

    const ToggleEye = () => {
        setShowPassword(!showPassword);
    }

    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTER</Text>
            <TextInput
                onChange={() => {
                    /*  */
                }}
                placeholder='Name'
                style={styles.txtInput}
            />
            <TextInput
                onChange={() => {
                    /*  */
                }}
                placeholder='Phone'
                style={styles.txtInput}
            />
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
            <TextInput
                onChange={() => {
                    /*  */
                }}
                placeholder='Birthday'
                style={styles.txtInput}
            />
            <View style={styles.groupRadioSex}>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => handleGenderSelection('male')}
                >
                    {selectedGender === 'male' && <View style={styles.radioButtonDot} />}
                </TouchableOpacity>
                <Text style={styles.radioButtonText}>Male</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => handleGenderSelection('female')}
                >
                    {selectedGender === 'female' && <View style={styles.radioButtonDot} />}
                </TouchableOpacity>
                <Text style={styles.radioButtonText}>Female</Text>
            </View>
            <TouchableOpacity
                style={styles.BtnRegister}
                onPress={{
                    /*  */
                }}
            >
                <Text style={styles.txtBtnRegister}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <Text
                style={styles.txt2}
            >
                When you agree to terms and conditions
            </Text>
        </View>
    )
}

export default Screen1_e

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: '25px',
        fontWeight: '700',
        marginTop: '60px',
        marginBottom: '40px'
    },
    txtInput: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        height: '50px',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '8px'
    },
    groupPass: {
        width: '90%',
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        height: '50px',
        marginBottom: '20px',
        borderRadius: '8px'
    },
    btnShowPass: {
        justifyContent: 'center',
        paddingRight: '15px'
    },
    imgInFormPass: {
        width: '30px',
        height: '30px',
    },
    BtnRegister: {
        marginTop: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E53935',
        width: '90%',
        height: '45px',
        borderRadius: '8px'
    },
    txtBtnRegister: {
        fontSize: '20px',
        color: 'white',
        fontWeight: '700'
    },
    txt2: {
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '20px'
    },
    groupRadioSex: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '90%',
    },
    radioButton: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        marginRight: '8px',
        marginLeft: '20px'
    },
    radioButtonText: {
        fontSize: '15px',
        fontWeight: '500',
        marginRight: '10px'
    },
    radioButtonDot: {
        width: '20px',
        height: '20px',
        borderRadius: 8,
        backgroundColor: 'black',
    }
})