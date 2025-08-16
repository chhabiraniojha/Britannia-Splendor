import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { unselectProduct,clearCart } from '../Redux/Datasplice';

const Cart = () => {
   const navigation = useNavigation();
     const alldata = useSelector(state => state.Productlist.data); // from store
         const [bill,setbill] = useState(false)
     console.log("redux data",alldata)
       const cartcategory = useSelector((state)=>state.Productlist.cartByCategory);
         console.log("cartcategory",cartcategory)
         const [cartDetails,setCartDetails] = useState([])
   const dispatch = useDispatch();
     const [refresh, setRefresh] = useState(false);
useEffect(() => {
  let details = [];
  // Loop through each category in cart
  for (let categoryId in cartcategory) {
    //   // find that category in initialState
    let category = alldata.find(c => c.categoryId === categoryId);
    if (category) {
      //     // get productIds for this category from cart
      let productIds = [...new Set(cartcategory[categoryId])]; // remove duplicates
      //     // filter ProductList to only include products in productIds
      let products = category.ProductList.filter(p => productIds.includes(p.ProductId));
          // push them into details
      details.push(...products.map(p => ({ ...p, categoryId })));
    }
  }   
  setCartDetails(details);
}, [cartcategory, alldata]); 
   return (
       <View style={{ flex: 1,}}>
           <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"orange",paddingVertical:6,paddingHorizontal:10,display:"flex",flexDirection:"row",alignItems:"center",gap:15}}>
             <Text style={{fontSize:14,fontWeight:"500"}}>⬅ Back</Text>
             <Text style={{fontSize:14,fontWeight:"500"}}>Britannia ProductList</Text>
             </TouchableOpacity>
              {bill === true?<Text style={{textAlign:"center"}}>Bill Generated Successfully</Text>:null}
         <FlatList
           data={cartDetails}
           keyExtractor={item => item.ProductId}
           renderItem={({ item }) => (
             <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{product:item,id:id})} style={styles.item}>
             <View style={styles.imageContainer}>
             <Image source={{uri:item.image}} resizeMode='contain' style={styles.image} />
              </View>
              <View>
               <Text style={styles.name}>{item.ProductName}</Text>
               <Text style={styles.name}>{item.ProductTittle}</Text>
               <Text style={styles.name}>{item.Shortdiscription}</Text>
               <Text style={styles.name}>{item.Longdiscription}</Text>
               <Text style={styles.price}>₹{item.Mrp}</Text>
               </View>
          <TouchableOpacity onPress={()=>{
                  dispatch(unselectProduct({categoryId:item.categoryId,productId:item.ProductId}))
          }}>
              <Text>Remove item</Text>
          </TouchableOpacity>
             </TouchableOpacity>
           )}
           />
            {Object.values(cartcategory).length >0 &&( 
           <TouchableOpacity onPress={()=>{
              dispatch(clearCart()); // remove all items from Redux
              setbill(true)
            setTimeout(()=>{
              setbill(false)
             navigation.navigate('Bill')
            },1000)
           }}>
           <Text style={{textAlign:"center"}}>Generate Bill</Text>
           </TouchableOpacity>
            )
          }
     </View>
 
   )
 }
 
 export default Cart
 
 const styles = StyleSheet.create({
     item: {
     padding: 12,
     borderBottomWidth: 1,
     borderBottomColor: '#ddd',
     display:"flex",
     alignItems:"center",
     flexDirection:"row",
     gap:10,
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