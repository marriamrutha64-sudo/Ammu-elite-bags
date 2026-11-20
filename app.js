const { createApp } = Vue;

createApp({

data(){

return{

products: products,

search:"",

selectedCategory:"All",

selectedProduct:null,

selectedVariant:null,

wishlist:[],

cart: JSON.parse(localStorage.getItem("cart")) || [],

categories:[
"Handbags",
"Backpacks",
"Sling Bags",
"Laptop Bags",
"Travel Bags",
"Tote Bags",
"Wallets & Purses",
"School Bags",
"Office Bags",
"Duffel Bags",
"Clutches",
"Crossbody Bags"
]

};

},

computed:{

filteredProducts(){

return this.products.filter(product=>{

const matchSearch=

product.name.toLowerCase().includes(
this.search.toLowerCase()
);

const matchCategory=

this.selectedCategory==="All" ||

product.category===this.selectedCategory;

return matchSearch && matchCategory;

});

},

discountPrice(){

if(!this.selectedProduct) return 0;

return (

this.selectedProduct.price-

(this.selectedProduct.price*

this.selectedProduct.offer/100)

).toFixed(0);

}

},

methods:{

showDetails(product){

this.selectedProduct=product;

if(product.isParent && product.variants){

this.selectedVariant=null;

}else{

this.selectedVariant=null;

}

const modal=new bootstrap.Modal(

document.getElementById("productModal")

);

modal.show();
},

selectVariant(variant){

this.selectedVariant=variant;

},

addToCart(product){

const item=this.cart.find(

p=>p.id===product.id

);

if(item){

item.qty++;

}else{

this.cart.push({

...product,

qty:1

});

}

localStorage.setItem(

"cart",

JSON.stringify(this.cart)

);

alert(product.name+" added to cart.");

},

buyNow(product){

this.addToCart(product);

window.location.href="billing.html";

},

addToWishlist(product){

const exists=this.wishlist.find(

p=>p.id===product.id

);

if(!exists){

this.wishlist.push(product);

alert(product.name+" added to Wishlist ❤️");

}

},

increaseQty(item){

item.qty++;

this.saveCart();

},

decreaseQty(item){

if(item.qty>1){

item.qty--;

}else{

this.removeItem(item);

}

this.saveCart();

},

removeItem(item){

this.cart=this.cart.filter(

p=>p.id!==item.id

);

this.saveCart();

},

clearCart(){

if(confirm("Are you sure you want to clear the cart?")){

this.cart=[];

this.saveCart();

}

},

saveCart(){

localStorage.setItem(

"cart",

JSON.stringify(this.cart)

);

}

}

}).mount("#app");