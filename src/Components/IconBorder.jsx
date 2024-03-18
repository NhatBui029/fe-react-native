import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconBorder = ({name, size = 25}) => {
  return (
    <View style={styles.icon}>
      <Ionicons name={name} color={'black'} size={size}/>
    </View>
  )
}

export default IconBorder

const styles = StyleSheet.create({
    icon: {
        padding: 10,
        backgroundColor: '#F2F3F5',
        borderRadius: 50
    }
})