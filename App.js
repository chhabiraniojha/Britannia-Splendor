import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Bill from './src/screens/Bill';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProductList from './src/screens/ProductList';
import ProductDetails from './src/screens/ProductDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/Redux/Store";
import 'expo-dev-client'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
 function MainTabs() {
  const Tab = createBottomTabNavigator();
  const getTabBarIcon = (routeName,focused,color,size)=>{
  let iconName;
  if(routeName === "Home"){
    iconName = focused ? 'home':'home-outline';
  }else if(routeName ==="Cart"){
    iconName = focused ? 'cart':"cart";
  }else if( routeName ==="Bill"){
    iconName = focused ?"receipt-outline":"receipt-outline";
  }
  return <Icon name={iconName} size={size} color={color}/>
  }
  return (
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>getTabBarIcon(route.name,focused,color,size),
        tabBarActiveTintColor:"#007bff",
        tabBarInactiveTintColor:"grey",
        tabBarStyle:{
          paddingBottom:5,
          height:60
        },
      })
}
      >
      <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Tab.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
      <Tab.Screen name='Bill' component={Bill} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}
export default function App() {
    const Stack = createStackNavigator();
      const bannerRef = useRef<BannerAd>(null);
  return (
    //   <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>    
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     {/* Main Tabs */}
    //     <Stack.Screen name="MainTabs" component={MainTabs} />
    //     {/* Hidden/Detail Screens */}
    //     <Stack.Screen name="ProductList" component={ProductList} />
    //     <Stack.Screen name="ProductDetails" component={ProductDetails} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //     </PersistGate>
    //     </Provider>
    <View style={{flex:1}}>
      <Text>Banner Add</Text>
      <BannerAd 
      ref={bannerRef} 
      unitId={adUnitId} 
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
