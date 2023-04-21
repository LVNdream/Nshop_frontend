<template>
    <div>
        <div>
            <Header></Header>
        </div>

        <div>

            <div class="float-end">

                <div class="dropdown">

                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <router-link to="/nshop/admin/updateOrder">
                            <div class="dropdown-item"> Cập nhật đơn hàng </div>
                        </router-link>
                        <router-link to="/nshop/admin/updateProduct">
                            <div class="dropdown-item">Cập nhật sản phẩm</div>
                        </router-link>
                        <router-link to="/nshop/admin/addProduct">
                            <div class="dropdown-item"> Thêm sản phẩm</div>
                        </router-link>
                        <div @click="logOutUser()" class="dropdown-item" :class="{ 'dropdownHidden': !isLoginUser }"> Đăng
                            xuất Admin
                        </div>
                    </div>

                </div>

            </div>

            <div id="aritcle__infor" class="container">
                <form @submit.prevent="this.submitUpdate()">
                    <div class="inforOrder">


                        <div class="mb-3">
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Tên</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput2" name="tensp"
                                    v-model="this.product.tensp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Avata</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput3" name="avata"
                                    v-model="this.product.avata">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput4" class="form-label">Giá</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput4" name="giasp"
                                    v-model="this.product.giasp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput5" class="form-label">Số lượng sản phẩm</label>
                                <input required type="text" class="form-control" id="exampleFormControlInput5"
                                    name="soluongsp" v-model="this.product.soluong">
                            </div>
                        </div>

                        <div class="d-flex justify-content-around mt-5">
                            <button class="btn btn-danger" type="submit">Cập nhật sản phẩm</button>
                        </div>
                        <hr>
                    </div>

                </form>
            </div>

        </div>

        <div>
            <Footer></Footer>
        </div>

    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ProductService from '../services/product.service'
export default {

    components: {
        Header,
        Footer,
    },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        async submitUpdate() {
            // console.log(this.product);
            try {
                // Su dung ham them a cap nhat ben productservice
                const resultAdd = await ProductService.update(this.$route.params.id,this.product);
                alert(resultAdd);
            } catch (error) {
                console.log(error)
            }
        },

        async retrieveProduct() {
            // console.log(this.$route.params.id);
            try {
                this.product = await ProductService.get(this.$route.params.id);
                // console.log(this.product);
            } catch (error) {
                console.log(error);
            }
        },

    },
    created() {
        this.retrieveProduct()
    }
}
</script>

<style scoped>
.addColor {
    background-color: antiquewhite;
    float: right;
    margin-right: 5px;
}

#aritcle__infor {
    border: 3px solid #c49d5a;
    width: 50%;
    height: 600px;
    padding: 20px;
    overflow: scroll;
}

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
</style>