import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../Redux/Datasplice";
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import Indicator from '../components/Indicator'
import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [addcart, setAddcart] = useState(false)
  const { product, id } = route.params;
  const cartcategory = useSelector((state) => state.Productlist.cartByCategory);
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <StatusBar
        backgroundColor="orange"
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      {/* <View style={{ backgroundColor: "orange", paddingTop: 25, paddingBottom: 5, paddingHorizontal: 10, display: "flex", flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Text style={{ fontSize: 14, fontWeight: "500", marginTop: 20 }}>Britannia ProductDetails</Text>
        <View>
        </View>
        {addcart === true ? <Text style={{ textAlign: "center" }}>Added to cart</Text> : null}
        </View> */}
      <View style={{ backgroundColor: "orange", flexDirection: "row", paddingTop: 50, justifyContent: "space-between", paddingHorizontal: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>⬅ Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>ProductDetails</Text>
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

      <View style={{
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 18,
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
            {(cartcategory[id]?.includes(product.ProductId)) ? "Added To Cart" : "Add To Cart"}</Text>
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
    textAlign: "right"
  }
})