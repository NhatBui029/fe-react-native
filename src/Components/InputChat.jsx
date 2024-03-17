import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function InputChat({ message, setMessage, handleSendMessage }) {
    return (
        <View style={styles.inputChat}>
            <View style={styles.suggest}>
                <Text>suggest</Text>
            </View>
            <View style={styles.input}>
                <Ionicons name='add-circle' size={25} color={'green'} />
                <TextInput
                    value={message}
                    onChangeText={value => setMessage(value)}
                    placeholder='Soạn tin'
                    style={styles.textInput}
                />
                <Ionicons
                    name='send'
                    size={25}
                    color={'green'}
                    onPress={handleSendMessage}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputChat: {
        backgroundColor: 'white'

    },
    suggest: {

    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 5,
        marginRight: 20,
        marginVertical: 10,
    },
    textInput: {
        paddingLeft: 10,
        paddingVertical: 2,
        borderColor: '#ccc',
        borderWidth: 1,
        width: '85%',
        borderRadius: 10
    }
})