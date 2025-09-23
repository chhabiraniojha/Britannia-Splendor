// components/Redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light', // fallback
  isSystemTheme: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSystemTheme: (state, action) => {
      if (state.isSystemTheme) {
        state.currentTheme = action.payload;
      }
    },
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      state.isSystemTheme = false;
    },
    enableSystemTheme: (state) => {
      state.isSystemTheme = true;
    },
  },
});

export const { setSystemTheme, setTheme, enableSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
