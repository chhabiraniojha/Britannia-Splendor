// import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Modal,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Home from "./src/screens/Home";
import Cart from "./src/screens/Cart";
import Bill from "./src/screens/Bill";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import ProductList from "./src/screens/ProductList";
import ProductDetails from "./src/screens/ProductDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/Redux/Store";
import Login from "./src/screens/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Logout,
  RemoveUser,
  setIsAuthenticate,
  setProductNeed,
  setStartTimer,
  setTimeDuration,
} from "./src/Redux/loginSlice";
import SplashScreen from "./src/screens/SplashScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAppOpenAd } from "./src/components/AppOpenAdd";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Colors } from "./src/screens/Colors";
import { scale } from "react-native-size-matters";
import Indicator from "./src/components/Indicator";
import MyWebView from "./src/screens/WebView";
export const scales = (size) => Math.round(scale(size));
import * as Network from 'expo-network';
function HomeDrawer() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const termscondition = async() => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/geturl`,{
        params:{name:"termsandconditions"}
      });
      console.log("data",response.data)
      if(response.data.statusCode === 1){
        const url = response.data.urlData.url;
        navigation.navigate('MyWebView',{url:url})
      }
    } catch (error) {
      console.log(error)
    }
  };
  const privacypolicy = async() => {
      try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/geturl`,{
        params:{name:"privacypolicy"}
      });
      if(response.data.statusCode === 1){
        const url = response.data.urlData.url;
        navigation.navigate('MyWebView',{url:url})
      }
    } catch (error) {
      console.log(error)
    }
  };
  const aboutus = async() => {
     try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/geturl`,{
        params:{name:"aboutus"}
      });
      if(response.data.statusCode === 1){
        const url = response.data.urlData.url;
        navigation.navigate('MyWebView',{url:url})
      }
    } catch (error) {
      console.log(error)
    }
  };
  const contactsus = async() => {
     try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/geturl`,{
        params:{name:"contactus"}
      });
      if(response.data.statusCode === 1){
        const url = response.data.urlData.url;
        navigation.navigate('MyWebView',{url:url})
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawerRoot"
      drawerContent={() => {
        return (
          <DrawerContentScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 10,
              backgroundColor: Colors.NewAppColor,
              height: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 8,
                marginBottom: 5,
              }}
            >
              <View
                style={[
                  styles.containerPr,
                  { backgroundColor: Colors.NewAppColor },
                ]}
              >
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.flexCon2,
                      { marginTop: scales(2), paddingTop: scales(2) },
                    ]}
                  >
                    <View style={styles.img2}>
                      <View style={styles.imgContainer}>
                        <MaterialIcons name="person" size={24} color="black" />
                      </View>
                      <View>
                        <Text style={[styles.xltext, { color: "white" }]}>
                          Profile
                        </Text>
                      </View>
                      <View>
                        <Indicator />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.containerPr, { backgroundColor: "#fff" }]}>
              <Text style={[styles.heading, { color: "black" }]}>
                Preference
              </Text>
              <View>
                <TouchableOpacity
                  style={[styles.flexCon, { borderBottomColor: "gray" }]}
                >
                  <View
                    style={[
                      styles.containerPr,
                      { backgroundColor: Colors.NewAppColor },
                    ]}
                  >
                    <View>
                      <TouchableOpacity
                  onPress={() => privacypolicy()}
                        activeOpacity={0.8}
                        style={[
                          styles.flexCon2,
                          { marginTop: scales(2), paddingTop: scales(2) },
                        ]}
                      >
                        <View style={styles.img2}>
                          <View style={styles.imgContainer}>
                            <MaterialIcons
                              name="policy"
                              size={24}
                              color="black"
                            />
                          </View>
                          <View>
                            <Text style={[styles.xltext, { color: "white" }]}>
                              Privacy Policy
                            </Text>
                          </View>
                        </View>
                        <View>
                          <MaterialIcons
                            name="chevron-right"
                            size={30}
                            color="white"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.flexCon, { borderBottomColor: "gray" }]}
                >
                  <View
                    style={[
                      styles.containerPr,
                      { backgroundColor: Colors.NewAppColor },
                    ]}
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => termscondition()}
                        activeOpacity={0.8}
                        style={[
                          styles.flexCon2,
                          { marginTop: scales(2), paddingTop: scales(2) },
                        ]}
                      >
                        <View style={styles.img2}>
                          <View style={styles.imgContainer}>
                            <MaterialIcons
                              name="description"
                              size={24}
                              color="black"
                            />
                          </View>
                          <View>
                            <Text style={[styles.xltext, { color: "white" }]}>
                              Terms & Conditions
                            </Text>
                          </View>
                        </View>
                        <View>
                          <MaterialIcons
                            name="chevron-right"
                            size={30}
                            color="white"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.flexCon, { borderBottomColor: "gray" }]}
                >
                  <View
                    style={[
                      styles.containerPr,
                      { backgroundColor: Colors.NewAppColor },
                    ]}
                  >
                    <View>
                      <TouchableOpacity
                  onPress={() => contactsus()}
                        activeOpacity={0.8}
                        style={[
                          styles.flexCon2,
                          { marginTop: scales(2), paddingTop: scales(2) },
                        ]}
                      >
                        <View style={styles.img2}>
                          <View style={styles.imgContainer}>
                            <MaterialIcons
                              name="contact-support"
                              size={24}
                              color="black"
                            />
                          </View>
                          <View>
                            <Text style={[styles.xltext, { color: "white" }]}>
                              Contact Us
                            </Text>
                          </View>
                        </View>
                        <View>
                          <MaterialIcons
                            name="chevron-right"
                            size={30}
                            color="white"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.flexCon, { borderBottomColor: "gray" }]}
                >
                  <View
                    style={[
                      styles.containerPr,
                      { backgroundColor: Colors.NewAppColor },
                    ]}
                  >
                    <View>
                      <TouchableOpacity
                      onPress={() => aboutus()}
                        activeOpacity={0.8}
                        style={[
                          styles.flexCon2,
                          { marginTop: scales(2), paddingTop: scales(2) },
                        ]}
                      >
                        <View style={styles.img2}>
                          <View style={styles.imgContainer}>
                            <MaterialIcons
                              name="info"
                              size={24}
                              color="black"
                            />
                          </View>
                          <View>
                            <Text style={[styles.xltext, { color: "white" }]}>
                              About Us
                            </Text>
                          </View>
                        </View>
                        <View>
                          <MaterialIcons
                            name="chevron-right"
                            size={30}
                            color="white"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="HomeDrawerRoot"
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function MainTabs() {
  const insets = useSafeAreaInsets();
  const cartcategory = useSelector(
    (state) => state.Productlist?.cartByCategory
  );
  const selectedCount = Object.values(cartcategory).flat().length; // flatten all arrays;
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const getTabBarIcon = (routeName, focused, color, size) => {
    let iconName;
    if (routeName === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (routeName === "Cart") {
      iconName = focused ? "cart" : "cart";
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
              <Text
                style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
              >
                {selectedCount > 99 ? "99+" : selectedCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
    return <Icon name={iconName} size={size} color={color} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size, selectedCount),
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          height: 50 + (Platform.OS === "android" ? insets.bottom : 0), // ✅ auto adjust karega
          // paddingBottom: Platform.OS === "android" ? insets.bottom : 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Logout"
        component={Bill}
        options={{ headerShown: false }}
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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const checkTokenValidation = async () => {
    console.log("Token", token);
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
        console.log("response on rootlayout ApiCall", response.data);
        dispatch(setIsAuthenticate(true));
        const startTimer = response.data.userDetails?.timerStart;
        const timeDuration = response.data.userDetails?.timerDuration;
        const productNeed = response.data.userDetails?.productNeed;
        dispatch(setStartTimer(startTimer));
        dispatch(setTimeDuration(timeDuration));
        dispatch(setProductNeed(productNeed));
      } else {
        dispatch(setIsAuthenticate(false));
        dispatch(RemoveUser());
      }
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(RemoveUser());
    } finally {
      setLoading(false);
    }
  };
  const checkNetworkStatus = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();
      const connected = networkState.isConnected ?? false; // fallback for TS
      // const connected = true; // fallback for TS
      setIsConnected(connected);
      setShowModal(!connected);
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
    checkTokenValidation();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : IsAuthenticate ? (
            <>
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="MyWebView" component={MyWebView} />
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
                <ImageBackground source={require('./assets/Noconnection.png')} resizeMode="contain" style={styles.img}/>
        <View style={styles.modalOverlaym}>
          <View style={styles.modalContainerm}>
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
  );
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

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
    modalOverlaym: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:"70%"
  },
  modalContainerm: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
    alertText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  alertSubText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
 img:{
    height:"55%",
    width:"96%"
  },
  img2: {
    alignItems: "center",
    gap: scales(20),
    flexDirection: "row",
  },
  imgContainer: {
    width: scales(40), // Outer circle width
    height: scales(40), // Outer circle height
    borderRadius: scales(20), // Half of width/height for circle
    backgroundColor: "#FFFFFF", // Optional, for contrast
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Ensures image stays inside circle
  },
  heading: {
    fontWeight: "bold",
    fontSize: scales(16),
  },
  containerPr: {
    backgroundColor: "#fff",
    elevation: scales(0.1),
    borderRadius: scales(10),
    paddingHorizontal: scales(10),
    paddingVertical: scales(3),
    width: "100%",
    justifyContent: "space-between",
    gap: scales(20),
  },
  flexCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: scales(5),
    paddingBottom: scales(5),
    marginTop: scales(5),
    borderBottomColor: "#eee",
    borderBottomWidth: scales(0.5),
    marginBottom: scales(5),
  },
  flexCon2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: scales(5),
    paddingBottom: scales(5),
    marginTop: scales(5),
    // marginBottom: scales(10),
  },
  xltext: {
    fontSize: scales(16),
    fontWeight: "regular",
  },
  semiText: {
    fontSize: scales(12),
    overflow: "hidden",
    width: "100%",
    textTransform: "capitalize",
    fontWeight: "regular",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
