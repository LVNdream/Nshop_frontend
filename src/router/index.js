import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Menfashion from "@/views/MenFashion.vue";
import Cart from "@/views/Cart.vue";
import Payment from "@/views/Payment.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import CustomerOrder from "@/views/CustomerOrder.vue";
import Dashboard from "@/views/Dashboard.vue";
import UpdateProduct from "@/views/UpdateProduct.vue";
import UpdateOrder from "@/views/UpdateOrder.vue";
import AddProduct from "@/views/AddProduct.vue";
import FormEdit from "@/views/FormEdit.vue"
const routes = [
    {
        path: "/nshop",
        name: "home",
        component: Home,
    },
    {
        path: "/nshop/menfashion",
        name: "menfashion",
        component: Menfashion,
    },
    {
        path: "/nshop/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/nshop/payment",
        name: "payment",
        component: Payment,
    },
    {
        path: "/nshop/register",
        name: "register",
        component: Register,
    },
    {
        path: "/nshop/login",
        name: "login",
        component: Login,
    },
    {
        path: "/nshop/customerorder",
        name: "customerorder",
        component: CustomerOrder,
        meta: { requiresAuth: true },
    },
    {
        path: "/nshop/admin",
        name: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/nshop/admin/updateProduct",
        name: "updateproduct",
        component: UpdateProduct,
        meta: { requiresAuth: true },
    },
    {
        path: "/nshop/admin/updateOrder",
        name: "updateorder",
        component: UpdateOrder,
        meta: { requiresAuth: true },
    },
    {
        path: "/nshop/admin/addProduct",
        name: "addproduct",
        component: AddProduct,
        meta: { requiresAuth: true },
    },
    {
        path: "/nshop/admin/FormEditProduct/:id",
        name: "formeditproduct",
        component: FormEdit,
        meta: { requiresAuth: true },
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;