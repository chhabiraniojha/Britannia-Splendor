import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="orange" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  // vertical center
    alignItems: "center",      // horizontal center
    // backgroundColor: "#fff",   // optional background
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "orange"
  }
})
