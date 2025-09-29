// import { useEffect, useRef } from 'react';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { AppOpenAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

export function useAppOpenAd() {
  const appOpenAd = useRef(
    AppOpenAd.createForAdRequest(__DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-1610234648570470/1640485032')
  );
  const hasShownAd = useRef(false); // ✅ tracks if ad already shown

  useEffect(() => {
    const loadAd = () => {
      appOpenAd.current.load();
    };

    const showAd = () => {
      if (appOpenAd.current.loaded && !hasShownAd.current) {
        appOpenAd.current.show();
        hasShownAd.current = true; // ✅ mark as shown
      } else {
        console.log('AppOpenAd not loaded yet or already shown');
      }
    };

    const unsubscribeLoaded = appOpenAd.current.addAdEventListener(AdEventType.LOADED, () => {
      console.log('AppOpenAd loaded');
      showAd();
    });

    const unsubscribeClosed = appOpenAd.current.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('AppOpenAd closed');
      // Preload for next app session only
      loadAd();
    });

    loadAd(); // Initial load

    // Optional: show ad when app comes to foreground, but only if not shown yet
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        showAd();
      }
    });

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      subscription.remove();
    };
  }, []);

  return null;
}
