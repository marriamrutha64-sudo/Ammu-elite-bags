const { createApp } = Vue;

createApp({

data() {
    return {

        customer: {
            name: "",
            phone: "",
            email: "",
            address: ""
        },

        cart: JSON.parse(localStorage.getItem("cart")) || [],

        discountPercent: 10,

        gstPercent: 18

    };
},

computed: {

    subtotal() {

        return this.cart.reduce((total, item) => {
            return total + (item.price * item.qty);
        }, 0);

    },

    discount() {

        return (this.subtotal * this.discountPercent) / 100;

    },

    taxableAmount() {

        return this.subtotal - this.discount;

    },

    gst() {

        return (this.taxableAmount * this.gstPercent) / 100;

    },

    grandTotal() {

        return this.taxableAmount + this.gst;

    }

},

methods: {

    increaseQty(item) {

        item.qty++;

        this.saveCart();

    },

    decreaseQty(item) {

        if(item.qty > 1){

            item.qty--;

        }else{

            this.removeItem(item);

        }

        this.saveCart();

    },

    removeItem(item){

        this.cart = this.cart.filter(p => p.id !== item.id);

        this.saveCart();

    },

    saveCart(){

        localStorage.setItem("cart", JSON.stringify(this.cart));

    },

    placeOrder(){

        if(
            this.customer.name==="" ||
            this.customer.phone==="" ||
            this.customer.address==="")
        {

            alert("Please fill all customer details.");

            return;

        }

        const order={

            customer:this.customer,

            items:this.cart,

            subtotal:this.subtotal,

            discount:this.discount,

            gst:this.gst,

            grandTotal:this.grandTotal,

            date:new Date().toLocaleString()

        };

        localStorage.setItem("lastOrder", JSON.stringify(order));

        fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Order request failed");
            }

            return response.json();
        })
        .then(savedOrder => {
            localStorage.setItem("lastOrder", JSON.stringify(savedOrder));
            alert("Order Placed Successfully!");
        })
        .catch(() => {
            alert("Order saved on this device. Start the backend to sync it online.");
        });

    },

    printBill(){

        window.print();

    },

    clearCart(){

        if(confirm("Clear all cart items?")){

            this.cart=[];

            this.saveCart();

        }

    }

}

}).mount("#billingApp");