import { View, Text, StyleSheet, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { suggestsClient, suggestsAdmin } from '../data/suggests'
import { useAuth } from '../../context/authContext'

export default function InputChat({ message, setMessage, handleSendMessage }) {
    const { user } = useAuth();
    const suggests = user?.userId == process.env.ADMIN_USERID ? suggestsAdmin : suggestsClient;
    
    function handleSetMessage(message) {
        setMessage(message);
    }

    return (
        <View style={styles.inputChat}>
            <ScrollView
                contentContainerStyle={styles.suggests}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {suggests.map((suggest, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleSetMessage(suggest)}
                        >
                            <Text style={styles.suggest}>{suggest}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
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
        backgroundColor: 'white',
    },
    suggests: {
        gap: 10,
        marginTop: 10,
        marginLeft: 5
    },
    suggest: {
        backgroundColor: 'green',
        paddingHorizontal: 5,
        paddingVertical: 5,
        color: 'white',
        borderRadius: 10
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