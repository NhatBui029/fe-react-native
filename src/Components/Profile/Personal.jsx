import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAuth } from "../../../context/authContext";
import axios from "axios";
import { BASE_URL } from '@env'

const Personal = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const { user } = useAuth();

    const Inputs = [
        {
            label: "Tên",
            type: "text",
            value: name,
            func: setName
        },
        {
            label: "Số điện thoại",
            type: "text",
            value: phone,
            func: setPhone
        },
        {
            label: "Ngày sinh",
            type: "datetime",
        },
        {
            label: "Địa chỉ",
            type: "text",
            value: address,
            func: setAddress
        },
    ];

    const toggleDatepicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    useEffect(() => {
        const getInfoUser = async (user) => {
            try {
                const url = `${BASE_URL}/user/getInfoUser`.toString();
                const res = await axios.post(url, {
                    userId: user.userId,
                });
                console.log(res.data)
                setName(res.data.name);
                setPhone(res.data.phone);
                setAddress(res.data.address.address);
                setDate(new Date(res.data.birthday))
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
        if (!name || !phone || !address) {
            Alert.alert('Lỗi', 'Không bỏ trống !');
            return;
        }

        try {
            const url = `${BASE_URL}/user/edit/info`.toString();
            const res = await axios.patch(url, {
                userId: user.userId,
                name: name,
                phone: phone,
                address: address,
                birthday: date
            });

            // setUsername(res.data.username);
            // setEmail(res.data.email);
            // setPassword('');
            // setNewPassword('');

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
                        {input.type === "datetime" ? (
                            <View>
                                <Pressable onPress={toggleDatepicker}>
                                    <View
                                        style={styles.dateofbirth}
                                        containerStyle={styles.input}
                                        inputStyle={styles.inputText}
                                        inputContainerStyle={styles.inputBorder}
                                    >
                                        <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
                                    </View>
                                </Pressable>
                                {showDatePicker && (
                                    <DateTimePicker
                                        value={date}
                                        mode="date"
                                        display="spinner"
                                        onChange={onChangeDate}
                                    />
                                )}
                            </View>
                        ) : (
                            <Input
                                containerStyle={styles.input}
                                inputStyle={styles.inputText}
                                inputContainerStyle={styles.inputBorder}
                                value={input.value}
                                onChangeText={value => handdleChangeText(value, input.func)}
                            />
                        )}
                    </View>
                ))}
                <Button
                    title="Cập nhật"
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
        // marginBottom: 20,
    },
    label: {
        paddingBottom: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: Colors.subGreen,
    },
    inputText: {
        color: Colors.main,
        fontSize: 16,
        paddingVertical: 10,
        marginLeft: 10
    },
    inputBorder: {
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
    },
    dateofbirth: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    updateButton: {
        backgroundColor: 'rgba(72, 182, 0, 1)',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 10,
    },
});

export default Personal;