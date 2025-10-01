import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { unselectProduct, clearCart } from '../Redux/Datasplice';
// import {RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { StatusBar } from 'react-native';
import Indicator from '../components/Indicator';
import { Colors } from './Colors';
import axios from 'axios';
import { setIsAuthenticate, setProductNeed, setStartTimer, setTimeDuration } from '../Redux/loginSlice';
import { AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { ActivityIndicator } from 'react-native';
import { Modal } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-1610234648570470~5461500573';
// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   keywords: ['fashion', 'clothing'],
// });
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-1610234648570470/2376542707';
const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});
export const scales = (size) => Math.round(scale(size));
const Cart = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const alldata = useSelector(state => state.Productlist.data); // from store
  const cartcategory = useSelector((state) => state.Productlist.cartByCategory);
   const selectedCount = Object.values(cartcategory).flat().length // flatten all arrays;
  // const selectedCount = 2// flatten all arrays;
  const [cartDetails, setCartDetails] = useState([])
  const token = useSelector((state) => state.login?.loginuser);
  const dispatch = useDispatch();
  const [billsuccess, setBillSuccess] = useState(false);
  const [Loader, setLoader] = useState(false)
  const billSuccessRef = useRef(false);

  const updateBillSuccess = (val) => {
    billSuccessRef.current = val;
    setBillSuccess(val);
  };
  const [loaded, setLoaded] = useState(false);
  const timerStart = useSelector((state) => state.login?.startTimer);
  const timerDuration = useSelector((state) => state.login?.timeDuration);
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [Alertvisible, setAlertVisible] = useState(false)
  // total products count
  const totalProducts = alldata?.reduce((acc, cat) => acc + cat.ProductList.length, 0);
   const [timeLeft, setTimeLeft] = useState(0)
  

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
        updateBillSuccess(true)
        // console.log("bill generate")
        await checkTokenValidation()
        dispatch(clearCart()); // remove all items from Redux
        setLoader(false)
        setVisible(true)
      } else if (response.data.statusCode === 0) {
        console.log(response.data.message)
        updateBillSuccess(false)
      }
    } catch (error) {
      console.log(error.response?.data || error.message || error);
      updateBillSuccess(false)
    }
  }
  useEffect(() => {
    if (isFocused) {
      //     let rewardEarned = false;
      // let earnedAmount = 0; // ✅ track total
      const unsubscribeLoaded = rewarded.addAdEventListener(
        RewardedAdEventType.LOADED,
        () => {
          setLoaded(true);
          console.log("rewardedload");
        }
      );

      const unsubscribeEarned = rewarded.addAdEventListener(
        RewardedAdEventType.EARNED_REWARD,
        (reward) => {
          if (reward) {
            setLoader(true)
            geneRateBill();
          }
          console.log("User earned reward of ", reward.amount);
          // rewardEarned = true;
          // earnedAmount += reward.amount
        }
      );

      const unsubscribeClosed = rewarded.addAdEventListener(
        AdEventType.CLOSED,
        () => {
          // if(rewardEarned){
          //  const bonus = 10;
          //  earnedAmount += bonus 
          //  console.log("Total Earned",earnedAmount)
          // }
          // Alert.alert(
          //   "Generating Bill",
          //   "Please click on continue ",
          //   [
          //     {
          //       text: "OK",
          //       onPress: () => {
          //         // navigation.navigate("Home");
          //         // dispatch(clearCart());
          //          if (billSuccessRef.current) {
          //       Alert.alert("Submit Bill Successfully","Please click on continue");
          //     } else {
          //       Alert.alert("Some Technical error", "Please Try Again");
          //     }
          //       },
          //     },
          //   ],
          //   { cancelable: true }
          // );
        }
      );
      // ✅ Ad load karega jab screen pe aayega
      rewarded.load();
      return () => {
        unsubscribeLoaded();
        unsubscribeEarned();
        unsubscribeClosed();
      };
    }
  }, [isFocused]);


  const showAd = async () => {
    if (loaded) {
      try {
          setAlertVisible(false)
        await rewarded.show();
      } catch (error) {
        Alert.alert("Add Not Loaded", "Please try after few second", [{ text: "Ok" }], { cancelable: true })
      }
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
       useEffect(() => {
      //Stop timer when reached 0
    if (!timerStart || !timerDuration) return;
    // convert time string in to miliseconds
    const startTime = new Date(timerStart).getTime();
    // convert TimeDuration seconds to miliseconds and when the timer will reach 0
    const endTime = startTime + timerDuration * 1000;
    //set intialRemainingTime
    setTimeLeft(Math.max(0,Math.floor((endTime - Date.now())/1000)));
     //Creates a timer that runs every 1 second
     //prerv= previous value time left
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          //stops the interval to avoid unnecessary
          clearInterval(interval);
          //stops the interval to avoid unnecessary
          return 0;
        }
        //otherwise, decrease timer by 1 second.
        return prev - 1;
      });
    }, 1000);
    // clean that fn that stop interval
    return () => clearInterval(interval);
  }, [timerStart,timerDuration]);
  const formatTime = (seconds) => {
  if (seconds <= 0) return "00:00";

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
  return (
    <SafeAreaView style={{ flex: 1, height: "100%", marginBottom:10}}>
      <StatusBar
        backgroundColor="orange"
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      <View style={{ backgroundColor: "orange", flexDirection: "row", paddingTop: 40, justifyContent: "space-between", paddingHorizontal: 10, paddingBottom: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>Cart</Text>
        <Indicator />
      </View>
      {selectedCount > 0 &&
      <Text style={styles.Carttext}>You have someting in the Cart {selectedCount}</Text>}
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:""}}>
          <Image  source={require("../../assets/EmptyCart2.png")} resizeMode='contain' style={styles.headerIcon3}/>
        </View>
      )}
      {Loader && (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "600", color: Colors.Appcolor }}>Generating Bill Please wait..</Text>
          <ActivityIndicator size="large" color={Colors.Appcolor} />
        </View>
      )}
      {Object.values(cartcategory).length > 0 && (
        <TouchableOpacity
          // onPress={geneRateBill}
          onPress={() => {
            //addNewLogic
            const startTime = new Date(timerStart).getTime();
            const endTime = startTime + timerDuration * 1000;
            if (Date.now() <= endTime) {
              // Alert.alert("Please wait for timer stop")
              setVisible2(true)
              return
            }
            if (totalProducts > 0 && selectedCount === totalProducts) {
              setAlertVisible(true)
              return; // ⬅️ ye important hai, niche ka code ab execute nahi hoga
            }
            geneRateBill()
          }}
          style={{ margin: "auto", alignItems: "center", justifyContent: "center", backgroundColor: Colors.Appcolor, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 8, width: "94%" }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Submit Bill</Text>
        </TouchableOpacity>
      )}
      <Modal visible={Alertvisible} transparent={true} animationType="fade">
        <View style={[styles.modalOverlay, { backgroundColor: "rgba(0, 0, 0, 0.4)" }]}>
          <View style={[styles.modalContent, { backgroundColor: "#FFFFFF" }]}>
            <Text style={[styles.modalTitle, { color: "black" }]}>You have selected all products</Text>
            <Text style={[styles.modalMessage, { color: "gray",fontWeight:"600" }]}>
              This is a premium feature.To submit the  bill You have to watch an add!
            </Text>
            <View style={[styles.modalButtonContainer,{justifyContent:"space-between",marginHorizontal:5}]}>
              <TouchableOpacity
                onPress={() => setAlertVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={[styles.cancelButtonText]}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showAd()} style={styles.continueButton2}>
                <Text style={styles.continueButtonText}>Watch an Add</Text>
                <Image
                  source={require("../../assets/AdsIcon.png")}
                  style={styles.headerIcon2}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={[styles.modalOverlay, { backgroundColor: "rgba(0, 0, 0, 0.4)" }]}>
          <View style={[styles.modalContent, { backgroundColor: "#FFFFFF" }]}>
            <Text style={[styles.modalMessage, { color: "gray", }]}>
              Bill Submitted SuccessFully  
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={() => setVisible(false)} style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={visible2} transparent={true} animationType="fade">
        <View style={[styles.modalOverlay, { backgroundColor: "rgba(0, 0, 0, 0.4)" }]}>
          <View style={[styles.modalContent, { backgroundColor: "#FFFFFF" }]}>
            <Text style={[styles.modalMessage, { color: "gray", }]}>
             Please Wait For Timer Stop  
            </Text>
            <Text>
  You can generate a bill only once every hour. 
  Please wait {formatTime(timeLeft)} minutes before generating a new bill.
</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={() => setVisible2(false)} style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  Carttext:{
    textAlign:"center",
    fontSize:12,
    fontWeight:"600",
    color:"white",
    backgroundColor:"orange",
    paddingHorizontal:3,
    paddingVertical:3,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    width:"55%",
    margin:"auto"
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
  modalOverlay: {
    // flex: 1,
    width:"100%",
    height:"92%",
    margin:"auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    paddingHorizontal: scales(10),
    borderRadius: scales(10),
    backgroundColor: "#FFFFFF",
    paddingVertical: scales(10),
  },
  modalTitle: {
    fontSize: scales(18),
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: scales(10),
    color: "black",
  },
  modalMessage: {
    alignItems: "center",
    textAlign: "center",
    color: "black",
    fontWeight: "600",
    fontSize:15
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scales(20),
    alignItems: "center",
  },
  cancelButton: {
    borderRadius: scales(6),
    paddingHorizontal: scales(35),
    paddingVertical: scales(6),
    borderColor:Colors.NewAppColor,
    borderWidth: scales(0.5),
    backgroundColor:Colors.NewAppColor
  },
  cancelButtonText: {
   color: "#FFFF",
  },
  headerIcon2: {
    height: scales(16),
    width: scales(25),
    // objectFit: "contain",
  },
  headerIcon3: {
    height: "80%",
    width: "90%",
    // objectFit: "contain",
  },
  continueButton: {
    borderRadius: scales(6),
    paddingHorizontal: scales(30),
    paddingVertical: scales(6),
    borderColor: Colors.NewAppColor,
    borderWidth: scales(0.5),
    backgroundColor: Colors.NewAppColor,
  },
  continueButton2: {
    borderRadius: scales(6),
    paddingHorizontal: scales(10),
    paddingVertical: scales(6),
    borderColor: Colors.NewAppColor,
    borderWidth: scales(0.5),
    backgroundColor: Colors.NewAppColor,
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  continueButtonText: {
    color: "#FFFF",
  },
})