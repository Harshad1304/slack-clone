import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../features/appSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const presistConfig = {
    key:"root",
    storage,
}

const persistedReducer = persistReducer(presistConfig, appReducer)

const store = configureStore({
    reducer:{
        app:persistedReducer,
    },

})

export const presistor = persistStore(store);

export default store;