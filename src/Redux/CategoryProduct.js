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
        image:"https://img.freepik.com/premium-vector/skincare-logo-design-with-luxury-style-vector-graphics_719626-54.jpg"
      },
      {
        id:"3",
        name:"Watches and jewellery",
        image:"https://www.shutterstock.com/image-vector/watches-gear-logo-260nw-1248908662.jpg"
      },
      {
        id:"4",
        name:"Color",
        image:"https://pimwp.s3-accelerate.amazonaws.com/2023/07/image003-1-1.png"
      },
      {
        id:"5",
        name:"Personal Care",
        image:"https://www.shutterstock.com/image-vector/abstract-people-community-logo-icon-600w-2617596391.jpg"
      },
      {
        id:"6",
        name:"Home Care",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1citzw8flszlQGVuNGag_nP7WeSVT36XkJQ&s"
      },
      {
        id:"7",
        name:"Laundary Care",
        image:"https://d502jbuhuh9wk.cloudfront.net/orgData/61c5fb0f0cf20ad8bce637d5/pages/assets/images/Care.png"
      },
      {
        id:"8",
        name:"Food and beverages",
        image:"https://i.ytimg.com/vi/kxwRHrYG9u4/maxresdefault.jpg"
      },
      {
        id:"9",
        name:"Agriculture",
        image:"https://i.ytimg.com/vi/nGCzcoRvh3I/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEYgZSgYMA8=&rs=AOn4CLAuw6MSwgVIZf7sa0l9qoWepJMuYg"
      },
      {
        id:"10",
        name:"Autto Care",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2g2pBox8BNHhJch1WVkeHkMXZhclBlkQIg&s"
        // image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2g2pBox8BNHhJch1WVkeHkMXZhclBlkQIg&s"
      },
      {
        id:"11",
        name:"Life Style",
        image:"https://voixindia.com/wp-content/uploads/2020/11/modicare-india-direct-selling-company.jpg"
      },
      {
        id:"12",
        name:"Others",
        image:"https://www.shutterstock.com/image-vector/rubber-stamp-word-other-red-260nw-413371045.jpg"
      },
      {
        id:"13",
        name:"Fragnanace",
        image:"https://images-eu.ssl-images-amazon.com/images/I/71DfESbdC8L._AC_UL600_SR600,600_.jpg"
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
