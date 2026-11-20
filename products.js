const products = [

{
    id: 1,
    name: "Leather Handbag",
    category: "Handbags",
    brand: "Ammu Elite",
    material: "Premium Leather",
    size: "Medium",
    rating: 4.8,
    price: 2499,
    offer: 10,
    stock: 20,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Black","Brown","Pink","Red"],

    description:
    "Premium leather handbag with spacious compartments. Perfect for office, shopping and daily use.",

    image: "lather.jpg"
},

{
    id: 2,
    name: "Travel Backpack",
    category: "Backpacks",
    brand: "Sky Travel",
    material: "Water Resistant Polyester",
    size: "Large",
    rating: 4.7,
    price: 3299,
    offer: 15,
    stock: 12,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Blue","Black","Grey"],

    description:
    "Large travel backpack with laptop compartment and water-resistant material.",

    image: "images.jpg"
},

{
    id: 3,
    name: "Office Laptop Bag",
    category: "Laptop Bags",
    brand: "Office Pro",
    material: "Canvas",
    size: "15.6 Inch",
    rating: 4.6,
    price: 2999,
    offer: 12,
    stock: 18,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Black","Brown"],

    description:
    "Professional laptop bag suitable for office and college.",

    image: "M.jpg"
},

{
    id: 4,
    name: "Classic Leather Handbag",
    category: "Handbags",
    brand: "Ammu Fashion",
    material: "Leather",
    size: "Large",
    rating: 4.9,
    price: 3499,
    offer: 20,
    stock: 15,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Black","Cream","Brown"],

    description:
    "Elegant leather handbag with premium stitching and stylish finish.",

    image: "lather.jpg",
    
    isParent: true,
    
    variants: [
        {
            id: 40,
            name: "Classic Leather Handbag - Tote",
            type: "Tote",
            price: 3499,
            offer: 20,
            stock: 10,
            colors: ["Black","Cream","Brown"],
            description: "Spacious tote style leather handbag perfect for work and shopping.",
            image: "crossbag.jpg"
        },
        {
            id: 41,
            name: "Classic Leather Handbag - Crossbody",
            type: "Crossbody",
            price: 2999,
            offer: 25,
            stock: 12,
            colors: ["Black","Brown","Red"],
            description: "Elegant crossbody leather handbag for on-the-go convenience.",
            image: "crossbody.jpg"
        },
        {
            id: 42,
            name: "Classic Leather Handbag - Shoulder",
            type: "Shoulder",
            price: 3699,
            offer: 18,
            stock: 8,
            colors: ["Cream","Black","Pink"],
            description: "Classic shoulder style leather handbag with adjustable strap.",
            image: "ar.jpg"
        },
        {
            id: 43,
            name: "Classic Leather Handbag - Satchel",
            type: "Satchel",
            price: 4099,
            offer: 15,
            stock: 6,
            colors: ["Black","Brown"],
            description: "Premium satchel style leather handbag with structured design.",
            image: "mm.jpg"
        }
    ]
},

{
    id: 5,
    name: "Premium Travel Bag",
    category: "Travel Bags",
    brand: "Travel King",
    material: "Polyester",
    size: "XL",
    rating: 4.5,
    price: 3999,
    offer: 18,
    stock: 10,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Blue","Black"],

    description:
    "Premium travel bag with multiple storage compartments.",

    image: "vasu.jpg"
},

{
    id: 6,
    name: "Executive Office Bag",
    category: "Office Bags",
    brand: "Business Pro",
    material: "PU Leather",
    size: "15 Inch",
    rating: 4.7,
    price: 2799,
    offer: 8,
    stock: 22,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Brown","Black"],

    description:
    "Executive office bag designed for professionals.",

    image: "ak.jpg"
},

{
    id: 7,
    name: "City Sling Bag",
    category: "Sling Bags",
    brand: "Urban Chic",
    material: "PU Leather",
    size: "Small",
    rating: 4.6,
    price: 1899,
    offer: 10,
    stock: 25,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Black","Cream","Beige"],

    description:
    "Compact sling bag for daily outings and hands-free convenience.",

    image: "ac.jpg"
},

{
    id: 8,
    name: "Canvas Tote Bag",
    category: "Tote Bags",
    brand: "Ammu Everyday",
    material: "Canvas",
    size: "Large",
    rating: 4.5,
    price: 1599,
    offer: 12,
    stock: 30,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Navy","White","Olive"],

    description:
    "Stylish canvas tote bag built for shopping, work, and daily essentials.",

    image: "ag.jpg"
},

{
    id: 9,
    name: "Luxury Wallet Set",
    category: "Wallets & Purses",
    brand: "Ammu Signature",
    material: "Genuine Leather",
    size: "Standard",
    rating: 4.8,
    price: 1299,
    offer: 15,
    stock: 40,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Brown","Black","Pink"],

    description:
    "Elegant wallet and purse set with premium finish and organized compartments.",

    image: "ad.jpg"
},

{
    id: 10,
    name: "Student Backpack",
    category: "School Bags",
    brand: "Campus Ready",
    material: "Polyester",
    size: "Medium",
    rating: 4.4,
    price: 2199,
    offer: 14,
    stock: 28,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Blue","Purple","Black"],

    description:
    "Durable school backpack with multiple compartments for books and gadgets.",

    image: "as.jpg"
},

{
    id: 11,
    name: "Adventure Duffel Bag",
    category: "Duffel Bags",
    brand: "Trip Gear",
    material: "Nylon",
    size: "Large",
    rating: 4.7,
    price: 3499,
    offer: 18,
    stock: 18,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Black","Green","Grey"],

    description:
    "Spacious duffel bag for gym, travel, and weekend adventures.",

    image: "aa.jpg"
},

{
    id: 12,
    name: "Evening Clutch",
    category: "Clutches",
    brand: "Ammu Glam",
    material: "Synthetic Leather",
    size: "Compact",
    rating: 4.9,
    price: 1499,
    offer: 20,
    stock: 35,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Gold","Black","Maroon"],

    description:
    "Elegant clutch bag for evening parties, weddings, and festive events.",

    image: "ch.jpg"
},

{
    id: 13,
    name: "Everyday Crossbody",
    category: "Crossbody Bags",
    brand: "Street Style",
    material: "Waterproof Fabric",
    size: "Medium",
    rating: 4.6,
    price: 1999,
    offer: 11,
    stock: 26,
    shipping: "Free Shipping",
    returnPolicy: "7 Days Easy Return",

    colors: ["Camel","Black","Red"],

    description:
    "Lightweight crossbody bag designed for everyday movement and style.",

    image: "crossbag.jpg"
}

];