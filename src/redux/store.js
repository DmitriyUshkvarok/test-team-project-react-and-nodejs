import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { newsApi } from './newsApi/newsApi';
import { servicesApi } from './serviceApi/serviceApi';
import { profileApi } from './profileApi/profileApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      newsApi.middleware,
      servicesApi.middleware,
      profileApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
