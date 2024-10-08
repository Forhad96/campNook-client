import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";
import { authReducer } from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { productReducer } from "./features/products/productSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { wishlistReducer } from "./features/wishlist/wishlistSlice";
import { categoryReducer } from "./features/category/categorySlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,

    auth: persistedReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    category:categoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
