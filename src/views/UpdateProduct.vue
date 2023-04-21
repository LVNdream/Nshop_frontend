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

            <div v-if="this.products.length == 0">
                Bạn chưa có sản phẩm
            </div>

            <div id="aritcle__infor" class="container">

                <div class="d-flex article_infor_item" v-for="product in this.products" :key="product._id">
                    <img class="item_picture" :src='"/src/assets" + product.avata'>
                    <div class="infor_item">
                        <p hidden>123</p>
                        <h5 class="item_name">{{ product.tensp }}</h5>
                        <p class="item_price mb-1"><b>Giá: </b>{{ product.giasp }}</p>
                        <p class="item_quantity mb-1"><b>Số lượng: </b>{{ product.soluong }}</p>
                    </div>
                    <router-link :to='"/nshop/admin/FormEditProduct/"+ product._id'>
                        <div class="icon_edit">
                            <i class="fa-solid fa-pen"></i>
                        </div>
                    </router-link>

                </div>

                <!-- <div v-for="product in this.products" :key="product._id">

                    <form>
                        <div class="inforOrder">


                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Mã sẩn phẩm</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com" name="masp" :value="product._id" disabled>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Tên</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput2"
                                        placeholder="name@example.com" :value="product.tensp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput3" class="form-label">Avata</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput3"
                                        placeholder="name@example.com" :value="product.avata">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput4" class="form-label">Giá</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput4"
                                        placeholder="name@example.com" :value="product.giasp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput5" class="form-label">Số lượng sản phẩm</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput5"
                                        placeholder="name@example.com" name="soluongsp" :value="product.soluong">
                                </div>
                            </div>

                            <div class="d-flex justify-content-around mt-3">
                                <button class="btn btn-danger" type="submit">Cập nhật</button>
                            </div>
                            <hr>
                        </div>

                    </form>

                </div> -->

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
            products: [],
        }
    },
    methods: {
        async submitAdd() {
            const inforProduct = {
                tensp: this.ten,
                avata: this.avata,
                giasp: this.gia,
                soluong: this.soluong
            }
            console.log(inforProduct);
            try {
                // Su dung ham them a cap nhat ben productservice
                const resultupdate = await ProductService.create(inforProduct);
                alert(resultupdate);
            } catch (error) {
                console.log(error)
            }
        },
        async retrieveProductsToUpdate() {
            try {
                this.products = await ProductService.getAll();
                console.log(this.products);
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.retrieveProductsToUpdate();
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

.item_picture {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

/* csss cho danh sach sanr pham */
.article_infor_item {
    gap: 10px;
    margin-bottom: 15px;
}

.infor_item {
    width: 500px;
}

.item_name {
    color: #e49217;
    font-size: 17px;
}

.icon_edit {
    font-size: 20px;
    color: #bf8b31;
}</style>