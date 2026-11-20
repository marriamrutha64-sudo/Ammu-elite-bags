const { createApp } = Vue;

createApp({

    data() {

        return {

            cart: []

        };

    },

    computed: {

        subtotal() {

            return this.cart.reduce((total, item) => {

                return total + (item.price * item.quantity);

            }, 0);

        },

        discount() {

            return this.cart.reduce((total, item) => {

                const itemDiscount =
                    (item.price * item.offer / 100) * item.quantity;

                return total + itemDiscount;

            }, 0);

        },

        shipping() {

            return this.subtotal >= 999 ? 0 : 99;

        },

        gst() {

            return Math.round((this.subtotal - this.discount) * 0.18);

        },

        grandTotal() {

            return (this.subtotal - this.discount) + this.shipping + this.gst;

        }

    },

    methods: {

        loadCart() {

            const savedCart = JSON.parse(localStorage.getItem("cart"));

            if (savedCart) {

                this.cart = savedCart;

            }

        },

        saveCart() {

            localStorage.setItem("cart", JSON.stringify(this.cart));

        },

        increaseQty(item) {

            item.quantity++;

            this.saveCart();

        },

        decreaseQty(item) {

            if (item.quantity > 1) {

                item.quantity--;

            } else {

                this.removeItem(item.id);

            }

            this.saveCart();

        },

        removeItem(id) {

            this.cart = this.cart.filter(product => product.id !== id);

            this.saveCart();

        },

        clearCart() {

            if (confirm("Are you sure you want to clear your cart?")) {

                this.cart = [];

                localStorage.removeItem("cart");

            }

        },

        checkout() {

            window.location.href = "billing.html";

        }

    },

    mounted() {

        this.loadCart();

    }

}).mount("#cartApp");