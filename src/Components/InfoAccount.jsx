import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useAuth } from '../../context/authContext'
import axios from "axios";
import { BASE_URL } from '@env'

const InfoAccount = ({ route }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const { user } = useAuth();
    // const { infoUser } = route.params;

    useEffect(() => {
        const getInfoUser = async (user) => {
            try {
                const url = `http://192.168.157.247:3000/user/getInfoUser`.toString();
                const res = await axios.post(url, {
                    userId: user.userId
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

    const handleUpdate = () => {
        console.log(name)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    paddingHorizontal={10}
                    editable={false}
                    value={email}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Tên tài khoản</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    paddingHorizontal={10}
                    onChangeText={value => handdleChangeText(value, setUsername)}
                    value={username}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Mật khẩu mới</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    secureTextEntry={true}
                    paddingHorizontal={10}
                    onChangeText={value => handdleChangeText(value, setPassword)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nhập lại mật khẩu mới</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    secureTextEntry={true}
                    paddingHorizontal={10}
                    onChangeText={value => handdleChangeText(value, setNewPassword)}
                />
            </View>

            <Button
                title="Cập nhật tài khoản"
                buttonStyle={styles.updateButton}
                onPress={handleUpdate}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },
    inputContainer: {
        marginBottom: 2,
    },
    label: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 0,
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: Colors.subGreen,
    },
    inputText: {
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
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default InfoAccount;