import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image  source={require("../../assets/SplashIcon.png")} resizeMode='contain' style={{height:"40%",width:"40%",margin:"auto"}}/>
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
