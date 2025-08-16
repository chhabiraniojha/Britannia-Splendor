import { StyleSheet, Text, View ,} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, unselectProduct } from "../Redux/Datasplice";
import { Alert } from 'react-native'

const ProductDetails = () => {
  const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const [addcart,setAddcart] = useState(false)
    const {product,id} = route.params;
    console.log("productdetails",id,product.ProductId)
    const cartcategory = useSelector((state)=>state.Productlist.cartByCategory);
    console.log("cartcategory",cartcategory)
    const [Add,setAdd] = useState(true)
  return (
    <View>
         <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"orange",paddingVertical:6,paddingHorizontal:10,display:"flex",flexDirection:"row",alignItems:"center",gap:15}}>
        <Text style={{fontSize:14,fontWeight:"500"}}>⬅ Back</Text>
         <Text style={{fontSize:14,fontWeight:"500"}}>Britannia ProductDetails</Text>
       </TouchableOpacity>
       <View>
       {addcart === true?<Text style={{textAlign:"center"}}>Added to cart</Text>:null}
       </View>
       <View style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10}}>
        <Image source={{uri:product.image}} resizeMode='contain' style={{height:300,width:"90%"}}/>
          <View>
                      <Text style={styles.name}>{product.ProductName}</Text>
                      <Text style={styles.name}>{product.ProductTittle}</Text>
                      <Text style={styles.name}>{product.Shortdiscription}</Text>
                      <Text style={styles.name}>{product.Longdiscription}</Text>
                      <Text style={styles.price}>₹{product.Mrp}</Text>
                      </View>
       </View>
       <TouchableOpacity disabled={cartcategory[id]?.includes(product.ProductId)}
        style={{backgroundColor:"grey",paddingHorizontal:10,paddingVertical:8,borderRadius:8}} 
        onPress={()=>{
          dispatch(selectProduct({categoryId:id,productId:product.ProductId}))
          setAddcart(true)
          setTimeout(()=>{
            setAddcart(false)
          },1000)
        }} >
           {(cartcategory[id]?.includes(product.ProductId))?
        <Text style={{textAlign:"right"}}>Added To Cart</Text> :<Text style={{textAlign:"right"}}>Add To Cart</Text>
        }
       </TouchableOpacity>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
     name: {
    fontSize: 16
  },
    price: {
    fontSize: 14,
    color: 'green'
  },
})