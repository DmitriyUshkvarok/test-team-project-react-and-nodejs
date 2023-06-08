import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from './newsApi/newsApi';
import { servicesApi } from './serviceApi/serviceApi';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, servicesApi.middleware),
});
