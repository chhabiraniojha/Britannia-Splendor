import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { unselectProduct,clearCart } from '../Redux/Datasplice';
import {RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { StatusBar } from 'react-native';
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-1610234648570470~5461500573';
const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});
const Cart = () => {
   const navigation = useNavigation();
   const [bill,setbill] = useState(false)
     const alldata = useSelector(state => state.Productlist.data); // from store
     console.log("redux data",alldata)
       const cartcategory = useSelector((state)=>state.Productlist.cartByCategory);
         console.log("cartcategory",cartcategory)
         const [cartDetails,setCartDetails] = useState([])
   const dispatch = useDispatch();
     const [refresh, setRefresh] = useState(false);
         const [loaded, setLoaded] = useState(false);
    // total products count
  const totalProducts = alldata?.reduce((acc, cat) => acc + cat.ProductList.length, 0);

  // selected products count
  const selectedCount = Object.values(cartcategory).flat().length // flatten all arrays;
   
  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      }
    );
  //    const unsubscribeClosed = rewarded.addAdEventListener(
  //   RewardedAdEventType.CLOSED,
  //   console.log('Rewardedadd',RewardedAdEventType),
  //   () => {
  //     console.log("Ad closed. Loading new ad...");
  //     setLoaded(false);   // ad close hone ke baad hi reset
  //     rewarded.load();    // yahi se naya ad load hoga
  //   }
  // );
    // Pehle load karna
    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      // unsubscribeClosed()
    };
  }, []);

  const showAd = () => {
    if (loaded) {
      rewarded.show();
      setLoaded(false); // dubara load karne ke liye reset
      rewarded.load();
    } else {
      console.log("Ad abhi load nahi hua");
    }
  };
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
    // Final deduplication: only allow unique categoryId + ProductId combination
  const uniqueDetails = details.filter(
    (item, index, self) =>
      index === self.findIndex(
        p => p.categoryId === item.categoryId && p.ProductId === item.ProductId
      )
  ); 
  setCartDetails(uniqueDetails);
}, [cartcategory, alldata]); 
   return (
       <View style={{ flex: 1,height:"100%",marginBottom:10}}>
          <StatusBar
                  backgroundColor="orange"
                  barStyle="light-content"
                  translucent={false}
                  hidden={false}
                />
           <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"orange",paddingVertical:20,paddingHorizontal:10,display:"flex",flexDirection:"row",alignItems:"center",gap:15}}>
             <Text style={{fontSize:14,fontWeight:"500",marginTop:10}}>⬅ Back</Text>
             <Text style={{fontSize:14,fontWeight:"500",marginTop:10}}>Britannia ProductList</Text>
             </TouchableOpacity>
              {bill === true?<Text style={{textAlign:"center"}}>Bill Generated Successfully</Text>:null}
         <FlatList
         showsVerticalScrollIndicator={false}
           data={cartDetails}
  keyExtractor={item => `${item.categoryId}-${item.ProductId}`}
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
          {Object.values(cartcategory).length > 0 && (
  <TouchableOpacity
    onPress={() => {
      if (totalProducts > 0 && selectedCount === totalProducts) {
  Alert.alert(
    "All Products Selected",
    "This service is for our premium member!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => showAd(),
      },
    ],
    { cancelable: true }
  );
        dispatch(clearCart()); // remove all items from Redux
        return; // ⬅️ ye important hai, niche ka code ab execute nahi hoga
      }
      // agar condition false hai tabhi ye chalega
      dispatch(clearCart()); // remove all items from Redux
      setbill(true);
      setTimeout(() => {
        setbill(false);
        navigation.navigate("Bill");
      }, 1000);
    }}
    style={{ margin: "auto", alignItems: "center", justifyContent: "center" }}
  >
    <Text style={{ textAlign: "center" }}>Generate Bill</Text>
  </TouchableOpacity>
)}
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