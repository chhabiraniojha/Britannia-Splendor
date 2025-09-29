// import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import { StyleSheet, View, Text, Platform, Modal, StatusBar, Image, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Bill from './src/screens/Bill';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProductList from './src/screens/ProductList';
import ProductDetails from './src/screens/ProductDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/Redux/Store";
import Login from './src/screens/Login'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Logout, RemoveUser, setafterLoginUser, setIsAuthenticate, setProductNeed, setStartTimer, setTimeDuration, Setuser } from './src/Redux/loginSlice';
import SplashScreen from './src/screens/SplashScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAppOpenAd } from './src/components/AppOpenAdd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
// import * as Network from "expo-network";
import { ImageBackground } from 'react-native';
import { Colors } from './src/screens/Colors';
import { scale } from 'react-native-size-matters';
export const scaleInt = (size: number) => Math.round(scale(size));
// function HomeDrawer() {
//   const Drawer = createDrawerNavigator()
//     const termscondition = ()=>{
//       const url = 'https://digidivine.online/mypay/terms-conditions'
//       Linking.openURL(url)
//     }
//   const privacypolicy = ()=>{
//       const url = 'https://digidivine.online/mypay/privacy-policy'
//       Linking.openURL(url)
//     }
//   const aboutus = ()=>{
//       const url = 'https://digidivine.online/mypay/about-us'
//       Linking.openURL(url)
//     }
//   const contactsus = ()=>{
//       const url = 'https://digidivine.online/mypay/contact-us'
//       Linking.openURL(url)
//     }
//   return (
//     <Drawer.Navigator initialRouteName='HomeDrawerRoot' 
//      drawerContent={() => {
//           return (
//             <DrawerContentScrollView
//               showsHorizontalScrollIndicator={false}
//               showsVerticalScrollIndicator={false}
//               contentContainerStyle={{
//                 padding: 10}}>
//             <View style={[styles.containerPr,{backgroundColor:currentTheme==="dark"?Colors.designblack:"#fff"}]}>
//             <View>
//             <TouchableOpacity
//             // onPress={() => navigation.navigate("/Sidebarscreen")}
//             activeOpacity={0.8}                   
//             style={[styles.flexCon2,{marginTop:scales(2),paddingTop:scales(2)}]}>
//                     <View style={styles.img2}>
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                   source={require("../../assets/images/UserProfiles.png")}
//                   style={styles.sidebr}
//                         /> */}
//                     </View>
//                     <View>
//                       <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>hellow</Text>
//                       <Text style={[styles.semiText,{color:currentTheme==="dark"?Colors.white:"black"}]}>hey</Text>
//                     </View>
//                      </View>
//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                 </View>
//               </View>
//                <View style={[styles.containerPr,{backgroundColor:currentTheme==="dark"?Colors.designblack:"#fff"}]}>
//                 <View>
//                   <Text style={[styles.heading,{color:currentTheme==="dark"?Colors.white:"black"}]}>Settings</Text>
//                 </View>
//                 <View>
//                    <TouchableOpacity
//                   //  onPress={()=>router.push('/Languagess')}
//                   //  onPress={()=>navigation.navigate('/smsrecipt')}
//                    style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]}>
//                     <View style={styles.img2}>
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar1.png")}
//                         style={styles.img1}
//                         /> */}
//                     </View>
//                     <View>
//                       <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>Language</Text>
//                       <Text style={[styles.semiText,{color:currentTheme==="dark"?Colors.white:"black"}]}>
//                       Select language
//                       </Text>
//                     </View>
//                      </View>
//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                    <TouchableOpacity
//                    style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar2.png")}
//                         style={styles.img3}
//                       /> */}
//                       </View> 
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>{t('notification')}</Text>
//                         <Text style={[styles.semiText,{color:currentTheme==="dark"?Colors.white:"black"}]}>
//                        ManageNotification
//                         </Text>
//                       </View>
//                     </View>
//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                   <TouchableOpacity 
//                   //  onPress={() => navigation.navigate("/Sidebarscreen/theme")}
//                   style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar3.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>{t('theme')}</Text>
//                         <Text style={[styles.semiText,{color:currentTheme==="dark"?Colors.white:"black"}]}>
//                         Choose thgeme
//                         </Text>
//                       </View>
//                     </View>
//                     <View>
//                       {/* <ChevronRight
//                         // strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                   <TouchableOpacity 
//                   // onPress={() => navigation.navigate("/Sidebarscreen/changepassword")}
//                   style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black",borderBottomWidth:scales(0)}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar4.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View> 
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>duyweu</Text>
//                         <Text style={[styles.semiText,{color:currentTheme==="dark"?Colors.white:"black"}]}>
//                           Paassword
//                         </Text>
//                       </View>
//                     </View>

//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               {/* refer box */}
//               <View style={[styles.containerPr,{backgroundColor:currentTheme==="dark"?Colors.designblack:"#fff"}]}>
//                 <View>
//                    <TouchableOpacity  
//                   //  onPress={() => navigation.navigate("/Sidebarscreen/refer")}
//                   style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar5.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>{t('refer')}</Text>
//                       </View>
//                     </View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                   </TouchableOpacity> 
//                    <TouchableOpacity 
//                    onPress={()=>setVisible2(true)}
//                   style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar6.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>review</Text>
//                       </View>
//                     </View>

//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                    <TouchableOpacity  
//                   //  onPress={()=>navigation.navigate('/discount')}
//                     style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black",borderBottomWidth:scales(0)}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar7.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>jjj</Text>
//                       </View>
//                     </View>

//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                 </View>
//               </View>
//               {/* other box */}
//               <View style={[styles.containerPr,{backgroundColor:currentTheme==="dark"?Colors.designblack:"#fff"}]}>
//                 <View>
//                     <TouchableOpacity  style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]} 
//                   //  onPress={()=>navigation.navigate('/policies')}
//                    >
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/supportpolicies.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>Support</Text>
//                       </View>
//                     </View>

//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                    <TouchableOpacity  style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black"}]} 
//                   //  onPress={()=>router.push('/aboutmypay/contactus')}
//                    >
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebar8.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>Contactus</Text>
//                       </View>
//                     </View>

//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
                 
//                    <TouchableOpacity 
//                   //  onPress={()=>{navigation.navigate('/aboutmypay')}}  
//                    style={[styles.flexCon,{borderBottomColor:currentTheme ==="dark"?Colors.white:"black",borderBottomWidth:scales(0)}]}>
//                     <View
//                       style={styles.img2}
//                     >
//                       <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/sidebar10.png")}
//                         style={styles.img4}
//                         /> */}
//                         </View>
//                       <View>
//                         <Text style={[styles.xltext,{color:currentTheme==="dark"?Colors.white:"black"}]}>About</Text>
//                       </View>
//                     </View>

//                     <View>
//                       {/* <ChevronRight
//                         strokeWidth={2.5}
//                       size={iconSize}
//                         color={colorarrow}
//                       /> */}
//                     </View>
//                   </TouchableOpacity> 
//                 </View>
//               </View>
//               {/* log out */}
//               <View style={[styles.containerPr,{backgroundColor:currentTheme==="dark"?Colors.designblack:"#fff"}]}>
//                 <View>
//                   <TouchableOpacity
//                   onPress={() => setVisible(true)}
//                     style={styles.headers}
//                   >
//                     <View
//                       style={styles.img2}
//                     >
//                     <View style={styles.imgContainer}>
//                       {/* <Image
//                         source={require("../../assets/images/Sidebar/Sidebarlogout.png")}
//                         style={styles.img4}
//                       /> */}
//                       </View>
//                       <View>
//                         <Text
//                           style={styles.img5}
//                         >
//                         Logout
//                         </Text>
//                       </View>
//                     </View>
//                       {/* <ChevronRight strokeWidth={2.5}size={iconSize} color="red" /> */}
//                   </TouchableOpacity>
//                 </View>
//               </View>
//              </DrawerContentScrollView>
//           );
//         }}
//     >
//       <Drawer.Screen name='HomeDrawerRoot' component={Home} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   )
// }
function MainTabs() {
  const insets = useSafeAreaInsets();
  const cartcategory = useSelector((state) => state.Productlist?.cartByCategory);
  const selectedCount = Object.values(cartcategory).flat().length // flatten all arrays;
  const dispatch = useDispatch();
  //  const logOutMain = ()=>{
  //       dispatch(setIsAuthenticate(false))
  //       dispatch(Logout())
  //   }
  const Tab = createBottomTabNavigator();
  const getTabBarIcon = (routeName, focused, color, size) => {
    let iconName;
    if (routeName === "Home") {
      iconName = focused ? 'home' : 'home-outline';
    } else if (routeName === "Cart") {
      iconName = focused ? 'cart' : "cart";
    } else if (routeName === "Logout") {
      iconName = focused ? "log-out-outline" : "log-out-outline";
      // logOutMain();
    }

    // ✅ Custom Cart icon with badge
    if (routeName === "Cart") {
      return (
        <View style={{ position: "relative" }}>
          <Icon name={iconName} size={size} color={color} />
          {selectedCount > 0 && (
            <View
              style={{
                position: "absolute",
                top: -6,
                right: -10,
                minWidth: 18,
                height: 18,
                borderRadius: 9,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: selectedCount > 99 ? 4 : 0, // extra space for 3+ digits
              }}
            >
              <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
                {selectedCount > 99 ? "99+" : selectedCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
    return <Icon name={iconName} size={size} color={color} />
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size, selectedCount),
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          height: 50 + (Platform.OS === "android" ? insets.bottom : 0), // ✅ auto adjust karega
          // paddingBottom: Platform.OS === "android" ? insets.bottom : 5,
        },
      })
      }
    >
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name='Logout' component={Bill} options={{ headerShown: false }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault(); // stop navigation
            dispatch(setIsAuthenticate(false));
            dispatch(Logout());
          },
        })}
      />
    </Tab.Navigator>
  );
}
function RootNavigation() {
  const Stack = createStackNavigator();
  const token = useSelector((state) => state.login?.loginuser);
  const IsAuthenticate = useSelector((state) => state.login?.IsAuthenticate);
  const [isConnected, setIsConnected] = useState(true); // Initial connection state
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const checkTokenValidation = async () => {
    console.log("Token", token)
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
        //  dispatch(Setuser(response.data))
        const startTimer = response.data.userDetails?.timerStart
        const timeDuration = response.data.userDetails?.timerDuration
        const productNeed = response.data.userDetails?.productNeed
        dispatch(setStartTimer(startTimer))
        dispatch(setTimeDuration(timeDuration))
        dispatch(setProductNeed(productNeed))
      } else {
        dispatch(setIsAuthenticate(false))
        dispatch(RemoveUser())
      }
    } catch (error) {
      dispatch(setIsAuthenticate(false))
      dispatch(RemoveUser())
    }
  };
  const checkNetworkStatus = async () => {
    try {
      // const networkState = await Network.getNetworkStateAsync();
      // const connected = networkState.isConnected ?? false; // fallback for TS
      const connected = true; // fallback for TS
      setIsConnected(connected);
      setShowModal(!connected)
    } catch (err) {
      setIsConnected(false);
      setShowModal(true);
    }
  };
  useEffect(() => {
    // Initial check
    checkNetworkStatus();

    // Poll every 5 seconds
    const interval = setInterval(() => {
      checkNetworkStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []); // run only once on mount// Depend on isConnected to prevent redundant alerts
  useEffect(() => {
    checkTokenValidation()
  }, [])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          {IsAuthenticate === null ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : IsAuthenticate ? (
            <>
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Modal visible={showModal} style={styles.container}>
        <StatusBar
          backgroundColor="orange"
          barStyle="light-content"
          translucent={false}
          hidden={false}
        />
        <ImageBackground source={require('./assets/Noconnection.png')} resizeMode="contain" style={styles.img} />
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={require("./assets/nosignal.png")} // Replace with your PNG
              style={styles.alertImage}
            />
            <Text style={styles.alertText}>No Internet Connection</Text>
            <Text style={styles.alertSubText}>
              Please check your connection and try again.
            </Text>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  )
}

export default function App() {
  useAppOpenAd();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent2: {
//     // margin: 20,
//     padding: scales(20),
//     backgroundColor: 'white',
//     borderRadius: scales(10),
//   },
//   title: {
//     fontSize: scales(18),
//     fontWeight: 'bold',
//     marginBottom: scales(20),
//     textAlign: 'center',
//   },
//   submitButton: {
//     marginTop:scales(20),
//     backgroundColor: '#217306',
//     borderRadius: scales(5),
//     paddingHorizontal:scales(10),
//     alignItems: 'center',
//     paddingVertical:scales(5
// )  },
//   cancelButton2: {
//     marginTop:scales(20),
//     paddingHorizontal:scales(10),
//     paddingVertical:scales(5),
//     backgroundColor: '#d9534f',
//     borderRadius: scales(5),
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: scales(16),
//   },
//   containerMain: {
//     height: scales(80),
//     padding: scales(10),
//     width: "100%",
//     backgroundColor: "#fff",
//     elevation: scales(0.1),
//     borderRadius: scales(8),
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: scales(10),
//     alignItems: "center",
//   },
//   img5:{
//     fontSize: scales(16),
//     fontWeight: "regular",
//     color: "red",
//   },
//   headers:{
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: scales(2),
//     paddingBottom: scales(2),
//     marginTop: scales(10),
//     marginBottom: scales(10),
//   },
//   img1:{
//     height: scales(28),
//      width: scales(25),
//      objectFit: "contain" 
//   },
//   img2:{
//     alignItems: "center",
//     gap: scales(20),
//     flexDirection: "row",
//   },
//   img3:{
//     height: scales(28),
//      width: scales(25),
//      objectFit: "contain" 
//   },
//   imgContainer: {
//     width: scales(40),  // Outer circle width
//     height: scales(40), // Outer circle height
//     borderRadius: scales(20), // Half of width/height for circle
//     backgroundColor: "#FFFFFF", // Optional, for contrast
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden", // Ensures image stays inside circle
//   }, 
//   img4:{
//     height: scales(30),
//      width: scales(30),
//       objectFit: "contain"
//   },
//   sidebr:{
//     height: scales(50),
//     width: scales(50),
//     borderRadius: scales(50),
//     objectFit: "contain",
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: scales(16),
//   },
//   containerPr: {
//     backgroundColor: "#fff",
//     elevation: scales(0.1),
//     borderRadius: scales(8),
//     marginBottom: scales(10),
//     padding: scales(10),
//     width: "100%",
//     justifyContent: "space-between",
//     gap: scales(20),
//   },
//   flexCon: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: scales(10),
//     paddingBottom: scales(10),
//     marginTop: scales(10),
//     borderBottomColor: "#eee",
//     borderBottomWidth: scales(0.5),
//     marginBottom: scales(10),
//   },
//   flexCon2: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: scales(10),
//     paddingBottom: scales(10),
//     marginTop: scales(10),
//     // marginBottom: scales(10),
//   },
//   xltext: {
//     fontSize: scales(16),
//     fontWeight: "regular",
//   },
//   semiText: {
//     fontSize: scales(12),
//     overflow: "hidden",
//     width: "100%",
//     textTransform: "capitalize",
//     fontWeight: "regular",
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//   },
//   modalContent: {
//     width: "90%",
//     paddingHorizontal: scales(10),
//     borderRadius: scales(10),
//     backgroundColor: "#FFFFFF",
//     paddingVertical: scales(10),
//   },
//   modalTitle: {
//     fontSize: scales(18),
//     fontWeight: "600",
//     alignItems: "center",
//     textAlign:"center",
//     paddingVertical: scales(10),
//     color: "black",
//   },
//   modalMessage: {
//     alignItems: "center",
//     textAlign:"center",
//     color: "gray",
//   },
//   modalButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginTop: scales(20),
//     alignItems: "center",
//   },
//   cancelButton: {
//     borderRadius: scales(6),
//     paddingHorizontal: scales(35),
//     paddingVertical: scales(6),
//     borderColor: "#217306",
//     borderWidth: scales(0.5),
//   },
//   cancelButtonText: {
//     color: "#217306",
//   },
//   continueButton: {
//     borderRadius: scales(6),
//     paddingHorizontal: scales(30),
//     paddingVertical: scales(6),
//     borderColor: "#217306",
//     borderWidth: scales(0.5),
//     backgroundColor: "#217306",
//   },
//   continueButtonText: {
//     color: "#FFFF",
//   },
// });
