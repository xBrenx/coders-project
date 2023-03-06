import movies from '../reducers/moviesSilice';
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {
    PERSIST,
    REHYDRATE,
    REGISTER,
} from 'redux-persist'
const persistConfig = {
    key: "root",
    storage,
    blacklist: []
}

const reducer = combineReducers({
movies
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE, PERSIST, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== "production"
});

export default store;