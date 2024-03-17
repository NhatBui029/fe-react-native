import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function RightHeaderChat() {
  return (
    <View style={styles.rightHeader}>
      <Ionicons name='call' size={25} color={'green'}/>
      <Ionicons name='videocam' size={30} color={'green'}/>
      <Ionicons name='information-circle' size={30} color={'green'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    rightHeader:{
        flexDirection: 'row',
        marginRight: 20,
        gap: 20,
        alignItems: 'center'
    }
})