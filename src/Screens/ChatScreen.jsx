import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import InputChat from '../Components/InputChat'
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { db, userRef } from '../../firebaseConfig';
import { useAuth } from '../../context/authContext';
import getRoomId from '../helper/getRoomId';
import ListMessage from '../Components/ListMessage';

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const { user } = useAuth();
    const [admin, setAdmin] = useState();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAdmin();
        createRoomIfNotExists();
    }, []);

    useEffect(() => {
        if (admin) {
            const roomId = getRoomId(user?.userId, admin?.userId);
            const docRef = doc(db, 'rooms', roomId);
            const messageRef = collection(docRef, 'messages');
            const q = query(messageRef, orderBy('createdAt'));

            const unsub = onSnapshot(q, querySnapshot => {
                const allMessage = querySnapshot.docs.map(doc => doc.data());
                setMessages([...allMessage]);
                setLoading(false);
            });

            return unsub;
        }
    }, [admin]);

    async function getAdmin() {
        const q = query(userRef, where('userId', '==', 'dREmDQQaFgeHZFDrSkf0uUS0Wud2'));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        setAdmin(data[0])
    }

    async function createRoomIfNotExists() {
        if (typeof admin !== 'undefined') {
            const roomId = getRoomId(user?.userId, admin?.userId);
            await setDoc(doc(db, 'rooms', roomId), {
                roomId,
                createdAt: Timestamp.fromDate(new Date())
            });
        }
    }

    async function handleSendMessage() {
        if (!message.trim()) return;

        try {
            const roomId = getRoomId(user?.userId, admin?.userId);
            const docRef = doc(db, 'rooms', roomId);
            const messageRef = collection(docRef, 'messages');
            const newDoc = await addDoc(messageRef, {
                userId: user?.userId,
                text: message,
                senderName: admin?.userId,
                createdAt: Timestamp.fromDate(new Date())
            });

            setMessage('');
        } catch (e) {
            Alert.alert('Message', err.message);
        }
    }

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large' color={'gray'} />
            </View>
        )
    }

    return (
        <View style={styles.chatRoom}>
            <ListMessage messages={messages} />
            <InputChat
                message={message}
                setMessage={setMessage}
                handleSendMessage={handleSendMessage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    chatRoom: {
        height: '100%'
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
