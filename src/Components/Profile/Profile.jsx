import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useAuth } from "../../../context/authContext";
import axios from "axios";
import { BASE_URL } from '@env'

const Profile = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const { user } = useAuth();

    const Inputs = [
        {
            label: "Tên đăng nhập",
            type: "text",
            value: username,
            func: setUsername
        },
        {
            label: "Email",
            type: "text",
            value: email,
            func: setEmail
        },
        {
            label: "Mật khẩu mới",
            type: "password",
            value: password,
            func: setPassword
        },
        {
            label: "Nhập lại mật khẩu mới",
            type: "password",
            value: newPassword,
            func: setNewPassword
        },
    ];

    useEffect(() => {
        const getInfoUser = async (user) => {
            try {
                const url = `${BASE_URL}/user/getInfoUser`.toString();
                const res = await axios.post(url, {
                    userId: user.userId,
                });
                setEmail(res.data.account.email);
                setUsername(res.data.account.username);
            } catch (e) {
                console.log('ko goi dc api: ', e)
            }
        }

        getInfoUser(user);
    }, [])

    const handdleChangeText = (value, setSomething) => {
        setSomething(value);
    }

    const handleUpdate = async () => {
        if(!password || !newPassword) {
            Alert.alert('Mật khẩu', 'Mật khẩu trống');
            return;
        }
        if (password !== newPassword) {
            Alert.alert('Mật khẩu', 'Mật khẩu không khớp');
            return;
        }
        try {
            const url = `${BASE_URL}/user/edit/account`.toString();
            const res = await axios.patch(url, {
                userId: user.userId,
                email: email,
                username: username,
                password: password
            });

            setUsername(res.data.username);
            setEmail(res.data.email);
            setPassword('');
            setNewPassword('');

            Alert.alert('Thông báo', 'Cập nhật tài khoản thành công')
        } catch (e) {
            console.log('ko goi dc api: ', e)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {Inputs.map((input, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.label}>{input.label}</Text>
                        <Input
                            containerStyle={styles.input}
                            inputStyle={styles.inputText}
                            inputContainerStyle={styles.inputBorder}
                            secureTextEntry={input.type === "password"}
                            value={input.value}
                            onChangeText={value => handdleChangeText(value, input.func)}
                            editable={input.label != 'Email'}
                        />
                    </View>
                ))}
                <Button
                    title="Cập nhật tài khoản"
                    buttonStyle={styles.updateButton}
                    onPress={handleUpdate}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    inputContainer: {
        // marginBottom: 2,
    },
    label: {
        paddingBottom: 5,
        paddingHorizontal: 10,
        fontSize: 12,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: Colors.subGreen,
    },
    inputText: {
        paddingLeft: 10,
        color: Colors.main,
        fontSize: 15,
    },
    inputBorder: {
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
    },
    updateButton: {
        backgroundColor: 'rgba(72, 182, 0, 1)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
    },
});

export default Profile;