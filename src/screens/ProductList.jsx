import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { addToCart } from "../Redux/Datasplice";
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
const ProductList = () => {
    const navigation = useNavigation();
    const categories = useSelector(state => state.Productlist.data); // from store
    console.log("redux data",categories)
      const cartcategory = useSelector((state)=>state.Productlist.cartByCategory);
        console.log("cartcategory",cartcategory)
    const ProductData = categories
    //  categories.map((item)=>{
    //  console.log("Foreachdata",item)
    // })
  const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
//     const ProductData = [
//   {
//             categoryId:"1",
//             ProductList:[
//                 {
//                     ProductId:"1",
//                     ProductName:"Protein",
//                     ProductTittle:"Growth Health",
//                     Shortdiscription:"About your health",
//                     Longdiscription:"How to mantain health",
//                     Mrp:"4550",
//                    image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
//                    addedToCart:false
//                 },
//                 {
//                     ProductId:"2",
//                     ProductName:"Gainer",
//                     ProductTittle:"Growth Health",
//                     Shortdiscription:"About your health",
//                     Longdiscription:"How to mantain health",
//                     Mrp:"5550",
//                     image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
//                     addedToCart:false
//                 },
//                 {
//                     ProductId:"3",
//                     ProductName:"Peanut Butter",
//                     ProductTittle:"Growth Health",
//                     Shortdiscription:"About your health",
//                     Longdiscription:"How to mantain health",
//                     Mrp:"2550",
//                    image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
//                    addedToCart:false
//                 }
//             ]
//   },
//   {
//             categoryId:"2",
//             ProductList:[
//                 {
//                     ProductId:"1",
//                     ProductName:"Face Wash",
//                     ProductTittle:"Clean Skin",
//                     Shortdiscription:"About your skin",
//                     Longdiscription:"How to mantain skin",
//                     Mrp:"250",
//                     image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
//                     addedToCart:false
//                 },
//                 {
//                     ProductId:"2",
//                     ProductName:"Mosturizer",
//                     ProductTittle:"after wash used",
//                     Shortdiscription:"About your skin",
//                     Longdiscription:"How to mantain skin Glow",
//                     Mrp:"550",
//                     image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
//                     addedToCart:false
//                 },
//                 {
//                     ProductId:"3",
//                     ProductName:"Body Lotion",
//                     ProductTittle:"Maintain Body skin",
//                     Shortdiscription:"About your skin",
//                     Longdiscription:"How to mantain skin",
//                     Mrp:"1050",
//                     image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
//                     addedToCart:false
//                 }
//             ]
//   },
//   {
//             categoryId:"3",
//             ProductList:[
//                 {
//                     ProductId:"1",
//                     ProductName:"Noise",
//                     ProductTittle:"Good looking",
//                     Shortdiscription:"About your noise watch",
//                     Longdiscription:"How to mantain noise watch",
//                     Mrp:"4550",
//                     image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
//                     addedToCart:false
//                 },
//                 {
//                     ProductId:"2",
//                     ProductName:"Fastrack",
//                     ProductTittle:"Fastrack",
//                     Shortdiscription:"About your watch",
//                     Longdiscription:"How to mantain watch look",
//                     Mrp:"6550",
//                    image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
//                    addedToCart:false
//                 },
//                 {
//                     ProductId:"3",
//                     ProductName:"Sonota",
//                     ProductTittle:"Sonota",
//                     Shortdiscription:"About your snota watch",
//                     Longdiscription:"How to mantain sonota",
//                     Mrp:"3050",
//                     image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
//                     addedToCart:false
//                 }
//             ]
//   },
//   {
//     categoryId: "4",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Red Paint",
//         ProductTittle: "Bright Wall Color",
//         Shortdiscription: "Premium quality red paint",
//         Longdiscription: "Gives your walls a bright and lasting red finish. Easy to apply and long-lasting.",
//         Mrp: "450",
//         image:"https://media.modicare.com/ProductCategory/thumb/UCLML1_ZoomImage__261020231210001655428613.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Blue Fabric Dye",
//         ProductTittle: "Clothing Color",
//         Shortdiscription: "High quality fabric dye",
//         Longdiscription: "Perfect for cotton, linen, and wool fabrics. Rich blue tone.",
//         Mrp: "250",
//         image:"https://media.modicare.com/ProductCategory/thumb/UCLML1_ZoomImage__261020231210001655428613.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Green Spray Paint",
//         ProductTittle: "DIY Color Project",
//         Shortdiscription: "Quick dry spray paint",
//         Longdiscription: "Ideal for wood, metal, and plastic surfaces. Smooth finish.",
//         Mrp: "350",
//        image:"https://media.modicare.com/ProductCategory/thumb/UCLML1_ZoomImage__261020231210001655428613.webp",
//        addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "5",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Shampoo",
//         ProductTittle: "Hair Care",
//         Shortdiscription: "Gentle daily shampoo",
//         Longdiscription: "Cleans and nourishes hair with natural ingredients.",
//         Mrp: "300",
//         image:"https://media.modicare.com/ProductCategory/thumb/PC2000%20Fresh%20Moments%20Toothpaste_Big.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Body Wash",
//         ProductTittle: "Refreshing Bath",
//         Shortdiscription: "Aloe vera infused body wash",
//         Longdiscription: "Keeps your skin hydrated and fresh all day.",
//         Mrp: "250",
//         image:"https://media.modicare.com/ProductCategory/thumb/PC2000%20Fresh%20Moments%20Toothpaste_Big.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Face Cream",
//         ProductTittle: "Moisturizing",
//         Shortdiscription: "Daily use face cream",
//         Longdiscription: "Protects skin from dryness and improves softness.",
//         Mrp: "500",
//         image:"https://media.modicare.com/ProductCategory/thumb/PC2000%20Fresh%20Moments%20Toothpaste_Big.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "6",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Floor Cleaner",
//         ProductTittle: "Citrus Fresh",
//         Shortdiscription: "Removes stains and kills germs",
//         Longdiscription: "Suitable for all floor types, leaves a fresh lemon scent.",
//         Mrp: "200",
//         image:"https://media.modicare.com/ProductCategory/thumb/hc14_ZoomImage__06082025115720350451826.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Glass Cleaner",
//         ProductTittle: "Streak Free Shine",
//         Shortdiscription: "Cleans mirrors and glass surfaces",
//         Longdiscription: "Quick drying formula for crystal clear glass.",
//         Mrp: "150",
//         image:"https://media.modicare.com/ProductCategory/thumb/hc14_ZoomImage__06082025115720350451826.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Room Freshener",
//         ProductTittle: "Lavender Bliss",
//         Shortdiscription: "Air freshening spray",
//         Longdiscription: "Keeps your home smelling fresh for hours.",
//         Mrp: "180",
//         image:"https://media.modicare.com/ProductCategory/thumb/hc14_ZoomImage__06082025115720350451826.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "7",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Liquid Detergent",
//         ProductTittle: "Gentle Wash",
//         Shortdiscription: "Safe for all fabrics",
//         Longdiscription: "Removes tough stains while being gentle on clothes.",
//         Mrp: "350",
//         image:"https://media.modicare.com/ProductCategory/thumb/LC1018_ZoomImage__260620240837541565042047.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Fabric Softener",
//         ProductTittle: "Smooth Finish",
//         Shortdiscription: "Keeps clothes soft and fresh",
//         Longdiscription: "Adds fragrance and softness to your laundry.",
//         Mrp: "220",
//         image:"https://media.modicare.com/ProductCategory/thumb/LC1018_ZoomImage__260620240837541565042047.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Laundry Pods",
//         ProductTittle: "Easy Wash",
//         Shortdiscription: "Pre-measured pods",
//         Longdiscription: "Convenient and mess-free laundry cleaning.",
//         Mrp: "500",
//         image:"https://media.modicare.com/ProductCategory/thumb/LC1018_ZoomImage__260620240837541565042047.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "8",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Orange Juice",
//         ProductTittle: "Fresh & Healthy",
//         Shortdiscription: "100% natural juice",
//         Longdiscription: "Rich in vitamin C, perfect for breakfast.",
//         Mrp: "120",
//         image:"https://media.modicare.com/ProductCategory/thumb/FP3140_ZoomImage__04102024085436446690976.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Chips",
//         ProductTittle: "Crispy Snack",
//         Shortdiscription: "Salted potato chips",
//         Longdiscription: "Thin and crispy with perfect seasoning.",
//         Mrp: "50",
//         image:"https://media.modicare.com/ProductCategory/thumb/FP3140_ZoomImage__04102024085436446690976.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Chocolate Bar",
//         ProductTittle: "Sweet Treat",
//         Shortdiscription: "Milk chocolate with almonds",
//         Longdiscription: "Creamy chocolate with crunchy almond bites.",
//         Mrp: "80",
//         image:"https://media.modicare.com/ProductCategory/thumb/FP3140_ZoomImage__04102024085436446690976.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "9",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Fertilizer",
//         ProductTittle: "Plant Growth",
//         Shortdiscription: "Organic fertilizer for crops",
//         Longdiscription: "Improves soil quality and plant yield.",
//         Mrp: "600",
//         image:"https://media.modicare.com/ProductCategory/thumb/AG0001_ZoomImage__13032024041344541594558.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Seeds Pack",
//         ProductTittle: "Vegetable Seeds",
//         Shortdiscription: "High germination rate",
//         Longdiscription: "Contains seeds for multiple vegetables.",
//         Mrp: "150",
//         image:"https://media.modicare.com/ProductCategory/thumb/AG0001_ZoomImage__13032024041344541594558.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Pesticide Spray",
//         ProductTittle: "Pest Control",
//         Shortdiscription: "Protects plants from insects",
//         Longdiscription: "Safe for crops, kills harmful pests.",
//         Mrp: "400",
//         image:"https://media.modicare.com/ProductCategory/thumb/AG0001_ZoomImage__13032024041344541594558.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "10",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Car Shampoo",
//         ProductTittle: "Shiny Finish",
//         Shortdiscription: "Removes dirt and dust",
//         Longdiscription: "Keeps your car clean and glossy.",
//         Mrp: "350",
//         image:"https://media.modicare.com/ProductCategory/thumb/Auto-Wash_small.jpg",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Tyre Polish",
//         ProductTittle: "Black Shine",
//         Shortdiscription: "Protects tyres from cracks",
//         Longdiscription: "Adds deep black shine to tyres.",
//         Mrp: "250",
//         image:"https://media.modicare.com/ProductCategory/thumb/Auto-Wash_small.jpg",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Car Air Freshener",
//         ProductTittle: "Lemon Scent",
//         Shortdiscription: "Long-lasting fragrance",
//         Longdiscription: "Keeps your car smelling fresh.",
//         Mrp: "150",
//         image:"https://media.modicare.com/ProductCategory/thumb/Auto-Wash_small.jpg",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "11",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Sunglasses",
//         ProductTittle: "UV Protection",
//         Shortdiscription: "Stylish and protective",
//         Longdiscription: "Blocks harmful UV rays while looking cool.",
//         Mrp: "1200",
//         image:"https://media.modicare.com/ProductCategory/thumb/AP0003_ZoomImage__230120240221001769050761.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Leather Belt",
//         ProductTittle: "Premium Quality",
//         Shortdiscription: "Genuine leather belt",
//         Longdiscription: "Durable and stylish for everyday wear.",
//         Mrp: "800",
//         image:"https://media.modicare.com/ProductCategory/thumb/AP0003_ZoomImage__230120240221001769050761.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Wrist Watch",
//         ProductTittle: "Classic Design",
//         Shortdiscription: "Water resistant",
//         Longdiscription: "Elegant design with a stainless steel strap.",
//         Mrp: "3500",
//         image:"https://media.modicare.com/ProductCategory/thumb/AP0003_ZoomImage__230120240221001769050761.webp",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "12",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Gift Box",
//         ProductTittle: "Customizable",
//         Shortdiscription: "Perfect for any occasion",
//         Longdiscription: "Can be filled with chocolates, flowers, or gifts.",
//         Mrp: "500",
//         image:"https://media.modicare.com/ProductCategory/thumb/MM0008_ZoomImage__220920230241112008660805.jpg",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Wall Clock",
//         ProductTittle: "Modern Design",
//         Shortdiscription: "Silent movement",
//         Longdiscription: "Stylish wall clock with large numbers.",
//         Mrp: "700",
//         image:"https://media.modicare.com/ProductCategory/thumb/MM0008_ZoomImage__220920230241112008660805.jpg",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Photo Frame",
//         ProductTittle: "Wooden",
//         Shortdiscription: "Durable and elegant",
//         Longdiscription: "Perfect for displaying memorable pictures.",
//         Mrp: "350",
//         image:"https://media.modicare.com/ProductCategory/thumb/MM0008_ZoomImage__220920230241112008660805.jpg",
//         addedToCart:false
//       }
//     ]
//   },
//   {
//     categoryId: "13",
//     ProductList: [
//       {
//         ProductId: "1",
//         ProductName: "Perfume",
//         ProductTittle: "Floral Scent",
//         Shortdiscription: "Long-lasting fragrance",
//         Longdiscription: "Perfect for daily wear and special occasions.",
//         Mrp: "1500",
//         image:"https://media.modicare.com/ProductCategory/thumb/FG0002_ZoomImage__080220240303521256835119.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "2",
//         ProductName: "Body Mist",
//         ProductTittle: "Light & Fresh",
//         Shortdiscription: "Mild fragrance for everyday use",
//         Longdiscription: "Keeps you smelling fresh all day.",
//         Mrp: "750",
//         image:"https://media.modicare.com/ProductCategory/thumb/FG0002_ZoomImage__080220240303521256835119.webp",
//         addedToCart:false
//       },
//       {
//         ProductId: "3",
//         ProductName: "Room Diffuser",
//         ProductTittle: "Aromatic",
//         Shortdiscription: "Home fragrance",
//         Longdiscription: "Spreads a pleasant aroma in your home.",
//         Mrp: "1200",
//         image:"https://media.modicare.com/ProductCategory/thumb/FG0002_ZoomImage__080220240303521256835119.webp",
//         addedToCart:false
//       }
//     ]
//   },
// ];

  const route = useRoute();
  const { id } = route.params;
  console.log("categoryid",id)
  const selectedCategory = ProductData.find(cat=>cat.categoryId === id);
  return (
      <View style={{ flex: 1,height:"100%"}}>
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
             <View>
              <Text style={styles.name}>{item.ProductName}</Text>
              <Text style={styles.name}>{item.ProductTittle}</Text>
              <Text style={styles.name}>{item.Shortdiscription}</Text>
              <Text style={styles.name}>{item.Longdiscription}</Text>
              <Text style={styles.price}>₹{item.Mrp}</Text>
              </View>
         {/* {console.log("cartcategory[id]:",cartcategory[id]?.includes(item.ProductId))} */}
         { (cartcategory[id]?.includes(item.ProductId))?
<View style={styles.tick}></View>:null
         }
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No products found for this category.</Text>
      )}
    </View>

  )
}

export default ProductList

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