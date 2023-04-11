<template>
    <Header v-if="reload"></Header>
    <div>

        <main class="">
            <h1 class="title--cart">Giỏ hàng của bạn</h1>
            <div class=" article--main d-flex justify-content-between">
                <div class="article-productInCart">
                    <p v-if="!this.isExisItem" class="itemCount">Giỏ hàng của bạn đang trống</p>

                    <div class="article--borderCart" v-for="item in itemsCart">
                        <div class="productIncart d-flex">
                            <img class="productInCart--picture" :src='"/src/assets" + item.picture'>
                            <div class="row">

                                <div class="col-10">
                                    <p hidden>{{ item.id }}</p>
                                    <h5 class="productInCart--name">{{ item.name }}</h5>
                                    <div class="d-flex itemStyle">
                                        <p class="productInCart--size">{{ item.size }}</p>
                                    </div>
                                    <div class="productInCart--quantity d-flex">
                                        <button class="buttonquantityDown" @click="() => downQuantityItem(item)"
                                            name="down">-</button>
                                        <input class="input--quantity" type="number" name="quantity" :value="item.quantity"
                                            disabled>
                                        <button class="buttonquantityUp" @click="() => upQuantityItem(item)"
                                            name="up">+</button>
                                    </div>
                                </div>
                                <div class="delete--product col-2" @click="() => deleteItem(item)">
                                    <i class="fa-solid fa-trash iconDelete"></i>
                                </div>

                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <h6>Thành tiền:</h6>
                            <p class="fw-bold text-danger">{{ itemTotal = parseInt(item.price) * item.quantity }}</p>
                        </div>
                    </div>


                </div>
                <div class="infor--order ">
                    <div class="ordered container">
                        <h5 class="ordered--title">Thông tin đơn hàng</h5>
                        <hr>
                        <div class="d-flex justify-content-between">
                            <h6 class="mt-2">Tổng tiền:</h6>
                            <p class="ordered--cost fw-bold">{{ total }}</p>
                        </div>
                        <hr>
                        <ul>
                            <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                            <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                        </ul>
                                <router-link to="/nshop/payment" id="pay--link"><button :class="{disableeButton:!isExisItem}" type="submit" class=" btn btn-danger pay--button" id="pay--button">THANH
                                TOÁN</button></router-link>
                    </div>
                    <div class="ordered--policy container">
                        <h5>Chính sách mua hàng:</h5>
                        <p>Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu 0₫ trở lên.</p>
                    </div>
                </div>
            </div>

        </main>

    </div>
    <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            itemsCart: [],
            isExisItem: false,
            total: 0,
            itemTotal: 0,
            reload: true
        }
    },
    methods: {

        reloadAmountItem() {
            this.reload = false;
            this.$nextTick(() => {
                this.reload = true
            })
        },

        showCart() {
            if (localStorage.getItem('cartItems')) {
                if (JSON.parse(localStorage.getItem('cartItems')).length != 0) {
                    this.itemsCart = JSON.parse(localStorage.getItem('cartItems'));
                    // console.log(this.itemsCart);
                    this.isExisItem = true;
                    this.itemsCart.forEach(item => {
                        this.total = this.total + parseInt(item.price) * item.quantity;
                        // itemCount = itemCount + item.quantity
                        //console.log(item.price);
                    });
                    this.reloadAmountItem()
                }
                else {
                    this.itemsCart = [];
                    this.isExisItem = false;
                    this.reloadAmountItem()
                }
            }
        },
        // Cập nhật số lượng trong local
        uppdateQuantityCart(id, quantity, size) {
            const localCart = JSON.parse(localStorage.getItem('cartItems'));
            localCart.forEach(item => {
                if (item.id == id && item.size == size) {
                    item.quantity = quantity;
                }
            });
            localStorage.setItem('cartItems', JSON.stringify(localCart));
        },
        // Cập nhật số lượng của item
        upQuantityItem(item) {
            const quantity = item.quantity + 1;
            const id = item.id;
            const size = item.size;
            this.uppdateQuantityCart(id, quantity, size);
            this.total = 0;
            this.showCart();

        },
        // hàm giảm số lượng của item
        downQuantityItem(item) {
            if (item.quantity > 1) {
                const quantity = item.quantity - 1;
                const id = item.id;
                const size = item.size;
                this.uppdateQuantityCart(id, quantity, size);
                this.total = 0;
                this.showCart();
            }
        },
        // hàm xóa sản phẩm trong Cart
        deleteItem(itemDelete) {
            let updatedCart = [];
            let custommerCart = JSON.parse(localStorage.getItem('cartItems'));
            //console.log(custommerCart);
            custommerCart.forEach(item => {
                //console.log(item);
                //console.log(item.size + size);
                if (item.id == itemDelete.id && item.size == itemDelete.size) {
                }
                else {
                    updatedCart.push(item);
                }
            });
            //console.log(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            this.total = 0;
            this.showCart()
        }

    },
    mounted() {
        this.showCart()
    }

}
</script>
<style scoped>
main {
    margin-right: 110px;
    margin-left: 110px;
    margin-bottom: 110px;
}

.title--cart {
    text-align: center;
    font-size: 25px;
    color: #c39678;
}

.infor--order {
    margin-top: 30px;
    width: 385px;
    height: 395px;
    padding: 0px 5px;
}

.ordered {
    border: black 1px solid;
}

.ordered--title {
    color: #c39678;
    text-align: center;
    margin-top: 15px;
}

.ordered--cost {
    color: red;
    text-align: right;
    font-size: 25px;
    margin: 0px;
}

.ordered ul {
    font-size: 14px;
    padding: 0px 20px;
}

.pay--button {
    width: 350px;
    height: 45px;
    margin-bottom: 15px;
    background-color: red;
}

.ordered--policy {
    margin-top: 15px;
    background-color: #d9edf7;
}

.ordered--policy h5 {
    padding-top: 12px;
    font-size: 17px;
}

.ordered--policy p {
    padding-bottom: 12px;
    font-size: 15px;
}

.article--borderCart {
    border-top: 1px solid #cd9c74;
}

.article--main {
    margin: 0 80px;
}

.article-productInCart {
    position: relative;
    width: 730px;
    margin-right: 20px;
}

.itemCount {
    margin-top: 28px;
    text-align: center;
    background-color: rgba(239, 237, 237, 0.893);
    padding: 10px;
}

.productIncart {
    gap: 25px;
}

.productInCart--picture {
    height: 105px;
    width: 80px;
}

.productInCart--name {
    margin-bottom: 0px;
    font-size: 18px;
    color: #a8816d;
}

.productInCart--size {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
}

.productInCart--color {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
}

.itemStyle {
    gap: 15px;
}

.input--quantity {
    width: 35px;
    height: 25px;
    border: none;
    text-align: center;
}

.buttonquantityDown {
    width: 25px;
    height: 25px;
    text-align: center;
    border: none;
}

.buttonquantityUp {
    width: 25px;
    height: 25px;
    text-align: center;
    border: none;
}

.productInCart--price {
    margin-top: 10px;
    font-weight: 500;
}

.delete--product {
    position: absolute;
    right: -70px;
    font-size: 23px;
    color: #5f2727;
}

.delete--product:hover {
    cursor: pointer;
    color: #5f272790;
    font-size: 25px;
}
.disableeButton{
    display: none;
}
</style>