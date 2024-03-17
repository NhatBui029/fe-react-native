import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ItemMessage from './ItemMessage'

export default function ListMessage({ messages }) { 
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.listMessage} 
            invertStickyHeaders={true}
        >
            {
                messages.map((message, index) => {
                    return <ItemMessage message={message} key={index}/>
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listMessage: {
        gap: 15,
        padding:10,
        justifyContent: 'flex-end',
        
    }
})