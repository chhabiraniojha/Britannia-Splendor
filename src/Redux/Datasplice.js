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
      {
          categoryId: "4",
          ProductList: [
        {
          ProductId: "1",
          ProductName: "Hydra Veil Matte Primer",
          ProductTittle: "Quick View",
          Shortdiscription: "Mattifying face primer",
          Longdiscription: "Hydra Veil Matte Primer controls shine and creates a flawless base for makeup.",
          Mrp: "650",
          image: "https://media.modicare.com/ProductCategory/thumb/uc1108_ZoomImage__06052025045659446405565.webp",
          addedToCart: false
        },
        {
          ProductId: "2",
          ProductName: "All-in-One Perfection CC Cream",
          ProductTittle: "Quick View",
          Shortdiscription: "Skin-perfecting CC cream",
          Longdiscription: "All-in-One Perfection CC Cream evens skin tone and provides natural coverage.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/uc4501_ZoomImage__04032025045137770705446.webp",
          addedToCart: false
        },
        {
          ProductId: "3",
          ProductName: "Stay & Slay Pro Makeup Setting Mist",
          ProductTittle: "Quick View",
          Shortdiscription: "Long-lasting setting mist",
          Longdiscription: "Stay & Slay Pro Makeup Setting Mist keeps makeup intact for long hours.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/UC1109_ZoomImage__2602202511302850661420.webp",
          addedToCart: false
        },
        {
          ProductId: "4",
          ProductName: "Matte Vogue Luxe Slim Lipstick",
          ProductTittle: "Quick View",
          Shortdiscription: "Slim matte lipstick",
          Longdiscription: "Matte Vogue Luxe Slim Lipstick delivers bold color payoff with a soft matte finish.",
          Mrp: "999",
          image: "https://media.modicare.com/ProductCategory/thumb/UC1401_ZoomImage__160120251230211777082421.webp",
          addedToCart: false
        },
        {
          ProductId: "5",
          ProductName: "Luxe Vegan Nail Lacquer",
          ProductTittle: "Quick View",
          Shortdiscription: "Vegan nail polish",
          Longdiscription: "Luxe Vegan Nail Lacquer offers vibrant shades with a cruelty-free formula.",
          Mrp: "360",
          image: "https://media.modicare.com/ProductCategory/thumb/UCL011%20Allure_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "6",
          ProductName: "Dazzle Eyeshadow Palette",
          ProductTittle: "Quick View",
          Shortdiscription: "6-shade eyeshadow palette",
          Longdiscription: "Dazzle Eyeshadow Palette includes versatile shades for day to night looks.",
          Mrp: "1799",
          image: "https://media.modicare.com/ProductCategory/thumb/UCLE01_ZoomImage__27092024013528102003997.webp",
          addedToCart: false
        },
        {
          ProductId: "7",
          ProductName: "Too Good To Be Matte Lipstick",
          ProductTittle: "Quick View",
          Shortdiscription: "Matte finish lipstick",
          Longdiscription: "Too Good To Be Matte Lipstick offers smooth application with long-lasting color.",
          Mrp: "375",
          image: "https://media.modicare.com/ProductCategory/thumb/UC1110%20Russian%20Red_Small.webp",
          addedToCart: false
        },
        {
          ProductId: "8",
          ProductName: "Gold Collection Black Royalty Kajal",
          ProductTittle: "Quick View",
          Shortdiscription: "Intense black kajal",
          Longdiscription: "Gold Collection Black Royalty Kajal delivers smudge-proof deep black color.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/UCLRK1_ZoomImage__271020230404301080879292.webp",
          addedToCart: false
        },
        {
          ProductId: "9",
          ProductName: "Gold Collection Matte Lipcolor",
          ProductTittle: "Quick View",
          Shortdiscription: "Matte lip color",
          Longdiscription: "Gold Collection Matte Lipcolor provides rich pigmentation with a velvety finish.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/UCLML1_ZoomImage__261020231210001655428613.webp",
          addedToCart: false
        },
        {
          ProductId: "10",
          ProductName: "Gold Collection Crème Lipcolor",
          ProductTittle: "Quick View",
          Shortdiscription: "Creamy lip color",
          Longdiscription: "Gold Collection Crème Lipcolor nourishes lips while offering vibrant shades.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/UCLCL1_ZoomImage__26102023113201477223195.webp",
          addedToCart: false
        },
        {
          ProductId: "11",
          ProductName: "Pro Eyeshadow Brush",
          ProductTittle: "Quick View",
          Shortdiscription: "Professional eyeshadow brush",
          Longdiscription: "Pro Eyeshadow Brush designed for smooth blending and precise application.",
          Mrp: "799",
          image: "https://media.modicare.com/ProductCategory/thumb/UC2305-PRO-EYESHADOW-BRUSH_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "12",
          ProductName: "Pro Crease Brush",
          ProductTittle: "Quick View",
          Shortdiscription: "Crease blending brush",
          Longdiscription: "Pro Crease Brush perfect for defining and blending crease colors effortlessly.",
          Mrp: "699",
          image: "https://media.modicare.com/ProductCategory/thumb/UC2303-PRO-CREASE-BRUSH_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "13",
          ProductName: "Pro Eye Smudger Brush",
          ProductTittle: "Quick View",
          Shortdiscription: "Smudging eye brush",
          Longdiscription: "Pro Eye Smudger Brush ideal for creating smokey eye looks with precision.",
          Mrp: "599",
          image: "https://media.modicare.com/ProductCategory/thumb/UC2304-PRO-EYE-SMUDGER-BRUSH_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "14",
          ProductName: "Pro Blush Brush",
          ProductTittle: "Quick View",
          Shortdiscription: "Soft blush brush",
          Longdiscription: "Pro Blush Brush designed to deliver smooth and even blush application.",
          Mrp: "1299",
          image: "https://media.modicare.com/ProductCategory/thumb/UC2302-PRO-BLUSH-BRUSH_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "15",
          ProductName: "Pro Contour Brush",
          ProductTittle: "Quick View",
          Shortdiscription: "Precision contour brush",
          Longdiscription: "Pro Contour Brush helps sculpt and define face contours with ease.",
          Mrp: "1599",
          image: "https://media.modicare.com/ProductCategory/thumb/UC2301-PRO-CONTOURING-BRUSH_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "16",
          ProductName: "Matte & Glow Duo Blusher",
          ProductTittle: "Quick View",
          Shortdiscription: "Dual blush palette",
          Longdiscription: "Matte & Glow Duo Blusher combines matte and shimmer finishes for a radiant look.",
          Mrp: "1150",
          image: "https://media.modicare.com/ProductCategory/thumb/UCDB01%20A_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "17",
          ProductName: "Ultimate Duo Highlighter",
          ProductTittle: "Quick View",
          Shortdiscription: "Two-shade highlighter",
          Longdiscription: "Ultimate Duo Highlighter adds instant glow with buildable intensity.",
          Mrp: "999",
          image: "https://media.modicare.com/ProductCategory/thumb/UCDH01%20A_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "18",
          ProductName: "Pro Fix 3-In-1 Palette (Concealer Kit)",
          ProductTittle: "Quick View",
          Shortdiscription: "3-in-1 concealer palette",
          Longdiscription: "Pro Fix 3-In-1 Palette offers concealing, correcting, and highlighting in one kit.",
          Mrp: "1099",
          image: "https://media.modicare.com/ProductCategory/thumb/Pro-Fix-3-in-1-Palette-Concealer-Kit-(Light-Medium-01)-Small%201.jpg",
          addedToCart: false
        },
        {
          ProductId: "19",
          ProductName: "Power Matte Transfer Proof Liquid Lip Color",
          ProductTittle: "Quick View",
          Shortdiscription: "Transfer-proof liquid lipstick",
          Longdiscription: "Power Matte Transfer Proof Liquid Lip Color delivers long-lasting matte finish.",
          Mrp: "499",
          image: "https://media.modicare.com/ProductCategory/thumb/UC1901-Royalty_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "20",
          ProductName: "Pristine Dry Oil Moisture Boosting Treatment",
          ProductTittle: "Quick View",
          Shortdiscription: "Moisture boosting dry oil",
          Longdiscription: "Pristine Dry Oil Moisture Boosting Treatment hydrates and nourishes skin deeply.",
          Mrp: "1399",
          image: "https://media.modicare.com/ProductCategory/thumb/Big_UC1106.jpg",
          addedToCart: false
        }
          ]
        },
        {
          categoryId: "5",
          ProductList: [
        {
          ProductId: "1",
          ProductName: "Flouride Toothpaste",
          ProductTittle: "Quick View",
          Shortdiscription: "Cavity protection toothpaste",
          Longdiscription: "Fluoride Toothpaste strengthens teeth and helps prevent cavities for healthy gums.",
          Mrp: "85",
          image: "https://media.modicare.com/ProductCategory/thumb/PC2000%20Fresh%20Moments%20Toothpaste_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "2",
          ProductName: "White Pearl Soap",
          ProductTittle: "Quick View",
          Shortdiscription: "Luxury bathing soap",
          Longdiscription: "White Pearl Soap nourishes skin and provides a refreshing bathing experience.",
          Mrp: "240",
          image: "https://media.modicare.com/ProductCategory/thumb/PC5229_ZoomImage__140620240906001924383426.webp",
          addedToCart: false
        },
        {
          ProductId: "3",
          ProductName: "Instante Tea Tree Oil With Vitamin E",
          ProductTittle: "Quick View",
          Shortdiscription: "Tea tree oil with Vitamin E",
          Longdiscription: "Instante Tea Tree Oil With Vitamin E helps fight acne and promotes clear skin.",
          Mrp: "355",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0003%20Essensual%20Instante%20Tea%20Tree%20Oil%20with%20Vitamin%20E_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "4",
          ProductName: "Sanitary Napkin - Regular",
          ProductTittle: "Quick View",
          Shortdiscription: "Regular sanitary napkins",
          Longdiscription: "Sanitary Napkin - Regular ensures comfort and protection during periods.",
          Mrp: "225",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0071%20Freedom%20Sanitary%20Napkins_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "5",
          ProductName: "Sanitary Napkin - Large",
          ProductTittle: "Quick View",
          Shortdiscription: "Large size napkins",
          Longdiscription: "Sanitary Napkin - Large provides long-lasting comfort and heavy flow protection.",
          Mrp: "245",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0072_ZoomImage__140220240338191993448072.webp",
          addedToCart: false
        },
        {
          ProductId: "6",
          ProductName: "Sanitary Napkin - X-Large",
          ProductTittle: "Quick View",
          Shortdiscription: "X-Large sanitary napkins",
          Longdiscription: "Sanitary Napkin - X-Large designed for maximum absorbency and night comfort.",
          Mrp: "265",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0073_ZoomImage__14022024033840125319158.webp",
          addedToCart: false
        },
        {
          ProductId: "7",
          ProductName: "Kids Toothbrush",
          ProductTittle: "Quick View",
          Shortdiscription: "Soft kids toothbrush",
          Longdiscription: "Kids Toothbrush with soft bristles ensures gentle cleaning for children’s teeth.",
          Mrp: "154",
          image: "https://media.modicare.com/ProductCategory/thumb/pc0081_ZoomImage__030420251054371888149469.webp",
          addedToCart: false
        },
        {
          ProductId: "8",
          ProductName: "Hand & Body Lotion With Glycerine & Honey",
          ProductTittle: "Quick View",
          Shortdiscription: "Moisturizing lotion",
          Longdiscription: "Hand & Body Lotion With Glycerine & Honey hydrates and nourishes dry skin.",
          Mrp: "225",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0063_ZoomImage__21112024022859835382012.webp",
          addedToCart: false
        },
        {
          ProductId: "9",
          ProductName: "Deep Nourishing Cold Cream",
          ProductTittle: "Quick View",
          Shortdiscription: "Winter cold cream",
          Longdiscription: "Deep Nourishing Cold Cream keeps skin soft and moisturized during winters.",
          Mrp: "289",
          image: "https://media.modicare.com/ProductCategory/thumb/PC60621_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "10",
          ProductName: "Kids Toothpaste",
          ProductTittle: "Quick View",
          Shortdiscription: "Toothpaste for kids",
          Longdiscription: "Kids Toothpaste with gentle formulation protects against cavities and strengthens teeth.",
          Mrp: "160",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0080_ZoomImage__180720240925112055513648.webp",
          addedToCart: false
        },
        {
          ProductId: "11",
          ProductName: "Sofwash Aloe Vera, Neem, Tulsi Soap",
          ProductTittle: "Quick View",
          Shortdiscription: "Herbal bathing soap",
          Longdiscription: "Sofwash Aloe Vera, Neem, Tulsi Soap cleanses and nourishes skin naturally.",
          Mrp: "160",
          image: "https://media.modicare.com/ProductCategory/thumb/Sofwash-Neem-Soap_Big%20PC4018.jpg",
          addedToCart: false
        },
        {
          ProductId: "12",
          ProductName: "Sofwash Sandal Soap",
          ProductTittle: "Quick View",
          Shortdiscription: "Sandalwood soap",
          Longdiscription: "Sofwash Sandal Soap enriched with sandalwood for smooth and radiant skin.",
          Mrp: "160",
          image: "https://media.modicare.com/ProductCategory/thumb/Sofwash-Sandal-Soap_Big%20PC4015.jpg",
          addedToCart: false
        },
        {
          ProductId: "13",
          ProductName: "Sofwash Orange Soap",
          ProductTittle: "Quick View",
          Shortdiscription: "Refreshing orange soap",
          Longdiscription: "Sofwash Orange Soap refreshes the skin with citrus extracts for glowing skin.",
          Mrp: "160",
          image: "https://media.modicare.com/ProductCategory/thumb/Sofwash-Orange-Soap_Big%20PC4017.jpg",
          addedToCart: false
        },
        {
          ProductId: "14",
          ProductName: "Sofwash Lime Soap",
          ProductTittle: "Quick View",
          Shortdiscription: "Lime freshness soap",
          Longdiscription: "Sofwash Lime Soap offers a fresh lime fragrance and keeps skin energized.",
          Mrp: "160",
          image: "https://media.modicare.com/ProductCategory/thumb/Sofwash-Lime-Soap_Big%20PC4016.jpg",
          addedToCart: false
        },
        {
          ProductId: "15",
          ProductName: "Henna & Jojoba Oil Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Henna enriched shampoo",
          Longdiscription: "Henna & Jojoba Oil Shampoo strengthens hair and promotes natural shine.",
          Mrp: "192",
          image: "https://media.modicare.com/ProductCategory/thumb/FOTE-Shampoo-Henna-&-Jojoba-Oil-Sachet_Big%201%20PC0085.jpg",
          addedToCart: false
        },
        {
          ProductId: "16",
          ProductName: "Arnica & Tea Tree Oil Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Anti-dandruff shampoo",
          Longdiscription: "Arnica & Tea Tree Oil Shampoo controls dandruff and soothes itchy scalp.",
          Mrp: "192",
          image: "https://media.modicare.com/ProductCategory/thumb/FOTE-Shampoo-Arnica-&-Tea-Tree-Oil-Sachet_Big%201%20PC0086.jpg",
          addedToCart: false
        },
        {
          ProductId: "17",
          ProductName: "Advanced Formula Smooth & Shine Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Smooth & shine shampoo",
          Longdiscription: "Advanced Formula Smooth & Shine Shampoo adds smoothness and silky shine to hair.",
          Mrp: "192",
          image: "https://media.modicare.com/ProductCategory/thumb/Salon-Professional-Advanced-Formula-Smooth-&-Shine-Shampoo---Sachet_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "18",
          ProductName: "Advanced Formula Dandruff Care Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Dandruff care shampoo",
          Longdiscription: "Advanced Formula Dandruff Care Shampoo fights dandruff and scalp irritation.",
          Mrp: "192",
          image: "https://media.modicare.com/ProductCategory/thumb/Salon-Professional-Advanced-Formula-Dandruff-Care-Shampoo---Sachet_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "19",
          ProductName: "Advanced Formula Hair Fall Defense Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Hair fall defense shampoo",
          Longdiscription: "Advanced Formula Hair Fall Defense Shampoo strengthens roots and reduces hair fall.",
          Mrp: "192",
          image: "https://media.modicare.com/ProductCategory/thumb/Salon-Professional-Advanced-Formula-Hair-Fall-Defense-Shampoo---Sachet_Big.jpg",
          addedToCart: false
        },
        {
          ProductId: "20",
          ProductName: "Deep Nourishing Cold Cream",
          ProductTittle: "Quick View",
          Shortdiscription: "Moisturizing cold cream",
          Longdiscription: "Deep Nourishing Cold Cream provides deep hydration and protects against dryness.",
          Mrp: "199",
          image: "https://media.modicare.com/ProductCategory/thumb/PC0078_ZoomImage__100620241056471465982876.webp",
          addedToCart: false
        }
          ]
        },
        {
          categoryId: "6",
          ProductList: [
        {
          ProductId: "1",
          ProductName: "Powerful Liquid Toilet Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "Toilet cleaning liquid",
          Longdiscription: "Powerful Liquid Toilet Cleaner removes tough stains and kills germs for a hygienic toilet.",
          Mrp: "184",
          image: "https://media.modicare.com/ProductCategory/thumb/HC0027%20Beyond%20Blue_Big.webp",
          addedToCart: false
        },
        {
          ProductId: "2",
          ProductName: "Mix & Spray Bottle Kit",
          ProductTittle: "Quick View",
          Shortdiscription: "Spray bottle kit",
          Longdiscription: "Mix & Spray Bottle Kit ideal for easy application of cleaning solutions.",
          Mrp: "235",
          image: "https://media.modicare.com/ProductCategory/thumb/hc14_ZoomImage__06082025115750822052740.webp",
          addedToCart: false
        },
        {
          ProductId: "3",
          ProductName: "Multisurface Disinfectant Spray",
          ProductTittle: "Quick View",
          Shortdiscription: "Surface disinfectant spray",
          Longdiscription: "Multisurface Disinfectant Spray kills 99.9% germs on all household surfaces.",
          Mrp: "499",
          image: "https://media.modicare.com/ProductCategory/thumb/Steri-Protect_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "4",
          ProductName: "Advanced Concentrated Dish Washing Liquid (Original Formula)",
          ProductTittle: "Quick View",
          Shortdiscription: "Dishwashing liquid",
          Longdiscription: "Advanced Concentrated Dish Washing Liquid cuts grease and removes stains effectively.",
          Mrp: "230",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_200720201050031142652198.jpg",
          addedToCart: false
        },
        {
          ProductId: "5",
          ProductName: "Powerful Disinfectant Cleaner - Original",
          ProductTittle: "Quick View",
          Shortdiscription: "Original disinfectant cleaner",
          Longdiscription: "Powerful Disinfectant Cleaner Original provides superior cleaning and germ protection.",
          Mrp: "255",
          image: "https://media.modicare.com/ProductCategory/thumb/SteriClean-Powerful-New_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "6",
          ProductName: "Powerful Disinfectant Cleaner - Lime",
          ProductTittle: "Quick View",
          Shortdiscription: "Lime disinfectant cleaner",
          Longdiscription: "Powerful Disinfectant Cleaner Lime with refreshing fragrance and germ protection.",
          Mrp: "255",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_070820190340371891864726.jpg",
          addedToCart: false
        },
        {
          ProductId: "7",
          ProductName: "Stericlean Powerful Disinfectant Cleaner Original",
          ProductTittle: "Quick View",
          Shortdiscription: "Stericlean cleaner",
          Longdiscription: "Stericlean Powerful Disinfectant Cleaner kills germs and keeps home surfaces clean.",
          Mrp: "138",
          image: "https://media.modicare.com/ProductCategory/thumb/Stericlean-Original-250ml_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "8",
          ProductName: "Scale And Bathroom Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "Bathroom cleaner",
          Longdiscription: "Scale And Bathroom Cleaner removes hard water stains, scale and keeps bathrooms fresh.",
          Mrp: "199",
          image: "https://media.modicare.com/ProductCategory/thumb/Spic-N-Span_Small_new.jpg",
          addedToCart: false
        },
        {
          ProductId: "9",
          ProductName: "Shine & Protect",
          ProductTittle: "Quick View",
          Shortdiscription: "Furniture polish",
          Longdiscription: "Shine & Protect keeps wooden furniture shining and protected from dust.",
          Mrp: "545",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_171020180345501004202333.jpg",
          addedToCart: false
        },
        {
          ProductId: "10",
          ProductName: "Advanced Concentrated Glass Cleaner With Antifog Effect",
          ProductTittle: "Quick View",
          Shortdiscription: "Glass cleaner",
          Longdiscription: "Advanced Concentrated Glass Cleaner cleans glass surfaces and prevents fogging.",
          Mrp: "195",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_110920180131051004972791.jpg",
          addedToCart: false
        },
        {
          ProductId: "11",
          ProductName: "Multipurpose Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "All-purpose cleaner",
          Longdiscription: "Multipurpose Cleaner suitable for floors, tiles, and surfaces for deep cleaning.",
          Mrp: "145",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_04052018035706996027194.jpg",
          addedToCart: false
        },
        {
          ProductId: "12",
          ProductName: "Instant Silver Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "Silver polish liquid",
          Longdiscription: "Instant Silver Cleaner restores shine to silver articles within minutes.",
          Mrp: "247",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_040520180352181765628416.jpg",
          addedToCart: false
        },
        {
          ProductId: "13",
          ProductName: "Heavy Duty Floor Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "Floor cleaner",
          Longdiscription: "Heavy Duty Floor Cleaner effectively removes stains and leaves floors sparkling clean.",
          Mrp: "175",
          image: "https://media.modicare.com/ProductCategory/thumb/HD-Floor-Cleaner_Small_New.jpg",
          addedToCart: false
        },
        {
          ProductId: "14",
          ProductName: "Advanced Concentrated Multi Purpose Cleaner",
          ProductTittle: "Quick View",
          Shortdiscription: "Multipurpose cleaner",
          Longdiscription: "Advanced Concentrated Multi Purpose Cleaner with biosafe formula for hygienic cleaning.",
          Mrp: "282",
          image: "https://media.modicare.com/ProductCategory/thumb/Duz-All-Advanced-Concentrated-Multi-Purpose-Cleaner_Small.jpg",
          addedToCart: false
        },
        {
          ProductId: "15",
          ProductName: "Stain Steel Scrubber",
          ProductTittle: "Quick View",
          Shortdiscription: "Steel scrubber",
          Longdiscription: "Stain Steel Scrubber ideal for tough stain removal on utensils and cookware.",
          Mrp: "150",
          image: "https://media.modicare.com/ProductCategory/thumb/One-Der-Scrub_small.jpg",
          addedToCart: false
        },
        {
          ProductId: "16",
          ProductName: "Fabric Stain Remover",
          ProductTittle: "Quick View",
          Shortdiscription: "Stain remover liquid",
          Longdiscription: "Fabric Stain Remover eliminates tough stains from clothes without harming fabric.",
          Mrp: "210",
          image: "https://m.media-amazon.com/images/I/41I0rghCKtL.jpg",
          addedToCart: false
        },
        {
          ProductId: "17",
          ProductName: "Room Freshener - Lavender",
          ProductTittle: "Quick View",
          Shortdiscription: "Lavender room spray",
          Longdiscription: "Room Freshener Lavender leaves a soothing fragrance and freshens the air instantly.",
          Mrp: "199",
          image: "https://m.media-amazon.com/images/I/41voRIRTZQL._SX300_SY300_QL70_FMwebp_.jpg",
          addedToCart: false
        },
        {
          ProductId: "18",
          ProductName: "Kitchen Degreaser Spray",
          ProductTittle: "Quick View",
          Shortdiscription: "Kitchen grease cleaner",
          Longdiscription: "Kitchen Degreaser Spray cuts through tough grease and oil stains in the kitchen.",
          Mrp: "260",
          image: "https://m.media-amazon.com/images/I/61BeWfGTjKL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "19",
          ProductName: "Car Wash Shampoo",
          ProductTittle: "Quick View",
          Shortdiscription: "Car wash shampoo",
          Longdiscription: "Car Wash Shampoo provides a rich foam that removes dirt and protects car shine.",
          Mrp: "299",
          image: "https://m.media-amazon.com/images/I/61zLYTep9QL._AC_SR230,210_CB1169409_QL70_.jpg",
          addedToCart: false
        },
        {
          ProductId: "20",
          ProductName: "Liquid Laundry Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Liquid detergent",
          Longdiscription: "Liquid Laundry Detergent provides superior cleaning while being gentle on fabrics.",
          Mrp: "340",
          image: "https://tse3.mm.bing.net/th/id/OIP.q1wWQN6d2LJY5IQ4VWi8ZQHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
          addedToCart: false
        }
          ]
        },
        {
          categoryId: "7",
          ProductList: [
        {
          ProductId: "1",
          ProductName: "Popular Detergent Powder",
          ProductTittle: "Quick View",
          Shortdiscription: "Effective detergent powder",
          Longdiscription: "Popular Detergent Powder removes tough stains and keeps clothes bright and fresh.",
          Mrp: "176",
          image: "https://media.modicare.com/ProductCategory/thumb/LC1018_ZoomImage__260620240837541565042047.webp",
          addedToCart: false
        },
        {
          ProductId: "2",
          ProductName: "Delicate Liquid Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Gentle fabric wash",
          Longdiscription: "Specially formulated for woolens and delicate fabrics with Biosafe formula.",
          Mrp: "375",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_24102018042653182001165.jpg",
          addedToCart: false
        },
        {
          ProductId: "3",
          ProductName: "5 In 1 Liquid Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Multi-action detergent",
          Longdiscription: "Cleans, softens, brightens, protects, and freshens clothes in one wash.",
          Mrp: "405",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_11092018013413110920333.jpg",
          addedToCart: false
        },
        {
          ProductId: "4",
          ProductName: "Matic Concentrated Detergent Powder",
          ProductTittle: "Quick View",
          Shortdiscription: "Concentrated cleaning powder",
          Longdiscription: "High performance detergent powder designed for washing machines.",
          Mrp: "167",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_11092018102221609924468.jpg",
          addedToCart: false
        },
        {
          ProductId: "5",
          ProductName: "Pre-Wash Dirt & Stain Remover",
          ProductTittle: "Quick View",
          Shortdiscription: "Stain remover liquid",
          Longdiscription: "Powerful pre-wash solution for stubborn dirt and stains.",
          Mrp: "190",
          image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_310820180339321311040321.jpg",
          addedToCart: false
        },
        {
          ProductId: "6",
          ProductName: "Powerclean Detergent Bar",
          ProductTittle: "Quick View",
          Shortdiscription: "Detergent bar",
          Longdiscription: "Removes dirt and stains effectively while being gentle on hands.",
          Mrp: "114",
          image: "https://media.modicare.com/ProductCategory/thumb/Washmate-Power-Clean-Detergent-Bar_Small_new.jpg",
          addedToCart: false
        },
        {
          ProductId: "7",
          ProductName: "Liquid Laundry Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Liquid detergent",
          Longdiscription: "Liquid Laundry Detergent provides superior cleaning while being gentle on fabrics.",
          Mrp: "340",
          image: "https://m.media-amazon.com/images/I/61sCQg6PG0L._AC_SR230,210_CB1169409_QL70_.jpg",
          addedToCart: false
        },
        {
          ProductId: "8",
          ProductName: "Fabric Softener",
          ProductTittle: "Quick View",
          Shortdiscription: "Clothes softener",
          Longdiscription: "Keeps clothes soft, fresh, and fragrant after every wash.",
          Mrp: "260",
          image: "https://m.media-amazon.com/images/I/61DdccSd7UL._AC_SR230,210_CB1169409_QL70_.jpg",
          addedToCart: false
        },
        {
          ProductId: "9",
          ProductName: "Bio Enzyme Laundry Liquid",
          ProductTittle: "Quick View",
          Shortdiscription: "Eco-friendly liquid",
          Longdiscription: "Enriched with bio-enzymes for deep cleaning and fabric care.",
          Mrp: "399",
          image: "https://m.media-amazon.com/images/I/61f7kNh36pL._AC_SR230,210_CB1169409_QL70_.jpg",
          addedToCart: false
        },
        {
          ProductId: "10",
          ProductName: "Stain Fighter Gel",
          ProductTittle: "Quick View",
          Shortdiscription: "Instant stain remover",
          Longdiscription: "Advanced gel formula fights stubborn stains like coffee, ink, and oil.",
          Mrp: "210",
          image: "https://m.media-amazon.com/images/I/41olkGYn6nL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "11",
          ProductName: "Ultra White Detergent Powder",
          ProductTittle: "Quick View",
          Shortdiscription: "Whitening detergent",
          Longdiscription: "Keeps whites bright and removes dullness with every wash.",
          Mrp: "185",
          image: "https://m.media-amazon.com/images/I/61k7LBJiN7L._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "12",
          ProductName: "Baby Laundry Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Gentle baby detergent",
          Longdiscription: "Mild detergent specially formulated for baby clothes.",
          Mrp: "320",
          image: "https://m.media-amazon.com/images/I/71U76owEBrL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "13",
          ProductName: "Anti-Germ Laundry Sanitizer",
          ProductTittle: "Quick View",
          Shortdiscription: "Sanitizing liquid",
          Longdiscription: "Kills 99.9% germs while keeping clothes fresh and hygienic.",
          Mrp: "270",
          image: "https://m.media-amazon.com/images/I/71DlKA+aJiL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "14",
          ProductName: "Color Care Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Protects fabric colors",
          Longdiscription: "Special formula protects colors and prevents fading of clothes.",
          Mrp: "295",
          image: "https://m.media-amazon.com/images/I/71xds3t4AJL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "15",
          ProductName: "Eco Wash Powder",
          ProductTittle: "Quick View",
          Shortdiscription: "Eco-friendly powder",
          Longdiscription: "Environment-friendly detergent powder with natural cleaning agents.",
          Mrp: "210",
          image: "https://m.media-amazon.com/images/I/41TKPWuf1YL._AC_SR250,250_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "16",
          ProductName: "Advanced Liquid Matic Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Machine wash liquid",
          Longdiscription: "High-efficiency liquid detergent designed for top-load and front-load machines.",
          Mrp: "430",
          image: "https://m.media-amazon.com/images/I/61cORpVQZVL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "17",
          ProductName: "Hand Wash Detergent Powder",
          ProductTittle: "Quick View",
          Shortdiscription: "Hand wash powder",
          Longdiscription: "Mild detergent powder suitable for hand washing clothes.",
          Mrp: "155",
          image: "https://m.media-amazon.com/images/I/51jhZflXu7L._AC_SR230,210_CB1169409_QL70_.jpg",
          addedToCart: false
        },
        {
          ProductId: "18",
          ProductName: "Oxygen Power Detergent",
          ProductTittle: "Quick View",
          Shortdiscription: "Oxygen enriched powder",
          Longdiscription: "Removes deep stains with oxygen power and keeps fabrics bright.",
          Mrp: "199",
          image: "https://m.media-amazon.com/images/I/61QeWv+OsPL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "19",
          ProductName: "Ultra Fresh Fabric Conditioner",
          ProductTittle: "Quick View",
          Shortdiscription: "Fabric conditioner",
          Longdiscription: "Adds long-lasting fragrance and softness to all fabrics.",
          Mrp: "285",
          image: "https://m.media-amazon.com/images/I/71vbq7mTqtL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        },
        {
          ProductId: "20",
          ProductName: "Quick Wash Laundry Capsules",
          ProductTittle: "Quick View",
          Shortdiscription: "Laundry pods",
          Longdiscription: "Convenient single-use capsules for quick and effective washing.",
          Mrp: "450",
          image: "https://m.media-amazon.com/images/I/71KptZjLTTL._AC_UL480_FMwebp_QL65_.jpg",
          addedToCart: false
        }
          ]
        },
        {
            categoryId: "8",
            ProductList: [
          {
            ProductId: "1",
            ProductName: "Cow Ghee",
            ProductTittle: "Quick View",
            Shortdiscription: "Pure cow ghee",
            Longdiscription: "Natural and aromatic cow ghee ideal for cooking and daily nutrition.",
            Mrp: "799",
            image: "https://media.modicare.com/ProductCategory/thumb/FP0016%20Soul%20Flavours%20Cow%20Ghee_Big.webp",
            addedToCart: false
          },
          {
            ProductId: "2",
            ProductName: "Coconut Oil",
            ProductTittle: "Quick View",
            Shortdiscription: "Pure coconut oil",
            Longdiscription: "Cold-pressed coconut oil perfect for cooking and personal care.",
            Mrp: "278",
            image: "https://media.modicare.com/ProductCategory/thumb/FP0006%20Fruit%20of%20the%20Earth%20Coconut%20Oil_Big.webp",
            addedToCart: false
          },
          {
            ProductId: "3",
            ProductName: "Diet & Diabetic+ White Rice",
            ProductTittle: "Quick View",
            Shortdiscription: "Healthy white rice",
            Longdiscription: "Special white rice suitable for diet-conscious and diabetic-friendly meals.",
            Mrp: "899",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3140_ZoomImage__04102024085436446690976.webp",
            addedToCart: false
          },
          {
            ProductId: "4",
            ProductName: "Gir Cow A2 Ghee",
            ProductTittle: "Quick View",
            Shortdiscription: "Premium A2 ghee",
            Longdiscription: "Made from Gir cow milk, rich in nutrition and authentic taste.",
            Mrp: "1999",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3143_ZoomImage__04102024085114918992319.webp",
            addedToCart: false
          },
          {
            ProductId: "5",
            ProductName: "Natkhat Imli Candy",
            ProductTittle: "Quick View",
            Shortdiscription: "Tangy tamarind candy",
            Longdiscription: "Fun-filled imli candy with a perfect balance of tanginess and sweetness.",
            Mrp: "65",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3139_ZoomImage__030920240412211537425217.webp",
            addedToCart: false
          },
          {
            ProductId: "6",
            ProductName: "Royal Kashmiri Kahwa",
            ProductTittle: "Quick View",
            Shortdiscription: "Premium Kashmiri kahwa",
            Longdiscription: "Authentic Kashmiri kahwa infused with saffron and spices for a royal taste.",
            Mrp: "899",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3118_ZoomImage__190620240947221405541753.webp",
            addedToCart: false
          },
          {
            ProductId: "7",
            ProductName: "Active Rice Bran Oil",
            ProductTittle: "Quick View",
            Shortdiscription: "Healthy cooking oil",
            Longdiscription: "Rice bran oil enriched with natural nutrients for healthy cooking.",
            Mrp: "240",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3144_ZoomImage__130620240137591496199254.webp",
            addedToCart: false
          },
          {
            ProductId: "8",
            ProductName: "Pure Coconut Oil (Wide Mouth Jar)",
            ProductTittle: "Quick View",
            Shortdiscription: "Natural coconut oil",
            Longdiscription: "High-quality coconut oil in a convenient wide mouth jar.",
            Mrp: "295",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3142_ZoomImage__22022024015549269571007.webp",
            addedToCart: false
          },
          {
            ProductId: "9",
            ProductName: "Blended Instant Coffee",
            ProductTittle: "Quick View",
            Shortdiscription: "Rich instant coffee",
            Longdiscription: "A perfectly blended instant coffee for a smooth and aromatic taste.",
            Mrp: "290",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3134_ZoomImage__130220241053331153054185.webp",
            addedToCart: false
          },
          {
            ProductId: "10",
            ProductName: "100% Pure Instant Coffee",
            ProductTittle: "Quick View",
            Shortdiscription: "Pure instant coffee",
            Longdiscription: "Premium 100% pure instant coffee for strong flavor and rich aroma.",
            Mrp: "310",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3135_ZoomImage__13022024105421285843853.webp",
            addedToCart: false
          },
          {
            ProductId: "11",
            ProductName: "Premium Basmati Rice",
            ProductTittle: "Quick View",
            Shortdiscription: "Long grain basmati",
            Longdiscription: "High-quality premium basmati rice with long grains and rich aroma.",
            Mrp: "230",
            image: "https://media.modicare.com/ProductCategory/thumb/FP3138_ZoomImage__09112023030451972213161.webp",
            addedToCart: false
          },
          {
            ProductId: "12",
            ProductName: "Gazab Guava Candy",
            ProductTittle: "Quick View",
            Shortdiscription: "Juicy guava candy",
            Longdiscription: "Delicious guava-flavored candy that gives a fruity and tangy kick.",
            Mrp: "55",
            image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_24092020113728840393860.jpg",
            addedToCart: false
          },
          {
            ProductId: "13",
            ProductName: "Chatpata Orange Candy",
            ProductTittle: "Quick View",
            Shortdiscription: "Zesty orange candy",
            Longdiscription: "Tangy and sweet orange-flavored candy to refresh your mood.",
            Mrp: "55",
            image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_240920201130541104631432.jpg",
            addedToCart: false
          },
          {
            ProductId: "14",
            ProductName: "Kaccha Aam Candy",
            ProductTittle: "Quick View",
            Shortdiscription: "Raw mango candy",
            Longdiscription: "Chatpata kaccha aam candy with tangy raw mango flavor.",
            Mrp: "55",
            image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_101020191120231795926466.jpg",
            addedToCart: false
          },
          {
            ProductId: "15",
            ProductName: "Oats",
            ProductTittle: "Quick View",
            Shortdiscription: "Healthy oats",
            Longdiscription: "Nutritious and fiber-rich oats for a wholesome breakfast.",
            Mrp: "125",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Oats-400g_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "16",
            ProductName: "Kashmiri Kesar",
            ProductTittle: "Quick View",
            Shortdiscription: "Premium saffron",
            Longdiscription: "Authentic Kashmiri saffron strands known for purity and aroma.",
            Mrp: "775",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Kashmiri-Kesar_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "17",
            ProductName: "Traditional Lemon Pickle",
            ProductTittle: "Quick View",
            Shortdiscription: "Lemon pickle",
            Longdiscription: "Tangy and spicy traditional lemon pickle with authentic taste.",
            Mrp: "155",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Lemon-Pickle_Small.jpg",
            addedToCart: false
          },
          {
            ProductId: "18",
            ProductName: "Traditional Mixed Pickle",
            ProductTittle: "Quick View",
            Shortdiscription: "Mixed vegetable pickle",
            Longdiscription: "A tasty blend of traditional Indian spices with mixed vegetables.",
            Mrp: "155",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Mixed-Pickle_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "19",
            ProductName: "Traditional Mango Pickle",
            ProductTittle: "Quick View",
            Shortdiscription: "Mango pickle",
            Longdiscription: "Authentic spicy mango pickle made with handpicked raw mangoes.",
            Mrp: "155",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Mango-Pickle_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "20",
            ProductName: "Shahi Mukhwas",
            ProductTittle: "Quick View",
            Shortdiscription: "Refreshing mukhwas",
            Longdiscription: "A royal blend of seeds and flavors to refresh your taste buds.",
            Mrp: "125",
            image: "https://media.modicare.com/ProductCategory/thumb/Soul-Flavours-Shahi-Kukhwas_Big.jpg",
            addedToCart: false
          }
            ]
          },
          {
            categoryId: "9",
            ProductList: [
          {
            ProductId: "1",
            ProductName: "Active - 80 Gold",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "High quality agriculture solution for better crop protection.",
            Mrp: "735",
            image: "https://media.modicare.com/ProductCategory/thumb/AG0004_ZoomImage__13032024041957846211647.webp",
            addedToCart: false
          },
          {
            ProductId: "2",
            ProductName: "Active 80 (3 Units X 100Ml)",
            ProductTittle: "Quick View",
            Shortdiscription: "3 Unit x 100 ml",
            Longdiscription: "Compact pack for effective pest management in agriculture.",
            Mrp: "426",
            image: "https://media.modicare.com/ProductCategory/thumb/AG0001_ZoomImage__13032024041344541594558.webp",
            addedToCart: false
          },
          {
            ProductId: "3",
            ProductName: "Active 80 (500 ml)",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "Special formula to protect crops and improve yield.",
            Mrp: "600",
            image: "https://media.modicare.com/ProductCategory/thumb/AG0002_ZoomImage__130320240414051960136772.webp",
            addedToCart: false
          },
          {
            ProductId: "4",
            category: "Agriculture",
            ProductName: "Active 80 (5L)",
            ProductTittle: "Quick View",
            Shortdiscription: "5 L",
            Longdiscription: "Large pack for long-lasting agricultural use.",
            Mrp: "4500",
            image: "https://media.modicare.com/ProductCategory/thumb/AG0003_ZoomImage__13032024041647362661701.webp",
            addedToCart: false
          },
          {
            ProductId: "5",
            ProductName: "Crop Shield",
            ProductTittle: "Quick View",
            Shortdiscription: "1 L",
            Longdiscription: "Organic solution to prevent pest and fungal attacks.",
            Mrp: "850",
            image: "https://static.wixstatic.com/media/0918ef_c8ae7b8ddafe4356b869fed48c59f3c5~mv2.jpg/v1/fill/w_724,h_1024,al_c,q_85/crop%20shield%20plus.jpg",
            addedToCart: false
          },
          {
            ProductId: "6",
            ProductName: "Green Growth",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "Boosts plant growth with essential micronutrients.",
            Mrp: "550",
            image: "https://th.bing.com/th/id/OIP._0yqyLiPpkc07udrRvw0cQHaCa?w=350&h=113&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          },
          {
            ProductId: "7",
            ProductName: "Bio Fertilizer",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Kg",
            Longdiscription: "Natural fertilizer that enhances soil fertility.",
            Mrp: "650",
            image: "https://th.bing.com/th/id/OIP.fTzJ9JeWFQ5wYu5OtIzw7AHaIq?w=171&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          },
          {
            ProductId: "8",
            ProductName: "Agro Tonic",
            ProductTittle: "Quick View",
            Shortdiscription: "250 ml",
            Longdiscription: "Tonic for healthy root development and crop growth.",
            Mrp: "300",
            image: "https://th.bing.com/th/id/OIP.GUC62gMT8oO25ei0oUVVygHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            addedToCart: false
          },
          {
            ProductId: "9",
            ProductName: "Plant Protector",
            ProductTittle: "Quick View",
            Shortdiscription: "2 L",
            Longdiscription: "Protects plants from common crop diseases.",
            Mrp: "1200",
            image: "https://th.bing.com/th/id/OIP.pquAGchECy4qZjWowjUyxwHaE0?w=227&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          },
          {
            ProductId: "10",
            ProductName: "Harvest Max",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "Ensures higher yield and better quality crops.",
            Mrp: "780",
            image: "https://m.media-amazon.com/images/I/51TUaeDLiJL._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "11",
            ProductName: "Root Enhancer",
            ProductTittle: "Quick View",
            Shortdiscription: "1 L",
            Longdiscription: "Strengthens root system for sustainable growth.",
            Mrp: "980",
            image: "https://m.media-amazon.com/images/I/71WaAkPN4oL._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "12",
            ProductName: "Eco Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "Eco-friendly spray to prevent pest attacks naturally.",
            Mrp: "490",
            image: "https://m.media-amazon.com/images/I/51xPnupnZ-L._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "13",
            ProductName: "Crop Care Plus",
            ProductTittle: "Quick View",
            Shortdiscription: "5 L",
            Longdiscription: "Complete crop care solution for farmers.",
            Mrp: "4990",
            image: "https://m.media-amazon.com/images/I/51uu0p632dL._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "14",
            ProductName: "Yield Booster",
            ProductTittle: "Quick View",
            Shortdiscription: "250 ml",
            Longdiscription: "Improves fruit setting and increases yield.",
            Mrp: "360",
            image: "https://m.media-amazon.com/images/I/41u9Yf3HTCL._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "15",
            ProductName: "Soil Revive",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Kg",
            Longdiscription: "Improves soil texture and fertility naturally.",
            Mrp: "720",
            image: "https://m.media-amazon.com/images/I/61G6KrX-sIL._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "16",
            ProductName: "Agro Guard",
            ProductTittle: "Quick View",
            Shortdiscription: "2 L",
            Longdiscription: "Protects against a wide range of crop pests.",
            Mrp: "1450",
            image: "https://m.media-amazon.com/images/I/61QS5yNQS7L._AC_UL480_FMwebp_QL65_.jpg",
            addedToCart: false
          },
          {
            ProductId: "17",
            ProductName: "Super Fert",
            ProductTittle: "Quick View",
            Shortdiscription: "500 g",
            Longdiscription: "Rich in nutrients for healthy crop development.",
            Mrp: "430",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402616262/ME/AQ/DN/86983463/vanamitra-super-one-fertilizer-1000x1000.jpg",
            addedToCart: false
          },
          {
            ProductId: "18",
            ProductName: "Organic Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "500 ml",
            Longdiscription: "Completely organic spray to enhance crop immunity.",
            Mrp: "510",
            image: "https://th.bing.com/th/id/OIP.GlvFvlHUDdPR3fKw4VCjLAAAAA?w=119&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          },
          {
            ProductId: "19",
            ProductName: "Crop Defender",
            ProductTittle: "Quick View",
            Shortdiscription: "1 L",
            Longdiscription: "Defends crops against fungal and bacterial infections.",
            Mrp: "1250",
            image: "https://th.bing.com/th/id/OIP.AGJmBo1MTHHCjsrG7eBHaAHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          },
          {
            ProductId: "20",
            ProductName: "Farm Shield",
            ProductTittle: "Quick View",
            Shortdiscription: "5 L",
            Longdiscription: "Ensures complete protection for large farms.",
            Mrp: "4800",
            image: "https://th.bing.com/th/id/OIP.pquAGchECy4qZjWowjUyxwHaE0?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart: false
          }
            ]
          },
          {
            categoryId: "10",
            ProductList: [
           {
            ProductId: "1",
            ProductName: "Advanced Concentrated Auto Shampoo With Colour Protectants",
            ProductTittle: "Quick View",
            Shortdiscription: "Advanced Concentrated Auto Shampoo",
            Longdiscription: "Removes dirt and grime effectively while protecting your car’s paint color and finish.",
            Mrp: "138",
            image: "https://media.modicare.com/ProductCategory/thumb/Auto-Wash_small.jpg"
          },
          {
            ProductId: "2",
            ProductName: "Premium Car Wax Polish",
            ProductTittle: "Quick View",
            Shortdiscription: "Car Wax Polish",
            Longdiscription: "Gives your car a long-lasting shine and protection against dust and UV rays.",
            Mrp: "299",
            image: "https://5.imimg.com/data5/ANDROID/Default/2023/10/349666076/UL/BH/DW/155544611/product-jpeg-500x500.jpg"
          },
          {
            ProductId: "3",
            ProductName: "Windshield Cleaner Concentrate",
            ProductTittle: "Quick View",
            Shortdiscription: "Windshield Cleaner",
            Longdiscription: "Removes dirt, bugs, and grease from the windshield for crystal-clear visibility.",
            Mrp: "175",
            image: "https://m.media-amazon.com/images/I/71Sv4Ed+7BL._SL1500_.jpg"
          },
          {
            ProductId: "4",
            ProductName: "Tire & Rubber Shine Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "Tire Shine Spray",
            Longdiscription: "Restores original black look and adds shine to tires and rubber trims.",
            Mrp: "240",
            image: "https://tse4.mm.bing.net/th/id/OIP.3cd59UHENA1MQleZifzECAHaHa?w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            ProductId: "5",
            ProductName: "Car Interior Dashboard Polish",
            ProductTittle: "Quick View",
            Shortdiscription: "Dashboard Polish",
            Longdiscription: "Protects and shines dashboard surfaces with anti-dust and anti-UV formula.",
            Mrp: "185",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438659540/JE/UF/ZP/10555796/car-interior-dresser-02-500x500.jpg"
          },
          {
            ProductId: "6",
            ProductName: "Car Upholstery Cleaner Foam",
            ProductTittle: "Quick View",
            Shortdiscription: "Upholstery Cleaner",
            Longdiscription: "Deep cleans car seats and fabric upholstery, leaving a fresh fragrance.",
            Mrp: "210",
            image: "https://m.media-amazon.com/images/I/31rONj+L21L._AC_.jpg"
          },
          {
            ProductId: "7",
            ProductName: "Engine Degreaser Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "Engine Degreaser",
            Longdiscription: "Removes oil, grease, and dirt from engine parts for improved performance.",
            Mrp: "320",
            image: "https://th.bing.com/th/id/OIP.R3gyTDFMLwY8Nk8kjXilKQHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "8",
            ProductName: "Car Glass Anti-Fog Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "Glass Anti-Fog Spray",
            Longdiscription: "Prevents fog buildup on car glasses and mirrors for safe driving.",
            Mrp: "150",
            image: "https://th.bing.com/th/id/OIP.diro4U83yOeMn-kw_3iL-AHaGE?w=222&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "9",
            ProductName: "Leather Seat Conditioner",
            ProductTittle: "Quick View",
            Shortdiscription: "Leather Conditioner",
            Longdiscription: "Conditions and restores leather seats, preventing cracks and dryness.",
            Mrp: "370",
            image: "https://m.media-amazon.com/images/I/61MLvHIEqiL._AC_.jpg"
          },
          {
            ProductId: "10",
            ProductName: "Car Scratch Remover Cream",
            ProductTittle: "Quick View",
            Shortdiscription: "Scratch Remover",
            Longdiscription: "Removes light scratches and swirl marks to restore car’s shine.",
            Mrp: "260",
            image: "https://m.media-amazon.com/images/I/71ppG2+3ysL._AC_.jpg"
          },
          {
            ProductId: "11",
            ProductName: "Multipurpose Car Cleaning Cloth",
            ProductTittle: "Quick View",
            Shortdiscription: "Cleaning Cloth",
            Longdiscription: "High-absorbent microfiber cloth for dusting and polishing.",
            Mrp: "90",
            image: "https://th.bing.com/th/id/OIP.q0umrCUu5peHP2croJNsywHaGW?w=214&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "12",
            ProductName: "Car Perfume Gel - Ocean Breeze",
            ProductTittle: "Quick View",
            Shortdiscription: "Car Perfume Gel",
            Longdiscription: "Keeps your car smelling fresh with long-lasting ocean fragrance.",
            Mrp: "199",
            image: "https://m.media-amazon.com/images/I/613iAp3w48L._SL1500_.jpg"
          },
          {
            ProductId: "13",
            ProductName: "High-Gloss Car Shampoo",
            ProductTittle: "Quick View",
            Shortdiscription: "Car Shampoo",
            Longdiscription: "Cleans dirt and grime, leaving behind a glossy finish.",
            Mrp: "180",
            image: "https://th.bing.com/th/id/OIP.QajQn_8LRKTX5f_IfHm25gAAAA?w=130&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "14",
            ProductName: "Wheel Cleaner Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "Wheel Cleaner",
            Longdiscription: "Removes brake dust, grime, and grease from alloy wheels.",
            Mrp: "270",
            image: "https://th.bing.com/th/id/OIP.HyNPh4TCeHNWEeh2gSfJiAHaHa?w=218&h=218&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "15",
            ProductName: "Headlight Restorer Kit",
            ProductTittle: "Quick View",
            Shortdiscription: "Headlight Restorer",
            Longdiscription: "Removes yellowing and cloudiness to restore headlight clarity.",
            Mrp: "450",
            image: "https://th.bing.com/th/id/OIP.bkBVafrJESiCQEr1uDbVOQHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "16",
            ProductName: "Car Carpet Cleaner",
            ProductTittle: "Quick View",
            Shortdiscription: "Carpet Cleaner",
            Longdiscription: "Cleans car mats and carpets, removing dirt and stains.",
            Mrp: "200",
            image: "https://th.bing.com/th/id/OIP.6unDFis0xzU6x0l93WR6bQAAAA?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "17",
            ProductName: "All-in-One Polish & Wax",
            ProductTittle: "Quick View",
            Shortdiscription: "Polish & Wax",
            Longdiscription: "Provides shine and protective wax coating in one step.",
            Mrp: "330",
            image: "https://th.bing.com/th/id/OIP.HpJ4SWChu6vw32x8XaeQ8wHaHa?w=207&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          },
          {
            ProductId: "18",
            ProductName: "Rain Repellent Glass Treatment",
            ProductTittle: "Quick View",
            Shortdiscription: "Rain Repellent",
            Longdiscription: "Repels rainwater from car windshields for safer driving.",
            Mrp: "210",
            image: "https://bigamartusax.s3-accelerate.amazonaws.com/2020/04/716aZ7DjRdL._AC_SL1500_-555x1090.jpg",
          },
          {
            ProductId: "19",
            ProductName: "Car Body Paint Protection Spray",
            ProductTittle: "Quick View",
            Shortdiscription: "Paint Protection Spray",
            Longdiscription: "Protects car paint from UV rays, dust, and scratches.",
            Mrp: "520",
            image: "https://tse4.mm.bing.net/th/id/OIP._LVhIx23uFyUNRMLM_CAcgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
          },
          {
            ProductId: "20",
            ProductName: "Foam Cannon Car Wash Shampoo",
            ProductTittle: "Quick View",
            Shortdiscription: "Foam Wash",
            Longdiscription: "Thick foam formula that cleans deep and enhances car shine.",
            Mrp: "390",
            image: "https://m.media-amazon.com/images/I/51yIsavuWlL._SL1080_.jpg",
          }
            ]
          },
          {
            categoryId: "11",
            ProductList: [
          {
            ProductId: "1",
            ProductName: "Premium Alkaline Pitcher",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Helps improve water pH and provide better hydration.",
            Mrp: "3900",
            image: "https://media.modicare.com/ProductCategory/thumb/AP0003_ZoomImage__230120240221001769050761.webp",
            addedToCart:false
          },
          {
            ProductId: "2",
            ProductName: "Premium Alkaline Pitcher Filter Cartridge",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Replacement filter for alkaline pitcher to ensure fresh and pure water.",
            Mrp: "1650",
            image: "https://media.modicare.com/ProductCategory/thumb/AP0004_ZoomImage__230120240224151367272947.webp",
            addedToCart:false
          },
          {
            ProductId: "3",
            ProductName: "Premium Alkaline Pitcher Demo Kit",
            ProductTittle: "Quick View",
            Shortdiscription: "20ml (10ml x 2)",
            Longdiscription: "Demo kit for testing the alkaline pitcher effectiveness.",
            Mrp: "199",
            image: "https://media.modicare.com/ProductCategory/thumb/AP0005_ZoomImage__23012024022507960430145.webp",
            addedToCart:false
          },
          {
            ProductId: "4",
            ProductName: "Air Purifier 3-In-1 Filter",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "High efficiency filter with 3-in-1 purification technology.",
            Mrp: "4500",
            image: "https://media.modicare.com/ProductCategory/thumb/ModicareFillterbig.jpg",
            addedToCart:false
          },
          {
            ProductId: "5",
            ProductName: "Air Purifier",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Compact purifier that removes dust, allergens, and odors.",
            Mrp: "18999",
            image: "https://media.modicare.com/ProductCategory/thumb/Modicare-Air-Purifier-1_Big.jpg",
            addedToCart:false
          },
          {
            ProductId: "6",
            ProductName: "Foam Cannon Car Wash Shampoo",
            ProductTittle: "Quick View",
            Shortdiscription: "Foam Wash",
            Longdiscription: "Thick foam formula that cleans deep and enhances car shine.",
            Mrp: "390",
            image: "https://th.bing.com/th/id/OIP.sNvKsHAPWdCCNxBDqmN7ywHaFs?w=207&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "7",
            ProductName: "Smart LED Aroma Diffuser",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "LED diffuser with essential oils for a calming lifestyle.",
            Mrp: "2500",
            image: "https://th.bing.com/th/id/OIP.qOri5bypY7v4mpa3XGIMFAHaHa?w=151&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "8",
            ProductName: "Yoga Mat Premium",
            ProductTittle: "Quick View",
            Shortdiscription: "6mm Thick",
            Longdiscription: "Non-slip mat ideal for yoga, pilates, and stretching exercises.",
            Mrp: "1200",
            image: "https://3.bp.blogspot.com/-wYCaHOFZkeQ/W4FQcwGxZTI/AAAAAAAAGN4/zewilCZf5yYsAgt3NdTcKdlwyO1g86B-ACLcBGAs/s1600/What%2BTo%2BLook%2BFor%2BIn%2BA%2BPremium%2BYoga%2BMat.jpg",
            addedToCart:false
          },
          {
            ProductId: "9",
            ProductName: "Copper Water Bottle",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Litre",
            Longdiscription: "Traditional copper bottle with natural health benefits.",
            Mrp: "850",
            image: "https://th.bing.com/th/id/OIP.4Wkmg32prUHMBfkPwcLwCgHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "10",
            ProductName: "Massage Gun",
            ProductTittle: "Quick View",
            Shortdiscription: "Portable",
            Longdiscription: "Deep tissue muscle massage for post-workout recovery.",
            Mrp: "4999",
            image: "https://th.bing.com/th/id/OIP.2THCqRdo2H1rPk_Rato49gHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "11",
            ProductName: "Herbal Tea Pack",
            ProductTittle: "Quick View",
            Shortdiscription: "20 Bags",
            Longdiscription: "Relaxing blend of natural herbs to boost immunity and wellness.",
            Mrp: "299",
            image: "https://th.bing.com/th/id/OIP.Kon7fsercM_wRCsFMuqvmgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "12",
            ProductName: "Digital Air Fryer",
            ProductTittle: "Quick View",
            Shortdiscription: "4.5 Litre",
            Longdiscription: "Oil-free cooking with smart temperature and timer controls.",
            Mrp: "6499",
            image: "https://th.bing.com/th/id/OIP.Ol2Yw5pLII9c7R8ay6BWwgHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "13",
            ProductName: "Insulated Lunch Box",
            ProductTittle: "Quick View",
            Shortdiscription: "3 Container",
            Longdiscription: "Keeps your food hot and fresh for long hours.",
            Mrp: "1450",
            image: "https://th.bing.com/th/id/OIP.612ixUOQ5wbZGKu6DTEKSgHaHo?w=175&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "14",
            ProductName: "Neck Pillow Memory Foam",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Ergonomic neck pillow for travel and restful sleep.",
            Mrp: "999",
            image: "https://th.bing.com/th/id/OIP.bKnR_LwAkbTW8MGE7SETMAHaHa?w=201&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "15",
            ProductName: "Essential Oil Pack",
            ProductTittle: "Quick View",
            Shortdiscription: "6 Bottles",
            Longdiscription: "Set of pure essential oils for relaxation and therapy.",
            Mrp: "1599",
            image: "https://cdn2.stylecraze.com/wp-content/uploads/2020/02/Modicare-Essensual-Instante-Tea-Tree-Oil.jpg",
            addedToCart:false
          },
          {
            ProductId: "16",
            ProductName: "Smart Fitness Band",
            ProductTittle: "Quick View",
            Shortdiscription: "Bluetooth",
            Longdiscription: "Tracks steps, sleep, heart rate, and calories.",
            Mrp: "2799",
            image: "https://th.bing.com/th/id/OIP.so9ErXdB-bhFZD6ejtLr4wHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "17",
            ProductName: "Premium Blanket",
            ProductTittle: "Quick View",
            Shortdiscription: "Single",
            Longdiscription: "Soft and warm blanket for cozy winters.",
            Mrp: "3200",
            image: "https://th.bing.com/th/id/OIP.C6QbNj04XnsmebxHu04ZEQHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "18",
            ProductName: "Ceramic Coffee Mug Set",
            ProductTittle: "Quick View",
            Shortdiscription: "Set of 4",
            Longdiscription: "Stylish and durable mugs for everyday use.",
            Mrp: "899",
            image: "https://th.bing.com/th/id/OIP.pp2610o8iPqhnrnbYCFV7gHaHa?w=180&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "19",
            ProductName: "Rechargeable LED Lamp",
            ProductTittle: "Quick View",
            Shortdiscription: "Portable",
            Longdiscription: "Adjustable brightness lamp for home and study.",
            Mrp: "1299",
            image: "https://th.bing.com/th/id/OIP.eiwcoEx5v_li3ma2jtZKGgHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            addedToCart:false
          },
          {
            ProductId: "20",
            ProductName: "Electric Kettle",
            ProductTittle: "Quick View",
            Shortdiscription: "1.8 Litre",
            Longdiscription: "Quick-boil stainless steel kettle with auto cut-off.",
            Mrp: "1899",
            image: "https://m.media-amazon.com/images/I/51oXH8FKscL._SL1002_.jpg",
           addedToCart:false
          }
            ]
          },
          {
            categoryId: "12",
             ProductList: [
          {
            ProductId: "1",
            ProductName: "Deep Noir Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "A bold and masculine fragrance for lasting impact.",
            Mrp: "2400",
            image: "https://media.modicare.com/ProductCategory/thumb/FG0001_ZoomImage__08022024030330376936550.webp",
            addedToCart: false,
          },
          {
            ProductId: "2",
            ProductName: "Oud Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "An intense oud-based perfume for timeless elegance.",
            Mrp: "2400",
            image: "https://media.modicare.com/ProductCategory/thumb/FG0002_ZoomImage__080220240303521256835119.webp",
            addedToCart: false,
          },
          {
            ProductId: "3",
            ProductName: "Silk Muse Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "A smooth and graceful perfume designed for women.",
            Mrp: "2400",
            image: "https://media.modicare.com/ProductCategory/thumb/FG0003_ZoomImage__08022024030408261059077.webp",
            addedToCart: false,
          },
          {
            ProductId: "4",
            ProductName: "Whisper Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "A soft and elegant feminine fragrance for daily wear.",
            Mrp: "2400",
            image: "https://media.modicare.com/ProductCategory/thumb/FG0004_ZoomImage__080220240304451238717691.webp",
            addedToCart: false,
          },
          {
            ProductId: "5",
            ProductName: "Royal Bloom Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Floral notes blended for sophistication and charm.",
            Mrp: "2400",
            image: "https://tse1.mm.bing.net/th/id/OIP.LvFrkS4im_CkzBIKHJUbsAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "6",
            ProductName: "Mystic Woods Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Woody masculine fragrance with deep earthy tones.",
            Mrp: "2400",
            image: "https://tse1.mm.bing.net/th/id/OIP.t35cgqreCy9CIn0OS3OYSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "7",
            ProductName: "Velour Rouge Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Romantic and passionate fragrance with floral accents.",
            Mrp: "2400",
            image: "https://tse4.mm.bing.net/th/id/OIP.Dpic5zadGeBB3BUte3385wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "8",
            ProductName: "Ocean Breeze Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Fresh aquatic perfume inspired by ocean waves.",
            Mrp: "2400",
            image: "https://cdn.wholesale55.com/wp-content/uploads/2024/08/Ocean-Breeze-EDP-100ml-Unisex-by-Milestone-1.jpg",
            addedToCart: false,
          },
          {
            ProductId: "9",
            ProductName: "Amber Grace Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Warm amber notes with a luxurious feminine touch.",
            Mrp: "2400",
            image: "https://media.karousell.com/media/photos/products/2022/12/26/miniso_perfume_amber_grace_bal_1672061129_21e39873_progressive.jpg",
            addedToCart: false,
          },
          {
            ProductId: "10",
            ProductName: "Citrus Spark Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Energizing citrus fragrance for a refreshing feel.",
            Mrp: "2400",
            image: "https://m.media-amazon.com/images/I/31h000UkoEL._SX300_SY300_QL70_ML2_.jpg",
            addedToCart: false,
          },
          {
            ProductId: "11",
            ProductName: "Rose Dusk Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Romantic rose fragrance with evening elegance.",
            Mrp: "2400",
            image: "https://tse1.mm.bing.net/th/id/OIP.JjAzywndCJJXMGoFNAF8sQHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "12",
            ProductName: "Spice King Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Strong spicy notes for bold and charismatic men.",
            Mrp: "2400",
            image: "https://productosdelujo.cl/cdn/shop/files/EauDeSpiceMark_VictorPourHommeFragranceWorldEdp100MLHombre1_2048x.png?v=1715975102",
            addedToCart: false,
          },
          {
            ProductId: "13",
            ProductName: "Velvet Orchid Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Orchid-inspired fragrance with soft floral essence.",
            Mrp: "2400",
            image: "https://acdn.mitiendanube.com/stores/001/659/388/products/very-velvet-orchid-011-e1b2f983614e79208616793973016214-1024-1024.jpg",
            addedToCart: false,
          },
          {
            ProductId: "14",
            ProductName: "Cedar Woods Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Rich cedar notes for a grounded masculine aura.",
            Mrp: "2400",
            image: "https://tse1.mm.bing.net/th/id/OIP.OfracKbnyDShiKb6FNa-WgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "15",
            ProductName: "Golden Charm Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Charming blend of floral and fruity feminine notes.",
            Mrp: "2400",
            image: "https://tse3.mm.bing.net/th/id/OIP.aUw0pg4BeSu5zxi0Pj55PgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "16",
            ProductName: "Leather Intense Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Rugged leather fragrance for strong personalities.",
            Mrp: "2400",
            image: "https://tse3.mm.bing.net/th/id/OIP.X6FrKD-PUMoADX7iVSCbqAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "17",
            ProductName: "Moonlight Muse Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "A dreamy feminine scent inspired by moonlight nights.",
            Mrp: "2400",
            image: "https://tse3.mm.bing.net/th/id/OIP.ynjfcypwxiw8RjR_cwm7JQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "18",
            ProductName: "Fresh Mint Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Mint-infused fragrance with crisp freshness.",
            Mrp: "2400",
            image: "https://tse1.explicit.bing.net/th/id/OIP.ycU_b50qh1L8OqUBlLWQDgHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "19",
            ProductName: "Royal Pearl Femme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Delicate fragrance with pearl-like sophistication.",
            Mrp: "2400",
            image: "https://tse2.mm.bing.net/th/id/OIP.onbF-5PK2KgMYi09om_eJwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          },
          {
            ProductId: "20",
            ProductName: "Dark Shadow Homme EDP (Perfume)",
            ProductTittle: "Quick View",
            Shortdiscription: "100 ml",
            Longdiscription: "Mysterious and bold masculine fragrance for evenings.",
            Mrp: "2400",
            image: "https://tse1.mm.bing.net/th/id/OIP.mmM-LdHxpvq6-D7BXtr-_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            addedToCart: false,
          }
            ]
          },
          {
            categoryId: "13",
             ProductList: [
          {
            ProductId: "1",
            ProductName: "10.25-Inch Black Coloured Rim Quartz Clock",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Elegant black rim wall clock with quartz movement for accurate timekeeping.",
            Mrp: "500",
            image: "https://media.modicare.com/ProductCategory/thumb/WAT065_ZoomImage__03092024022745430414776.webp",
            addedToCart: false
          },
          {
            ProductId: "2",
            ProductName: "Collar T-Shirt",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Stylish and comfortable collar t-shirt perfect for casual wear.",
            Mrp: "900",
            image: "https://media.modicare.com/ProductCategory/thumb/MM0011_ZoomImage__081220230328521291477395.webp",
            addedToCart: false
          },
          {
            ProductId: "3",
            ProductName: "Modicare Premium Festive Bags",
            ProductTittle: "Quick View",
            Shortdiscription: "3 Unit",
            Longdiscription: "Premium festive bags ideal for gifting on special occasions.",
            Mrp: "199",
            image: "https://media.modicare.com/ProductCategory/thumb/600951_ZoomImage__201020230936291586107281.webp",
            addedToCart: false
          },
          {
            ProductId: "4",
            ProductName: "Gifting Bag",
            ProductTittle: "Quick View",
            Shortdiscription: "3 Unit",
            Longdiscription: "Durable and stylish gifting bags suitable for all occasions.",
            Mrp: "100",
            image: "https://media.modicare.com/ProductCategory/thumb/600950-Seasons-Greeting-Bag-Back_Big.webp",
            addedToCart: false
          },
          {
            ProductId: "5",
            ProductName: "100 PPV Badges",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "High-quality PPV badges designed for events and branding.",
            Mrp: "15",
            image: "https://media.modicare.com/ProductCategory/thumb/PPV001_ZoomImage__220920230243551270602494.jpg",
            addedToCart: false
          },
          {
            ProductId: "6",
            ProductName: "Waterman Pen",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Premium Waterman pen with sleek design for smooth writing experience.",
            Mrp: "4000",
            image: "https://media.modicare.com/ProductCategory/thumb/MM0010_ZoomImage__220920230242511511396766.jpg",
            addedToCart: false
          },
          {
            ProductId: "7",
            ProductName: "SMAP Parker Pen",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Stylish Parker pen designed for everyday use with elegance.",
            Mrp: "500",
            image: "https://media.modicare.com/ProductCategory/thumb/MM0009_ZoomImage__220920230241571410026586.jpg",
            addedToCart: false
          },
          {
            ProductId: "8",
            ProductName: "Canvas Cap",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Trendy canvas cap providing comfort and protection under the sun.",
            Mrp: "450",
            image: "https://media.modicare.com/ProductCategory/thumb/MM0008_ZoomImage__220920230241112008660805.jpg",
            addedToCart: false
          },
          {
            ProductId: "9",
            ProductName: "Effective English Learning Program - Beginner",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Course",
            Longdiscription: "Beginner-level English program to improve vocabulary and communication.",
            Mrp: "1200",
            image: "https://media.modicare.com/ProductCategory/thumb/01_B.JPG",
            addedToCart: false
          },
          {
            ProductId: "10",
            ProductName: "Effective English Learning Program - Intermediate",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Course",
            Longdiscription: "Intermediate English learning program to strengthen speaking skills.",
            Mrp: "1350",
            image: "https://media.modicare.com/ProductCategory/thumb/02_B.JPG",
            addedToCart: false
          },
          {
            ProductId: "11",
            ProductName: "Effective English Learning Program - Advanced",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Course",
            Longdiscription: "Advanced English program designed to polish fluency and writing skills.",
            Mrp: "1500",
            image: "https://media.modicare.com/ProductCategory/thumb/03_B.JPG",
            addedToCart: false
          },
          {
            ProductId: "12",
            ProductName: "Effective English Learning Program - Bundle",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Course",
            Longdiscription: "Comprehensive English learning program including all levels.",
            Mrp: "4000",
            image: "https://media.modicare.com/ProductCategory/thumb/04_B.jpg",
            addedToCart: false
          },
          {
            ProductId: "13",
            ProductName: "Carbon Fiber Travel-Cum-Laptop Bag",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Durable and stylish carbon fiber travel and laptop bag for professionals.",
            Mrp: "4999",
            image: "https://media.modicare.com/ProductCategory/thumb/TRV004_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "14",
            ProductName: "Multiutility Toiletry Bag",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Compact and spacious toiletry bag designed for travel convenience.",
            Mrp: "1295",
            image: "https://media.modicare.com/ProductCategory/thumb/TRV002_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "15",
            ProductName: "Multiutility Smart Sling Bag",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Trendy and versatile sling bag with multiple compartments.",
            Mrp: "995",
            image: "https://media.modicare.com/ProductCategory/thumb/TRV003_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "16",
            ProductName: "Laptop Bag",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Spacious laptop bag with cushioned compartments for protection.",
            Mrp: "2499",
            image: "https://media.modicare.com/ProductCategory/thumb/TRV001_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "17",
            ProductName: "12 Inch Black Colored Rim Quartz Wall Clock",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Classic 12-inch wall clock with black rim and quartz movement.",
            Mrp: "750",
            image: "https://media.modicare.com/ProductCategory/thumb/Modicare-Wall-Clock-12-Inch-Glod-WAT029_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "18",
            ProductName: "12 Inch Roulette Design Quartz Wall Clock",
            ProductTittle: "Quick View",
            Shortdiscription: "1 Unit",
            Longdiscription: "Unique roulette design wall clock with precise quartz movement.",
            Mrp: "850",
            image: "https://media.modicare.com/ProductCategory/thumb/Modicare-Wall-Clock-12-Inch-Roulette-WAT032_Big.jpg",
            addedToCart: false
          },
          {
            ProductId: "19",
            ProductName: "Modicare Premium Agarbatti - Kewda",
            ProductTittle: "Quick View",
            Shortdiscription: "84 Unit",
            Longdiscription: "Fragrant Kewda agarbatti sticks for a refreshing environment.",
            Mrp: "72",
            image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_04022021010202467592102.jpg",
            addedToCart: false
          },
          {
            ProductId: "20",
            ProductName: "Modicare Premium Agarbatti - Jasmine",
            ProductTittle: "Quick View",
            Shortdiscription: "84 Unit",
            Longdiscription: "Premium jasmine-scented agarbatti sticks for calming ambiance.",
            Mrp: "72",
            image: "https://media.modicare.com/ProductCategory/thumb/ProductCategory_04022021125850658396439.jpg",
            addedToCart: false
          }
            ]
          }
    ],
    cartByCategory:{}
},
// initialState:[1,2,3,4,5],
   reducers: {
   selectProduct: (state, action) => {
  const { categoryId, productId } = action.payload;
  // console.log("actionredux",categoryId,productId)
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
    // console.log("redxuremovecart",categoryId,productId)
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
