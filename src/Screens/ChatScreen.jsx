import { View, Text, StyleSheet, Alert, ActivityIndicator, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import InputChat from '../Components/InputChat'
import { Timestamp, addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { db, userRef } from '../../firebaseConfig';
import { useAuth } from '../../context/authContext';
import getRoomId from '../helper/getRoomId';
import ListMessage from '../Components/ListMessage';
import HeaderChat from '../Components/HeaderChat';

export default function ChatScreen({ route , navigation}) {
    const [messages, setMessages] = useState([]);
    const { user } = useAuth();
    const [admin, setAdmin] = useState();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const { partner } = route.params ?  route.params : 'null';
    const scrollViewRef = useRef(null);


    useEffect(() => {
        if (partner) setAdmin(partner);
        else getAdmin();
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

            const KeyBoardDidShowListener = Keyboard.addListener('keyboardDidShow', updateScrollView)

            return () => {
                KeyBoardDidShowListener.remove();
                unsub();
            }
        }
    }, [admin]);

    useEffect(() => {
        updateScrollView();
    }, [messages])

    function updateScrollView() {
        setTimeout(() => {
            scrollViewRef?.current?.scrollToEnd({ animated: true })
        }, 100)
    }

    async function getAdmin() {
        const q = query(userRef, where('userId', '==', process.env.ADMIN_USERID));
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
            <HeaderChat name={admin?.username} navigation={navigation}/>
            <ListMessage
                messages={messages}
                scrollViewRef={scrollViewRef}
            />
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
