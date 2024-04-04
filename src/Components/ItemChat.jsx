import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from 'react-native-elements'
import getRoomId from '../helper/getRoomId';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAuth } from '../../context/authContext';

const ItemChat = ({ partner }) => {
  const [lastMessage, setLastMessage] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const roomId = getRoomId(user?.userId, partner?.userId);
    const docRef = doc(db, 'rooms', roomId);
    const messageRef = collection(docRef, 'messages');
    const q = query(messageRef, orderBy('createdAt'));

    const unsub = onSnapshot(q, querySnapshot => {
      const allMessage = querySnapshot.docs.map(doc => doc.data());
      setLastMessage(allMessage.length> 0 ?  allMessage[allMessage.length - 1] : {text: 'Nothings'})
    });

    return unsub;
  }, []);

  function renderLastMessage(){
    let str = user?.userId == lastMessage?.userId ? 'Bạn: ': '';
    str += lastMessage?.text ? lastMessage.text : '';
    return str.substring(0, 45)+'...';
  }

  return (
    <View style={styles.itemChat}>
      <Avatar
        source={{ uri: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg' }}
        rounded
        size={60}
      />
      <View style={styles.contentItem}>
        <Text style={styles.name}>{partner.username}</Text>
        <Text>{renderLastMessage()}</Text>
      </View>
    </View>
  )
}

export default ItemChat

const styles = StyleSheet.create({
  itemChat: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 5
  },
  contentItem: {
    paddingVertical: 5,
    gap: 5,
  },
  name: {
    fontWeight: '600',
    fontSize: 18
  }
})
