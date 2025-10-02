import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,StatusBar, Dimensions} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Indicator from '../components/Indicator'
import Icon from 'react-native-vector-icons/Ionicons'
import { useInterstitialAd } from "../components/UseInterstitialAd";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const Home = () => {
  const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const ScreenWidth = Dimensions.get("window").width
    const homecategory = useSelector(state=>state.Homecat)
    const DrawerOpen = ()=>{
       navigation.openDrawer();
    }
   const { showAd } = useInterstitialAd();
    const GoToProductList = async({item}) => {
  await showAd()
    // Navigate ONLY after ad closes
    navigation.navigate("ProductList", { id: item.id });
};
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="orange" hidden={false} translucent={false} barStyle='light-content'/>
    <View style={{backgroundColor:"orange",flexDirection:"row",paddingTop:40,justifyContent:"space-between",paddingHorizontal:10,paddingBottom:10}}>
  <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
    <TouchableOpacity onPress={()=>DrawerOpen()}>
   <Icon name="menu-outline" size={30} color="white" />
    </TouchableOpacity>
    <Text style={{fontSize:18,fontWeight:"500",color:"white"}}>BillGen</Text>
  </View>
    <Indicator/>
    </View>
   <FlatList
  data={homecategory}
  keyExtractor={(item) => item.id}
  numColumns={3}
  contentContainerStyle={{
    paddingVertical: 10,
  }}
  columnWrapperStyle={({rowIndex})=>({
    justifyContent: rowIndex ===Math.floor(homecategory.length/3)?"flex-start":"space-around", // even spacing between items
  })}
  renderItem={({ item }) => {
    return (
      <View style={[styles.itemContainer,{width:ScreenWidth/3}]}>
        <TouchableOpacity 
        onPress={()=>GoToProductList({item})}>
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
    // justifyContent: "center",
    // width: ScreenWidth/3, // ensures each takes equal width
    marginVertical: 10,
    // backgroundColor:"red"
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf:"center",
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
    alignContent:'center',
    marginTop: 5,
    flexWrap: "wrap",
    width: 90,
  },
});
