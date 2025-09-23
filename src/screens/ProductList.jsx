import { FlatList, Image, StyleSheet, Text, View , TouchableOpacity,StatusBar,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Indicator from '../components/Indicator';
const ProductList = () => {
    const navigation = useNavigation();
    const categories = useSelector(state => state.Productlist.data); // from store
      const cartcategory = useSelector((state)=>state.Productlist.cartByCategory);
    const ProductData = categories
  const route = useRoute();
  const  {id} = route.params
  const selectedCategory = ProductData.find(cat=>cat.categoryId === id);
  return (
      <SafeAreaView style={{ flex: 1,height:"100%"}}>
          <StatusBar
                  backgroundColor="orange"
                  barStyle="light-content"
                  translucent={false}
                  hidden={false}
                />
               <View style={{backgroundColor:"orange",flexDirection:"row",paddingTop:50,justifyContent:"space-between",paddingHorizontal:10,paddingBottom:10}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={{fontSize:14,fontWeight:"500"}}>⬅ Back</Text>
              </TouchableOpacity>
    <Text style={{fontSize:14,fontWeight:"500"}}>ProductList</Text>
    <Indicator/>
    </View>
      {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Products in Category {id}</Text> */}

      {selectedCategory ? (
        <FlatList
          data={selectedCategory.ProductList}
          keyExtractor={item => item.ProductId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{product:item,id:id})} style={styles.item}>
            <View style={styles.imageContainer}>
            <Image source={{uri:item.image}} resizeMode='contain' style={styles.image} />
             </View>
             <View style={styles.textContainer}>
              <Text style={styles.name}>{item.ProductName}</Text>
              <Text style={styles.name}>{item.ProductTittle}</Text>
              <Text style={styles.name}>{item.Shortdiscription}</Text>
              <Text style={styles.name}>{item.Longdiscription}</Text>
              <Text style={styles.price}>₹{item.Mrp}</Text>
              </View>
         { (cartcategory[id]?.includes(item.ProductId))?
<View style={styles.tick}></View>:null
         }
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No products found for this category.</Text>
      )}
    </SafeAreaView>

  )
}

export default ProductList

const styles = StyleSheet.create({
    item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems:"center",
    flexDirection:"row",
    gap:15,
    width:"100%"
  },
  textContainer:{
  flex:1,
  overflow:"hidden"
  },
  tick:{
  height:10,
  width:10,
  borderRadius:20,
  backgroundColor:"green",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,shadowRadius: 3,
  elevation: 5,
  marginBottom:"30%",
  //  marginRight:"5%"
  gap:20
  },
  name: {
    fontSize: 16
  },
  price: {
    fontSize: 14,
    color: 'green'
  },
    imageContainer: {
    width: 60,
    height: 60,
    // borderRadius: 30,
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
})