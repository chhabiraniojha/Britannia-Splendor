import {createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  status: false,
  loginuser: null,
  VideoAddStatus:false,
  email: '',
  password: '',
  rememberMe: false,
  IsAuthenticate:null,
  // userTimer:null,
  startTimer:null,
  timeDuration:null,
  productNeed:null
};

// Create the slice
const loginSlice = createSlice({
  name: 'userlogin',
  initialState,
  reducers: {
    login(state,action){
     state.status = true,
     state.loginuser = action.payload
    },
    Logout(state){
      state.status = false
      state.loginuser = null 
    },
    setVideoAddStatus(state,action){
      state.VideoAddStatus = action.payload
    },
    setCredentials: (state, action) => {
      const { email, password, rememberMe } = action.payload;
      state.email = email;
      state.password = password;
      state.rememberMe = rememberMe;
    },
    clearCredentials: (state) => {
      state.email = '';
      state.password = '';
      state.rememberMe = false;
    },
 setIsAuthenticate: (state, action) => {
  state.IsAuthenticate = action.payload; // true / false
},
// Setuser(state,action){
//   state.userTimer = action.payload
// },
// RemoveUser(state){
//   state.userTimer = null
// },
setStartTimer(state,action){
  state.startTimer = action.payload
},
setTimeDuration(state,action){
  state.timeDuration = action.payload
},
setProductNeed(state,action){
  state.productNeed = action.payload
}
  },
});
export const {Logout,login,setCredentials,setProductNeed,clearCredentials,setStartTimer,setTimeDuration,setIsAuthenticate,Setuser,RemoveUser,setVideoAddStatus} = loginSlice.actions
export default loginSlice.reducer;
