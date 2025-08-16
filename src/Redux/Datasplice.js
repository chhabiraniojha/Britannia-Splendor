import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Productlist",
initialState:{
  data:  [
      {
                categoryId:"1",
                ProductList:[
                    {
                        ProductId:"1",
                        ProductName:"Protein",
                        ProductTittle:"Growth Health",
                        Shortdiscription:"About your health",
                        Longdiscription:"How to mantain health",
                        Mrp:"4550",
                       image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
                       addedToCart:false
                    },
                    {
                        ProductId:"2",
                        ProductName:"Gainer",
                        ProductTittle:"Growth Health",
                        Shortdiscription:"About your health",
                        Longdiscription:"How to mantain health",
                        Mrp:"5550",
                        image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
                        addedToCart:false
                    },
                    {
                        ProductId:"3",
                        ProductName:"Peanut Butter",
                        ProductTittle:"Growth Health",
                        Shortdiscription:"About your health",
                        Longdiscription:"How to mantain health",
                        Mrp:"2550",
                       image:"https://media.modicare.com/ProductCategory/thumb/HL1001%20Well%20Strong%20&%20Smart%20(Chocolate%20Flavour)_Big.webp",
                       addedToCart:false
                    }
                ]
      },
      {
                categoryId:"2",
                ProductList:[
                    {
                        ProductId:"1",
                        ProductName:"Face Wash",
                        ProductTittle:"Clean Skin",
                        Shortdiscription:"About your skin",
                        Longdiscription:"How to mantain skin",
                        Mrp:"250",
                        image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
                        addedToCart:false
                    },
                    {
                        ProductId:"2",
                        ProductName:"Mosturizer",
                        ProductTittle:"after wash used",
                        Shortdiscription:"About your skin",
                        Longdiscription:"How to mantain skin Glow",
                        Mrp:"550",
                        image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
                        addedToCart:false
                    },
                    {
                        ProductId:"3",
                        ProductName:"Body Lotion",
                        ProductTittle:"Maintain Body skin",
                        Shortdiscription:"About your skin",
                        Longdiscription:"How to mantain skin",
                        Mrp:"1050",
                        image:"https://media.modicare.com/ProductCategory/thumb/MCHL01_ZoomImage__27092023092445453324528.jpg",
                        addedToCart:false
                    }
                ]
      },
      {
                categoryId:"3",
                ProductList:[
                    {
                        ProductId:"1",
                        ProductName:"Noise",
                        ProductTittle:"Good looking",
                        Shortdiscription:"About your noise watch",
                        Longdiscription:"How to mantain noise watch",
                        Mrp:"4550",
                        image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
                        addedToCart:false
                    },
                    {
                        ProductId:"2",
                        ProductName:"Fastrack",
                        ProductTittle:"Fastrack",
                        Shortdiscription:"About your watch",
                        Longdiscription:"How to mantain watch look",
                        Mrp:"6550",
                       image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
                       addedToCart:false
                    },
                    {
                        ProductId:"3",
                        ProductName:"Sonota",
                        ProductTittle:"Sonota",
                        Shortdiscription:"About your snota watch",
                        Longdiscription:"How to mantain sonota",
                        Mrp:"3050",
                        image:"https://media.modicare.com/ProductCategory/thumb/MJ1027_ZoomImage__121120240331291220400723.webp",
                        addedToCart:false
                    }
                ]
      },
    ],
    cartByCategory:{}
},
// initialState:[1,2,3,4,5],
   reducers: {
   selectProduct: (state, action) => {
  const { categoryId, productId } = action.payload;
  console.log("actionredux",categoryId,productId)
      // if category exists
      if (categoryId in state.cartByCategory) {
        state.cartByCategory[categoryId].push(productId);
      } else {
        // create new category with first product
        state.cartByCategory[categoryId] = [productId];
      }
},
    unselectProduct: (state, action) => {
   const { categoryId, productId } = action.payload;
    console.log("redxuremovecart",categoryId,productId)
  if (state.cartByCategory[categoryId]) {
    // filter out the productId
    state.cartByCategory[categoryId] = state.cartByCategory[categoryId].filter(
      (id) => id !== productId
    );

    // if category becomes empty, remove the key entirely
    if (state.cartByCategory[categoryId].length === 0) {
      delete state.cartByCategory[categoryId];
    }
  }
    },
       clearCart: (state) => {
      state.cartByCategory = {}; // empty the cart
    }
  }
      
});

export const { selectProduct,unselectProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
