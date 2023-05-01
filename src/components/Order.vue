<template>
    <div>
        <div class="inforOrder">
            <h5 class="idOrder">Mã đơn hàng: {{ order.id }}</h5>
            <div class="inforOrder--customer">
                <p>Ngày mua: {{ order.thoigian }}</p>
                <p>Họ và tên: {{ order.tenkh }}</p>
                <p>Địa chỉ giao: {{ order.diachi }}</p>
                <p>Số điện thoại: {{ order.sodienthoai }}</p>
            </div>
            <h6 class="statusOrder">Trạng thái đơn hàng: <b class="trangthai">{{ order.trangthai }}</b></h6>


            <div v-for="product in order.products" class="d-flex justify-content-between mb-2 mr-5 listItem">
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
                <div :class="{none_formDelete:order.trangthai!='Cho xac nhan'}">
                    <form class="">
                        <input type="text" class="form-control" name="idhd" :value="order.id" hidden>
                        <div @click="delelteOrder(order.id, order.trangthai)" class="btn btn-danger btnCanlce_HoaDon">HỦY
                            ĐƠN</div>
                    </form>
                </div>
            </div>
            <hr>
        </div>

    </div>
</template>
<script>
import PaymentService from "../services/payment.servicce";
export default {
    data() {
        return {
            inforUser: '',
        }
    },

    props: {
        order: { type: Object, required: true }
    },
    methods: {
        async delelteOrder(idhd, trangthai) {
            if (trangthai != 'Cho xac nhan') {
                alert("Don hang dang duoc giao, khong the huy don")
            }
            else {
                try {
                    const entity = {
                        idhd: idhd
                    }
                    // console.log(idhd,trangthai)
                    const resultDeleteOrder = await PaymentService.deleteOrder(entity);
                    alert(resultDeleteOrder);
                    this.$router.go(this.$router.currentRoute);
                } catch (error) {
                    console.log(error);
                }
            }
        },
        getInforUser() {
            if (JSON.parse(localStorage.getItem('Users'))) {
                this.inforUser = JSON.parse(localStorage.getItem('Users'));
                console.log(this.inforUser);
            }
        }
    },
    mounted() {
        this.getInforUser()
    }

}
</script>
<style scoped>
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
</style>