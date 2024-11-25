import { createRouter, createWebHistory } from "vue-router"
import Default from "./components/layout/Default.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "withoutLayout",
    //     component: Default,
    //     redirect: "/",
    //     children: [
    //         {
    //             path: "",
    //             name: "",
    //             component: 
    //         }
    //     ]
    // },
    {
        path: "/",
        name: "withLayout",
        component: Default,
        redirect: "/",
        children: [
            {
                path: "/",
                name: "HomePage",
                component: () => import("./components/pages/HomePage.vue"),
            },
            {
                path: "/about",
                name: "AboutPage",
                component: () => import("./components/pages/About.vue"),
            },
            {
                path: "/account",
                name: "AccountPage",
                component: () => import("./components/pages/Account.vue"),
            },
            {
                path: "/cart",
                name: "CartPage",
                component: () => import("./components/pages/Cart.vue"),
            },
            {
                path: "/checkOut",
                name: "CheckOutPage",
                component: () => import("./components/pages/CheckOut.vue"),
            },
            {
                path: "/contact",
                name: "ContactPage",
                component: () => import("./components/pages/Contact.vue"),
            },
            {
                path: "/login",
                name: "LoginPage",
                component: () => import("./components/pages/Login.vue"),
            },
            {
                path: "/productDetail",
                name: "ProductDetailPage",
                component: () => import("./components/pages/ProductDetail.vue"),
            },
            {
                path: "/productsList",
                name: "ProductsListPage",
                component: () => import("./components/pages/ProductsList.vue"),
            },
            {
                path: "/signup",
                name: "SignupPage",
                component: () => import("./components/pages/SignUp.vue"),
            },
            {
                path: "/wishlist",
                name: "WishlistPage",
                component: () => import("./components/pages/Wishlist.vue"),
            },
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});