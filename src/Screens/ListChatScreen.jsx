import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext';
import { Timestamp, addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { db, userRef } from '../../firebaseConfig';
import getRoomId from '../helper/getRoomId';
import ItemChat from '../Components/ItemChat';
import HeaderListChat from '../Components/HeaderListChat';

const ListChatScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const { logout } = useAuth();

    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        const q = query(userRef, where('userId', '!=', process.env.ADMIN_USERID));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        // console.log('data: ' ,data)
        // console.log(process.env.ADMIN_USERID)
        setUsers(data)
    }

    async function handleLogout() {
        await logout();
    }

    return (
        <View style={styles.container}>
            <HeaderListChat/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {users.map((user, index) => {
                    console.log(user)
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('ChatAdmin', { partner: user })}
                        >
                            <ItemChat partner={user} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView >
        </View>
    )
}

export default ListChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        height: '100%',
    },
})