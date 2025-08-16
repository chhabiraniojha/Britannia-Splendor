import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Bill = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
       <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"orange",paddingVertical:6,paddingHorizontal:10,display:"flex",flexDirection:"row",alignItems:"center",gap:15}}>
                   <Text style={{fontSize:14,fontWeight:"500"}}>⬅ Back</Text>
                   <Text style={{fontSize:14,fontWeight:"500"}}>Britannia Bill</Text>
                   </TouchableOpacity>
    </View>
  )
}

export default Bill

const styles = StyleSheet.create({})