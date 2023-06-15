import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistThemeConfig = {
  key: 'root',
  storage,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const persistedThemeReducer = persistReducer(
  persistThemeConfig,
  themeSlice.reducer
);
