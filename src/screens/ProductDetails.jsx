import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../Redux/Datasplice";
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import Indicator from '../components/Indicator'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
import { Colors } from './Colors'
import { ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER: 'ca-app-pub-1610234648570470/1143352083';
const ProductDetails = () => {
  const insets = useSafeAreaInsets();
  const [Fetchingdata, setFetchingdata] = useState(true)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [addcart, setAddcart] = useState(false)
  const { product, id } = route.params;
  const cartcategory = useSelector((state) => state.Productlist.cartByCategory);
  const [reloadKey, setReloadKey] = useState(0);
  const { width } = Dimensions.get("window");
  // when app comes to foreground, remount banner
  useForeground(() => {
    setReloadKey((prev) => prev + 1);
  });
  useEffect(() => {
    const Timer = setTimeout(() => {
      setFetchingdata(false)
    }, 2000);
    return () => clearTimeout(Timer); // cleanup on unmount
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <StatusBar
        backgroundColor="orange"
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      <View style={{ backgroundColor: "orange", flexDirection: "row", paddingTop: 40, justifyContent: "space-between", paddingHorizontal: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 14, fontWeight: "600" ,color:"white"}}>⬅ Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "600",color:"white" }}>ProductDetails</Text>
        <Indicator />
      </View>
      <View>
        {addcart === true ? <Text style={{ textAlign: "center" }}>Added to cart</Text> : null}
      </View>
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginVertical: 10, marginHorizontal: 10, }}>
        <Image source={{ uri: product.image }} resizeMode='contain' style={{ height: 300, width: "90%" }} />
        <View >
          <Text style={styles.name}>{product.ProductName}</Text>
          <Text style={styles.name}>{product.ProductTittle}</Text>
          <Text style={styles.name}>{product.Shortdiscription}</Text>
          <Text style={styles.name}>{product.Longdiscription}</Text>
          <Text style={styles.price}>₹{product.Mrp}</Text>
        </View>
      </View>
      <View style={{ width: width * 0.9, height: 400, alignItems: "center",margin:"auto"}}>
        <BannerAd
          key={reloadKey} // force remount when key changes
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdFailedToLoad={(error) => {
            console.log("Banner failed to load: ", error);
          }}
        />
      </View>
      <View style={{
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 10+insets.bottom,
      }}>
        <TouchableOpacity disabled={cartcategory[id]?.includes(product.ProductId)}
          style={{ backgroundColor: Colors.Appcolor, paddingVertical: 8, borderRadius: 8, }}
          onPress={() => {
            dispatch(selectProduct({ categoryId: id, productId: product.ProductId }))
            setAddcart(true)
            setTimeout(() => {
              setAddcart(false)
            }, 1000)
          }} >
          <Text style={{ textAlign: "center", color: "white", fontSize: 14, fontWeight: "500" }}>
            {Fetchingdata ? (
              <View style={styles.loaderContainer}>
              <Text style={styles.text}>Fetching data...</Text>
                 <ActivityIndicator size="small" color="white" />
              </View>
            ) : (
              (cartcategory[id]?.includes(product.ProductId)) ? "Added To Cart" : "Add To Cart")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  name: {
    fontSize: 16
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  loaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap:5
  },
  text: {
    textAlign: "center", color: "white", fontSize: 14, fontWeight: "500"
  },
})