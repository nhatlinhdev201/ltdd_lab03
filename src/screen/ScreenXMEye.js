
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import React from 'react'

const ScreenXMEye = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/eyeball-3097971.png')}
                style={styles.imgBanner}
            />
            <View
                style={styles.groupTextInput}
            >
                <PersonOutlineOutlinedIcon
                    style={styles.iconTextInput}
                    color='primary'
                />
                <TextInput
                    style={styles.txtTextInput}
                    placeholder='Please input user name'
                    placeholderTextColor='#C4C4C4'
                />
            </View>
            <View
                style={styles.groupTextInput}
            >
                <HttpsOutlinedIcon
                    style={styles.iconTextInput}
                    color='primary'
                />
                <TextInput
                    style={styles.txtTextInput}
                    placeholder='Please input user name'
                    placeholderTextColor='#C4C4C4'
                />
            </View>
            <View style={styles.buttonLogin}>
                <Text style={styles.txtButtonLogin}>
                    LOGIN
                </Text>
            </View>
            <View style={styles.groupMoreOption}>
                <TouchableOpacity style={styles.btnOption}>
                    <Text style={styles.txtOption}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOption}>
                    <Text style={styles.txtOption}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupOtherLoginTitle}>
                <View style={styles.line} />
                <Text style={styles.txtOtherLoginTitle}>
                    Other Login Methods
                </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.groupOtherLoginButton}>
                <TouchableOpacity
                    style={styles.btnOtherLoginButton}
                    onPress={() => {
                        /*  */
                    }}
                >
                    <Image
                        source={require('../../assets/add.png')}
                        style={styles.imgOtherLoginButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnOtherLoginButton}
                    onPress={() => {
                        /*  */
                    }}
                >
                    <Image
                        source={require('../../assets/connect.png')}
                        style={styles.imgOtherLoginButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnOtherLoginButton}
                    onPress={() => {
                        /*  */
                    }}
                >
                    <Image
                        source={require('../../assets/fb-lg.png')}
                        style={styles.imgOtherLoginButton}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenXMEye

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgBanner: {
        width: 220,
        height: 220,
        marginTop: 20
    },
    groupTextInput: {
        flexDirection: 'row',
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginTop: 30
    },
    iconTextInput: {
        width: 40,
        height: 40,
    },
    txtTextInput: {
        fontSize: 17
    },
    buttonLogin: {
        backgroundColor: '#386FFC',
        width: '80%',
        padding: 17,
        borderRadius: 8,
        marginTop: 30
    },
    txtButtonLogin: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 500
    },
    groupMoreOption: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    txtOption: {
        fontSize: 17,
        fontWeight: 450,
        color: 'black'
    },
    groupOtherLoginTitle: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    line: {
        backgroundColor: '#386FFC',
        height: 1.5,
        width: 85
    },
    txtOtherLoginTitle: {
        fontSize: 15,
        color: 'black'
    },
    groupOtherLoginButton : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop :20
    },
    btnOtherLoginButton : {
        marginLeft : 20,
        marginRight : 20
    },
    imgOtherLoginButton : {
        width : 70,
        height : 70
    }
})