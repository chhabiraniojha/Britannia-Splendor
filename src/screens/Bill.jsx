import { StyleSheet, Text, View, TouchableOpacity,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import Indicator from '../components/Indicator'
import { Logout, setIsAuthenticate } from '../Redux/loginSlice'
import { useDispatch } from 'react-redux'
import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-1610234648570470/3775285320';
    const Bill = () => {
  const bannerRef = useRef(null); 
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const logOutMain = ()=>{
      dispatch(setIsAuthenticate(false))
      dispatch(Logout())
  }
     const [reloadKey, setReloadKey] = useState(0);
  const width = Dimensions.get("window")
  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    setReloadKey((prev) => prev + 1);
  });
  return (
    <SafeAreaView style={{flex:1}}>
          <StatusBar
           backgroundColor="orange"
           />
         <View style={{backgroundColor:"orange",flexDirection:"row",paddingTop:50,justifyContent:"space-between",paddingHorizontal:10,paddingBottom:10}}>
    <Text style={{fontSize:14,fontWeight:"500"}}>Britannia Bill</Text>
    <Indicator/>
    </View>
<TouchableOpacity onPress={logOutMain}>
  <Text>Logout</Text>
</TouchableOpacity>
{/* <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} /> */}
{/* <View style={{ width: width * 0.9, height: 100, alignItems: "center" }}>
  <BannerAd
    unitId={__DEV__ ? TestIds.BANNER : adUnitId}
    size={BannerAdSize.FULL_BANNER} // predefined, closest to 320x50
  />
</View> */}
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
    </SafeAreaView>
  )
};

export default Bill

const styles = StyleSheet.create({})