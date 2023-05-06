<template>
    <div>
        <Header></Header>

        <div>
            <div id="aritcle__infor" class="container">
                <div v-if="this.orders.isEmpty">
                    Bạn chưa có đơn hàng
                </div>

                <div v-for="order in this.orders.arrayOrders" v-else>
                    <Order :order="order"></Order>
                </div>


               

            </div>

        </div>

        <Footer></Footer>
    </div>
</template>
<script>
import PaymentService from "../services/payment.servicce";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Order from '../components/Order.vue'
export default {
    data() {
        return {
            idhdDelete: '',
            orders: [],
            email: ''
        }
    },
    components: {
        Header,
        Footer,
        Order,
    },
    methods: {
        getEmail() {
            if (JSON.parse(localStorage.getItem('Users')) != null) {
                this.email = JSON.parse(localStorage.getItem('Users')).email;
            }
        },
        getOrders() {
            // console.log('da lay Email:' + this.email)
        },
        async getAllOrders(email) {
            try {
                this.orders = await PaymentService.getAllOrder(email);
                console.log(this.orders);
            } catch (error) {
                console.log(error);
            }
        },
        deleteHD() {
            // console.log(this.idhdDelete)
        }
    },
    mounted() {
        this.getEmail()
        this.getAllOrders(this.email)
    },
    created() {

    }
}

</script>
<style scoped>
#aritcle__infor {
    border: 3px solid #c49d5a;
    width: 50%;
    height: 600px;
    padding: 20px;
    overflow: scroll;
}


</style>