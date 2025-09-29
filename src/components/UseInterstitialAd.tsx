import { useEffect, useState,useCallback } from "react";
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";
//ca-app-pub-1610234648570470/4835185084
// ⚡ Use Test ID for development
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-1610234648570470/4835185084';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});
export function useInterstitialAd() {
    const [loaded, setLoaded] = useState(false);
    const [onClose, setOnClose] = useState(null);
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
       setLoaded(true)
      console.log("Interstitial loaded");
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      console.log("Interstitial closed");
      setLoaded(false);
        interstitial.load(); // preload next ad
        if (onClose){
          onClose(); // run callback
          setOnClose(null)
        }
    });

    interstitial.load();

    return () => {
      unsubscribe();
      unsubscribeClosed();
    };
  }, [onClose]);

   const showAd =(callback:any) => {
    if (loaded) {
      setOnClose(() => callback); // set navigation callback
      interstitial.show();
    } else {
      console.log("Ad not ready yet ⚠️");
       // fallback to navigation
       callback && callback();
    }
  };

  return { loaded, showAd };
}
