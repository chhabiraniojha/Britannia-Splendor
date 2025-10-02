import { StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview";
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MyWebView = () => {
    const insets = useSafeAreaInsets();
      const route = useRoute();
    const {url} = route.params;
    console.log("url",url)
  return (
    <SafeAreaView  style={[styles.container,{ paddingTop: insets.top, paddingBottom: insets.bottom ,backgroundColor:"orange"}]}>
  <StatusBar
    backgroundColor="orange"
    barStyle="light-content"
    translucent={false}
  />  
  <View style={{backgroundColor:"orange",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,paddingBottom:10}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
          <Text style={{fontSize:18,fontWeight:"500",color:"white"}}>BillGen</Text>
        </View>
          </View>
        <WebView
        source={{uri:url}} 
        />
    </SafeAreaView>
  )
}

export default MyWebView

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})