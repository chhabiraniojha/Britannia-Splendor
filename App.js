import { StyleSheet } from 'react-native';
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
import { useEffect} from 'react';
import axios from 'axios';
import { RemoveUser, setafterLoginUser, setIsAuthenticate, setProductNeed, setStartTimer, setTimeDuration, Setuser } from './src/Redux/loginSlice';
import SplashScreen from './src/screens/SplashScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
function MainTabs() {
  const Tab = createBottomTabNavigator();
  const getTabBarIcon = (routeName, focused, color, size) => {
    let iconName;
    if (routeName === "Home") {
      iconName = focused ? 'home' : 'home-outline';
    } else if (routeName === "Cart") {
      iconName = focused ? 'cart' : "cart";
    } else if (routeName === "Bill") {
      iconName = focused ? "receipt-outline" : "receipt-outline";
    }
    return <Icon name={iconName} size={size} color={color} />
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          paddingBottom: 5,
          height: 60
        },
      })
      }
    >
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name='Bill' component={Bill} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
function RootNavigation() {
  const Stack = createStackNavigator();
  const token = useSelector((state) => state.login?.loginuser);
  const IsAuthenticate = useSelector((state) => state.login?.IsAuthenticate);
  const dispatch = useDispatch();
  const checkTokenValidation = async () => {
    console.log("Token",token)
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
  useEffect(() => {
    checkTokenValidation();
  }, [])
  return (
    <GestureHandlerRootView>
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
     </GestureHandlerRootView>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
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
