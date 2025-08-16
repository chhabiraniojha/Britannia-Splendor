import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cartReducer from "./Datasplice";
import HomecategoryReducer from './CategoryProduct'
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
});

export const persistor = persistStore(store);
