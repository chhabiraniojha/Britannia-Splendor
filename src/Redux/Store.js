import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cartReducer from "./Datasplice";
import HomecategoryReducer from './CategoryProduct'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
const persistConfig = {
  key: "Root",
  storage: AsyncStorage,
  blacklist:["cartByCategory"]
};
const rootReducer = combineReducers({
  Productlist: cartReducer,
  Homecat: HomecategoryReducer,
});
const persistedCartReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer:persistedCartReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
