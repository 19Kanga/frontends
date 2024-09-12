import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../Reducer/userSlice";
import menuReducer from "../Reducer/menuSlice";
import productAttributeReducer from "../Reducer/productAttributeSlice";
import categoriesReducer from "../Reducer/categoriesSlice";
import productsReducer from "../Reducer/productsSlice";
import productImageReducer from "../Reducer/productImageSlice";
import {persistStore, persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
const reducers = combineReducers({
  userReducer: userReducer,
  menuReducer: menuReducer,
  categoriesReducer: categoriesReducer,
  productAttributeReducer: productAttributeReducer,
  productsReducer: productsReducer,
  productImageReducer: productImageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  timeout: null,
  blacklist: ['productsReducer', 'categoriesReducer','productImageReducer']
};
const persistedReducer = persistReducer(persistConfig, reducers);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  {
    reducer:   persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [PERSIST,REGISTER,REHYDRATE,PAUSE,FLUSH,PURGE],
        },
      }),
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export default store;
export { persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch < AppDispatch > ();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
