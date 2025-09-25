import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { unselectProduct, clearCart } from '../Redux/Datasplice';
// import {RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { StatusBar } from 'react-native';
import Indicator from '../components/Indicator';
import { Colors } from './Colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'
import { setIsAuthenticate, setProductNeed, setStartTimer, setTimeDuration } from '../Redux/loginSlice';
// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-1610234648570470~5461500573';
// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   keywords: ['fashion', 'clothing'],
// });
const Cart = () => {
  const navigation = useNavigation();
  const [bill, setbill] = useState(false)
  const alldata = useSelector(state => state.Productlist.data); // from store
  const cartcategory = useSelector((state) => state.Productlist.cartByCategory);
  const selectedCount = Object.values(cartcategory).flat().length // flatten all arrays;
  const [cartDetails, setCartDetails] = useState([])
  const token = useSelector((state) => state.login?.loginuser);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const timerStart = useSelector((state) => state.login?.startTimer);
  const timerDuration = useSelector((state) => state.login?.timeDuration);
  // total products count
  const totalProducts = alldata?.reduce((acc, cat) => acc + cat.ProductList.length, 0);

  // selected products count
  const checkTokenValidation = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/user/token-check`,
        {
          headers: {
            authorization: token,
            type: "verify-token",
          },
        }
      );
      if (response.data.statusCode === 1) {
        console.log('response on rootlayout', response.data)
        dispatch(setIsAuthenticate(true))
        const startTimer = response.data.userDetails?.timerStart
        const timeDuration = response.data.userDetails?.timerDuration
        const productNeed = response.data.userDetails?.productNeed
        dispatch(setStartTimer(startTimer))
        dispatch(setTimeDuration(timeDuration))
        dispatch(setProductNeed(productNeed))
        //  dispatch(Setuser(response.data))
      } else {
        dispatch(setIsAuthenticate(false))
        dispatch(RemoveUser())
      }
    } catch (error) {
      dispatch(setIsAuthenticate(false))
      dispatch(RemoveUser())
    }
  };
  const geneRateBill = async () => {
    const startTime = new Date(timerStart).getTime();
    const endTime = startTime + timerDuration * 1000;
    if (Date.now() <= endTime) {
      Alert.alert("Please wait for timer stop")
      return
    }
    try {
      const response = await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/bill`,
        {
          "selectedProduct": selectedCount
        },
        {
          headers: {
            'Authorization': token
          }
        }
      )
      if (response.data.statusCode === 1) {
        console.log(response.data)
        // console.log("bill generate")
        await checkTokenValidation()
        // const startTimer = response.data.updatedTimerStart
        // const timeDuration = response.data.updatedTimerDuration
        // const prodcutNeed = response.data.updatedtProductNeed
        // console.log("Cart",startTimer,timeDuration,prodcutNeed)
        // dispatch(setStartTimer(startTimer))
        // dispatch(setTimeDuration(timeDuration))
        setbill(true)
        setTimeout(() => {
          setbill(false);
          // navigation.navigate("Bill");
        }, 1000);
        dispatch(clearCart()); // remove all items from Redux
      } else if (response.data.statusCode === 0) {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.response?.data || error.message || error);
    }
  }

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
    <SafeAreaView style={{ flex: 1, height: "100%", marginBottom: 10 }}>
      <StatusBar
        backgroundColor="orange"
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      <View style={{ backgroundColor: "orange", flexDirection: "row", paddingTop: 50, justifyContent: "space-between", paddingHorizontal: 10, paddingBottom: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>SelectedProductList</Text>
        <Indicator />
        <View style={{ position: "relative", paddingRight: 15 }}>
          {/* Cart Icon */}
          <Icon name="cart" size={28} color="gray" />
          {selectedCount > 0 && (
            <Text style={{
              position: "absolute",
              top: -14,
              right: 8,
              fontSize: 12,
              marginTop: 10,
              fontWeight: "600",
              color: "white",
              backgroundColor: "red",
              borderRadius: 20,
              paddingHorizontal: 5,
              minWidth: 20,
              height: 20,
              textAlign: "center",
              textAlignVertical: "center",
              overflow: "hidden",
              alignSelf: "flex-start",
            }}>
              {selectedCount}
            </Text>
          )}
        </View>
      </View>
      {bill === true ? <Text style={{ textAlign: "center" }}>Bill Generated Successfully</Text> : null}
      {selectedCount > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartDetails}
          keyExtractor={item => `${item.categoryId}-${item.ProductId}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.ProductName}</Text>
                <Text style={styles.name}>{item.ProductTittle}</Text>
                <Text style={styles.name}>{item.Shortdiscription}</Text>
                <Text style={styles.name}>{item.Longdiscription}</Text>
                <Text style={styles.price}>₹{item.Mrp}</Text>
              </View>
              <TouchableOpacity onPress={() => {
                dispatch(unselectProduct({ categoryId: item.categoryId, productId: item.ProductId }))
              }}>
                <Text>Remove item</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>No Product in the cart</Text>
        </View>
      )}
      {Object.values(cartcategory).length > 0 && (
        <TouchableOpacity
          onPress={geneRateBill}
          style={{ margin: "auto", alignItems: "center", justifyContent: "center", backgroundColor: Colors.Appcolor, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 8, width: "94%" }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Generate Bill</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>

  )
}

export default Cart

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  textContainer: {
    flex: 1,
    overflow: "hidden"
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