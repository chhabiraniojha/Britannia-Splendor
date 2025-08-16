import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const Home = () => {
    const navigation = useNavigation();
    const homecategory = useSelector((state)=>state.Homecat)
    console.log("homecategory",homecategory)
    const cattegoriesdata = [
      {
        id:"1",
        name:"Wellness",
        image:"https://static.vecteezy.com/system/resources/previews/001/271/001/original/wellness-and-therapy-woman-icon-vector.jpg"
      },
      {
        id:"2",
        name:"Skin Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"3",
        name:"Watches and jewellery",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"4",
        name:"Color",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"5",
        name:"Personal Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"6",
        name:"Home Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"7",
        name:"Laundary Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"8",
        name:"Food and beverages",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"9",
        name:"Agriculture",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"10",
        name:"Autto Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"11",
        name:"Life Style",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"12",
        name:"Others",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"13",
        name:"Fragnanace",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
    ]
  return (
    <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:"orange",paddingVertical:6,paddingHorizontal:10}}>
    <Text style={{fontSize:14,fontWeight:"500"}}>Britannia</Text>
    </View>
   <FlatList
  data={cattegoriesdata}
  keyExtractor={(item) => item.id}
  numColumns={3}
  contentContainerStyle={{
    paddingVertical: 10,
  }}
  columnWrapperStyle={{
    justifyContent: "space-around", // even spacing between items
  }}
  renderItem={({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductList',{id:item.id})}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }}
/> 
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100, // ensures each takes equal width
    marginVertical: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: "70%",
    height: "70%",
  },
  itemText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    flexWrap: "wrap",
    width: 80,
  },
});
