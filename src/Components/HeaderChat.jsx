import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import IconBorder from './IconBorder'
import RightHeaderChat from './RightHeaderChat'

const HeaderChat = ({ name, navigation }) => {
    return (
        <View style={styles.headerChat}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <IconBorder name={'arrow-back'} size={20} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
            </View>
            <RightHeaderChat />
        </View>
    )
}

export default HeaderChat

const styles = StyleSheet.create({
    headerChat: {
        height: 85,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }
})