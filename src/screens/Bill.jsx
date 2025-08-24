import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

const Bill = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
          <StatusBar
           backgroundColor="orange"
           />
       <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"orange",paddingVertical:20,paddingHorizontal:10,display:"flex",flexDirection:"row",alignItems:"center",gap:15}}>
                   <Text style={{fontSize:14,fontWeight:"500" , marginTop:10}}>⬅ Back</Text>
                   <Text style={{fontSize:14,fontWeight:"500" , marginTop:10}}>Britannia Bill</Text>
                   </TouchableOpacity>
    </View>
  )
}

export default Bill

const styles = StyleSheet.create({})