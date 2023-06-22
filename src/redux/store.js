import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { persistedThemeReducer } from './theme/themeSlice.js';
import { newsApi } from './newsApi/newsApi';
import { servicesApi } from './serviceApi/serviceApi';
import { profileApi } from './profileApi/profileApi';
import { userPetsApi } from './usersPetsApi/usersPetsApi';
import { petsApi } from './petsApi/petsApi.js';
import { searchPetsApi } from './searchPetsApi/searchPetsApi';
import { favoritApi } from './favotitApi/favoritApi';
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
    theme: persistedThemeReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [userPetsApi.reducerPath]: userPetsApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    [searchPetsApi.reducerPath]: searchPetsApi.reducer,
    [favoritApi.reducerPath]: favoritApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      newsApi.middleware,
      servicesApi.middleware,
      profileApi.middleware,
      userPetsApi.middleware,
      petsApi.middleware,
      searchPetsApi.middleware,
      favoritApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
