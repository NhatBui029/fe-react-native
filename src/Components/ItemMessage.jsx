import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'

export default function ItemMessage({ message }) {
    const { user } = useAuth();

    if (user.userId == message.userId) {
        return (
            <View style={styles.messageRight}>
                <Text style={styles.textRight}>{message.text}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.messageLeft}>
                <Text style={styles.textLeft}>{message.text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    messageRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textRight: {
        backgroundColor: 'green',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        maxWidth: '60%'
    },
    messageLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textLeft: {
        backgroundColor: '#ccc',
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        maxWidth: '60%'
    }
})