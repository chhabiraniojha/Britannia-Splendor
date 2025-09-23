import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import Indicator from '../components/Indicator'
import { Logout, setIsAuthenticate } from '../Redux/loginSlice'
import { useDispatch } from 'react-redux'

const Bill = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const logOutMain = ()=>{
      dispatch(setIsAuthenticate(false))
      dispatch(Logout())
  }
  return (
    <SafeAreaView style={{flex:1}}>
          <StatusBar
           backgroundColor="orange"
           />
         <View style={{backgroundColor:"orange",flexDirection:"row",paddingTop:50,justifyContent:"space-between",paddingHorizontal:10,paddingBottom:10}}>
    <Text style={{fontSize:14,fontWeight:"500"}}>Britannia Bill</Text>
    <Indicator/>
    </View>
<TouchableOpacity onPress={logOutMain}>
  <Text>Logout</Text>
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default Bill

const styles = StyleSheet.create({})