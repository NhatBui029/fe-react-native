import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useAuth } from '../../context/authContext'
import axios from "axios";
import { BASE_URL } from '@env'

const InfoPerson = () => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const { user } = useAuth();


    useEffect(() => {
        const getInfoUser = async (user) => {
            try {
                const url = `http://192.168.157.247:3000/user/getInfoUser`.toString();
                const res = await axios.post(url, {
                    userId: user.userId
                });
                console.log(res.data)
                setName(res.data.name);
                setPhone(res.data.phone);
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
                <Text style={styles.label}>Họ và Tên</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    paddingHorizontal={10}
                    value={name}
                    onChangeText={value => handdleChangeText(value, setName)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Số điện thoại</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    paddingHorizontal={10}
                    onChangeText={value => handdleChangeText(value, setPhone)}
                    value={phone}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Địa chỉ</Text>
                <Input
                    containerStyle={styles.input}
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputBorder}
                    secureTextEntry={false}
                    paddingHorizontal={10}
                    onChangeText={value => handdleChangeText(value, setAddress)}
                />
            </View>

            <Button
                title="Cập nhật thông tin"
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

export default InfoPerson;