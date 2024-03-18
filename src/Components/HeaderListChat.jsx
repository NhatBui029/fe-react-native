import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import IconBorder from './IconBorder'
import { Badge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

const HeaderListChat = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.titleLeft}>
                    <IconBorder name='menu' />
                    <Badge
                        status="error"
                        value={3}
                        containerStyle={{ position: 'absolute', top: 0, left: 30 }}
                    />
                    <Text style={styles.textTitleLeft}>Đoạn chat</Text>
                </View>
                <View style={styles.titleRight}>
                    <IconBorder name='pencil' size={25} />
                </View>
            </View>
            <View style={styles.inputSearch}>
                <Ionicons name='search' size={16} color={'#cccccc'}/>
                <TextInput                   
                    placeholder="Tìm kiếm"
                    keyboardType="default"
                />
            </View>
        </View>
    )
}

export default HeaderListChat

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        gap: 10,
        backgroundColor: 'white'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    textTitleLeft: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        height: 40,
        width: '100%',
        marginVertical: 12,
        padding: 10,
        backgroundColor: '#F2F3F5',
        borderRadius: 10
    }
})