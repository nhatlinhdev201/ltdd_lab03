import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen2_a = () => {

    const [showPassword, setShowPassword] = useState(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Text style={styles.txtTitle}>
                    LOGIN
                </Text>
            </View>
            <View style={styles.groupTxtInput}>
                <Image
                    source={require('../../assets/avatar_user1.png')}
                    style={styles.imgInTxtInput}
                />
                <TextInput
                    placeholder='Name'
                    onChange={() => {
                        /*  */
                    }}
                    style={styles.txtTextInput}
                />
            </View>
            <View style={styles.groupTxtInput}>
                <Image
                    source={require('../../assets/lock-1528791.png')}
                    style={styles.imgInTxtInput}
                />
                <TextInput
                    placeholder='Password'
                    onChange={() => {
                        /*  */
                    }}
                    secureTextEntry={showPassword}
                    style={styles.txtTextInput}
                />
                <TouchableOpacity
                    onPress={handleShowPassword}
                >
                    <Image
                        source={require('../../assets/eye1.png')}
                        style={styles.imgInTxtInput}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    /*  */
                }}
                style={styles.buttonLogin}
            >
                <Text
                    style={styles.textBtnLogin}
                >
                    LOGIN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    /*  */
                }}
                style={styles.btnCreateAcc}
            >
                <Text
                    style={styles.txtCreateAcc}
                >
                    CREATE ACCOUNT
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2_a

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        /* background: linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%);*/
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'
    },
    titlePage: {
        alignItems: 'flex-start',
        width: '90%',
        marginTop: 60,
        marginBottom: 50,
        paddingLeft: 20
    },
    txtTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    groupTxtInput: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        padding : 10
    },
    imgInTxtInput: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    txtTextInput: {
        width: '100%',
    },
    buttonLogin : {
        width : '90%',
        backgroundColor : 'black',
        padding : 8,
        marginTop : 50,
        borderRadius : 5
    },
    textBtnLogin : {
        textAlign: 'center',
        fontSize: 22,
        fontWeight : 600,
        color : 'white'
    },
    btnCreateAcc : {
        width : '90%'
    },
    txtCreateAcc : {
        textAlign: 'center',
        fontSize : 18,
        color : 'black',
        fontWeight : 600,
        padding : 20,
        marginTop : 40
    }
})