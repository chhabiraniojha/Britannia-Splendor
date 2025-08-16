import { createSlice } from "@reduxjs/toolkit";

const HomeCategorySlice = createSlice({
  name: "Homecat",  
  initialState:[
      {
        id:"1",
        name:"Wellness",
        image:"https://static.vecteezy.com/system/resources/previews/001/271/001/original/wellness-and-therapy-woman-icon-vector.jpg"
      },
      {
        id:"2",
        name:"Skin Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"3",
        name:"Watches and jewellery",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"4",
        name:"Color",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"5",
        name:"Personal Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"6",
        name:"Home Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"7",
        name:"Laundary Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"8",
        name:"Food and beverages",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"9",
        name:"Agriculture",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"10",
        name:"Autto Care",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"11",
        name:"Life Style",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"12",
        name:"Others",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
      {
        id:"13",
        name:"Fragnanace",
        image:"https://th.bing.com/th/id/OIP.7Js7uxeECpZJ37gI_kEV9QHaHQ?w=202&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
      },
    ],
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (!state.includes(id)) {
        state.push(id);
      }
    }
  }
});

export const { addToCart } = HomeCategorySlice.actions;
export default HomeCategorySlice.reducer;
