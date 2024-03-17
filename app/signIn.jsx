import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useRef } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '../context/authContext';
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function signIn() {
    const router = useRouter();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { login } = useAuth();

    async function handleLogin() {
        if (!emailRef.current || !passwordRef.current) {
            if (!res.success) {
                Alert.alert('Đăng nhập', 'Điền đầy đủ thông tin đăng nhập !');
            }
        }

        const res = await login(emailRef.current, passwordRef.current);

        if (!res.success) {
            Alert.alert('Đăng nhập', res.msg);
        }
    }

    return (
        <View style={styles.mainLogin}>
            <Text style={{ fontSize: 25, fontWeight: 600, color: '#1D1E20' }}>ĐĂNG NHẬP</Text>
            <View style={styles.mainContent}>
                <View>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={value => emailRef.current = value}
                        inputStyle={{ fontSize: 15 }}
                    />
                    <Input
                        label='Mật khẩu'
                        placeholder='******'
                        onChangeText={value => passwordRef.current = value}
                        rightIcon={<Ionicons name='eye' />}
                        inputStyle={{ fontSize: 15 }}
                        errorMessage='Bạn quên mật khẩu?'
                        errorStyle={{ color: '#8F959E', fontSize: 14 }}
                        containerStyle={{ marginBottom: 10 }}
                        secureTextEntry={true}
                    />
                </View>

                <Button title='Đăng nhập' color={'green'} onPress={handleLogin} style={styles.login} />
                <View style={styles.separator}>
                    <View style={styles.line} />
                    <Text style={styles.text}>Hoặc đăng nhập với</Text>
                    <View style={styles.line} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <View style={styles.btnFb}>
                            <Ionicons name='logo-facebook' color={'white'} size={30} />
                        </View>
                        <View style={styles.btnGg}>
                            <Ionicons name='logo-google' color={'white'} size={30} />
                        </View>
                    </View>
                </View>
            </View>

            <Text 
                onPress={() => router.push('signUp')}
                style={{color:  '#8F959E'}}
            >
                Hoặc tạo mới tài khoản
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainLogin: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        
    },
    mainContent: {
        gap: 10,
        
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#8F959E',
    },
    text: {
        marginHorizontal: 10,
        color: '#8F959E',
        fontSize: 16,
    },
    btnFb: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#4267B2', 
        width: '47%',
        paddingVertical: 5,
        borderRadius: 5
    },
    btnGg: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#EA4335', 
        width: '47%',
        paddingVertical: 5,
        borderRadius: 5
    },
})