import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import App from '../App'
export default function StartPage() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={'gray'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});