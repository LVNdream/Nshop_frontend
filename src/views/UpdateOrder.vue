<template>
    <div>

        <div>
            <Header></Header>
        </div>

        <div>

            <div id="aritcle__infor" class="container">
                <div class="d-flex filter_order mb-2">
                    <form @submit.prevent="submitFilterOrderByDate()">
                        <input type="date" v-model="this.start" name="start">
                        <input type="date" v-model="this.end" name="end">
                        <button class="btn-design btn-info btn-sizebtn">Tìm</button>
                    </form>
                </div>

                <div v-if="allOrders.isEmpty">Bạn chưa có hóa đơn</div>

                <div v-for="order in allOrders.arrayOrders" v-else>
                    <div>
                        <div class="inforOrder">
                            <h5 class="idOrder">Mã đơn hàng: {{ order.id }}</h5>
                            <div class="inforOrder--customer">
                                <p>Ngày mua: {{ order.thoigian }}</p>
                                <p>Họ và tên: {{ order.tenkh }}</p>
                                <p>Địa chỉ giao: {{ order.diachi }}</p>
                                <p>Số điện thoại: {{ order.sodienthoai }}</p>
                            </div>

                            <div class="mb-2">
                                <h6 class="statusOrder">Trạng thái đơn hàng: {{ order.trangthai }}
                                    <!-- <i class="fa-solid fa-pen"></i> -->
                                    <!-- dieu chinh trang thai hoa don -->
                                </h6>

                                <div>
                                    <button class="btn btn-primary" type="button" data-toggle="collapse"
                                        :data-target='"#collapse" + order._id' aria-expanded="false"
                                        :aria-controls='"collapse" + order._id'>
                                        Điêu chỉnh trạng thái hóa đơn <i class="fa-solid fa-pen"></i>
                                    </button>
                                    <div class="collapse mt-2" :id='"collapse" + order._id'>
                                        <div class="card card-body">
                                            <form @submit.prevent="this.submitUpdateOrder(order._id, order.trangthai)">
                                                <div>
                                                    <p> Trạng thái đơn hàng:</p>
                                                    <div class="d-flex optionStatusUpdate">
                                                        <div>
                                                            <input v-model="order.trangthai" type="radio"
                                                                placeholder="name@example.com" name="trangthai"
                                                                value="Cho xac nhan">
                                                            <label class="form-label">Chờ xác nhận</label>
                                                        </div>
                                                        <div>
                                                            <input v-model="order.trangthai" type="radio"
                                                                placeholder="name@example.com" name="trangthai"
                                                                value="Dang giao">
                                                            <label class="form-label">Đang giao</label>
                                                        </div>
                                                        <div>
                                                            <input v-model="order.trangthai" type="radio"
                                                                placeholder="name@example.com" name="trangthai"
                                                                value="Giao hang thanh cong">
                                                            <label class="form-label">Giao hàng thành công</label>
                                                        </div>
                                                        <button class="btn btn-danger" type="submit">Cập nhật</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div v-for="product in order.products"
                                class="d-flex justify-content-between mb-2 mr-5 listItem">
                                <div>
                                    <p>Sản phẩm: {{ product.tensp }}, {{ product.size }}, {{ product.soluong }} X
                                        {{ product.price }} = {{ product.totalprice }}</p>
                                </div>
                                <div>
                                    <img style="height: 50px ; withd:50px" :src='"/src/assets/" + product.picture'>
                                </div>
                            </div>

                            <div class="d-flex justify-content-around mt-3">
                                <p class="tongtien">Tổng tiền:{{ order.tongtien }}</p>
                                <div :class="{ none_formDelete: order.trangthai != 'Cho xac nhan' }">
                                    <form class="">
                                        <input type="text" class="form-control" name="idhd" :value="order.id" hidden>
                                        <div class="btn btn-danger btnCanlce_HoaDon">HỦY
                                            ĐƠN</div>
                                    </form>
                                </div>
                            </div>
                            <hr>
                        </div>

                    </div>
                </div>


                <div v-if="this.allOrders == true">
                    Bạn chưa có đơn hàng
                </div>

            </div>

        </div>

        <div>
            <Footer></Footer>
        </div>

    </div>
</template>

<script>
import PaymentService from "../services/payment.servicce";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { all } from "axios";
export default {

    components: {
        Header,
        Footer,
    },
    data() {
        return {
            allOrders: {},
            // statusUpdate: ''
            start:'',
            end:''
        }
    },
    methods: {
        async getAllOrders() {
            try {
                // console.log('123232');
                this.allOrders = await PaymentService.getAllOrderAdmin();
                // console.log(this.allOrders);
            } catch (error) {
                console.log(error);
            }
        },
        async submitUpdateOrder(id, trangthai) {
            const dataUpdate = {
                id: id,
                trangthai: trangthai
            }
            try {
                // consoe.log('123232');
                const updateOrder = await PaymentService.updateOrderAdmin(dataUpdate);
                // console.log(this.allOrders);
                alert(updateOrder.message);
                this.$router.go(this.$router.currentRoute)
            } catch (error) {
                console.log(error);
            }
            console.log(dataUpdate);
        },
        async submitFilterOrderByDate(){
            const data={
                start:this.start,
                end:this.end
            }
            try {
                const allorderByFiltterDate = await PaymentService.fiterOrderByDate(data);
                console.log(allorderByFiltterDate);
                this.allOrders=allorderByFiltterDate
                console.log(this.allOrders)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getAllOrders()
    }

}

</script>

<style scoped>
/* css khung */
#aritcle__infor {
    border: 3px solid #c49d5a;
    width: 50%;
    height: 600px;
    padding: 20px;
    overflow: scroll;
}

/* Css cho cac phan tu */
.idOrder {
    margin-bottom: 20px;
}

.inforOrder--customer p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
}

.statusOrder {
    margin: 15px 0px;
    color: #015eff;
}

.inforOrder {
    margin-bottom: 50px;
    border: 1px dashed black;
    padding: 10px;
}

.inforProduct p {
    margin-bottom: 5px;
    font-size: 15px;
}

.listItem p {
    font-size: 15px;
}

.tongtien {
    font-size: 17px;
    font-weight: 400;
    color: red;
}

.none_formDelete {
    display: none;
}

.optionStatusUpdate {
    gap: 25px;
}

.flexStatusUpdate {
    gap: 25px;
}
</style>

