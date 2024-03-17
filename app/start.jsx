import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import start from '../assets/start.png'
import { useRouter } from 'expo-router'

const Start = () => {
    const router = useRouter();
    return (
        <ImageBackground
            style={styles.background}
            source={start}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Ecommerce</Text>
                <Text style={styles.text} onPress={()=>router.push('signIn')}>Đăng nhập</Text>
                <Text style={styles.text} onPress={()=>router.push('signUp')}>Đăng kí</Text>
            </View>
        </ImageBackground>
    )
}

export default Start

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative'
    },
    container: {
        position: 'absolute',
        top: 300,
        left: 50
        
    },
    text: {
        backgroundColor: '#48B600',
        color: 'white',
        padding: 10,
        fontSize: 18,
        marginVertical: 10,
        borderRadius: 5,
    },
    title:{
        fontSize: 20,
        fontWeight: '600',
        color: '#48B600'
    }
});