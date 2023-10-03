import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Screen1_c = () => {
    return (
        <View style={styles.container}>
            <View
                style={styles.gradientBackground}
            />
            <Text style={styles.textBanner}>
                CODE
            </Text>
            <Text style={styles.textBanner1}>
                VERIFICATION
            </Text>
            <Text style={styles.textBanner2}>
            Enter ontime password sent on {'\n'}+849092605798
            </Text>
            <View style={styles.groupBoxInput}>
                <TextInput style={styles.txtBoxInput}/>
                <TextInput style={styles.txtBoxInput}/>
                <TextInput style={styles.txtBoxInput}/>
                <TextInput style={styles.txtBoxInput}/>
                <TextInput style={styles.txtBoxInput}/>
                <TextInput style={styles.txtBoxInput}/>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    /*  */
                }}
            >
                <Text style={styles.contentBtn}>VERIFY CODE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1_c

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
    textBanner: {
        fontSize: '54px',
        fontWeight: '700',
        marginTop: '120px'
    },
    textBanner1 : {
        fontSize: '22px',
        fontWeight: '700',
        paddingTop: '60px'
    },
    textBanner2 : {
        textAlign : 'center',
        fontSize: '15px',
        fontWeight: '700',
        marginTop: '60px'
    },
    groupBoxInput : {
        flexDirection : 'row',
        paddingTop: '70px'
    },
    txtBoxInput : {
        borderColor : 'black',
        borderWidth: '1px',
        width: '40px', 
        height: '40px'
    },
    button : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#E3C000',
        width: '90%',
        marginTop : '60px',
        marginBottom : '60px',
        borderRadius: '10px'
    },
    contentBtn : {
        fontSize: '20px',
        fontWeight: '700'
    }
})