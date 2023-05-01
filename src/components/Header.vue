<template>
  <div>
    <header class="container">
      <div class="titleFS">
        <p class="titleFS_IF">Miễn phí vận chuyển cho đơn hàng trên <strong>300k</strong></p>
      </div>
      <div class="mainheader">
        <div class="nameshop">
          <h1 class="titleNS">HOMESHOP</h1>
        </div>
        <ul class="nav__options">
          <li><router-link to="/nshop/admin" class="list_link">
              <i class="fa-solid fa-user-secret iconUser--color icon__selector icos__user"></i></router-link>
          </li>
          <li class="option-of__nav"><router-link to="/nshop" class="list_link">Trang chủ.</router-link></li>
          <li class="option-of__nav option-of__nav--deep">
            <router-link to="/nshop/menfashion" class="list_link">Thời trang nam <i
                class="down fa-solid fa-angle-down"></i></router-link>
            <ul class="list--fashion">
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo thun</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo sơ mi</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo khoác, áo nỉ, áo len</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Quần dài</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Quần short</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Giảm giá</a>
              </li>
            </ul>
          </li>
          <li class="option-of__nav option-of__nav--deep">
            <a class="list_link">Thời trang nữ <i class="down fa-solid fa-angle-down"></i></a>
            <ul class="list--fashion">
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo thun</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo sơ mi</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo 2 dây</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Áo khoác, áo nỉ, áo len</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Quần short</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Quần dài</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Chân váy</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Đầm</a>
              </li>
            </ul>
          </li>
          <li class="option-of__nav"><a class="list_link">Phụ kiện</a></li>
          <li class="option-of__nav option-of__nav--deep  ">
            <a class="list_link">Thông tin <i class="down fa-solid fa-angle-down"></i></a>
            <ul class="list--fashion">
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Liên hệ</a>
              </li>
              <li class="list--fashion__selectors">
                <a href="/account/checkOrdered" class="list--fashion__link">Kiểm tra đơn hàng</a>
              </li>
              <li class="list--fashion__selectors">
                <a class="list--fashion__link">Chính sách đổi hàng</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="nav__icons">
          <div class="icon__selector icon__search">
            <div class="search" id="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="formsearch" id="formsearch">
              <h3>Tìm kiếm</h3>
              <hr>
              <div class="formsearch__input">
                <input type="text" id="inputsearch5" class="form-control" placeholder="Nhập sản phẩm cần tìm... ">
                <i class="fa-solid fa-magnifying-glass search-in-input"></i>
              </div>
              <div id="cancle--search">
                <p class="text--cancle--search">x</p>
              </div>
            </div>
          </div>
          <div class="icon__selector icos__user option-of__nav option-of__nav--deep ">
            <router-link to="/nshop/register" class="list_link">
              <div class="account " id="account">
                <i class="fa-solid fa-user"></i>
              </div>
            </router-link>


          </div>
          <router-link to="/nshop/cart">
            <div class="icon__selector icon__cart">
              <div class="cart-items" id="cart-item">
                <i class="fa-solid fa-cart-shopping"></i>
                <p class="number-items">{{ this.amountItem }}</p>
              </div>
              <!-- <div class="watch-cart container" id="watch-cart">
              <h5>GIỎ HÀNG</h5>
              <hr>
              <div class="customerCart">
                <p class="noItemInCart">Hiện chưa có sản phẩm</p>
              </div>
              <div class="d-flex justify-content-between align-items-center money">
                <h5>TỔNG TIỀN:</h5>
                <p class="cost">0</p>
              </div>
              <div class="d-flex justify-content-between">
                <a href="/cart"><button type="submit" class="btn btn-cart btn-danger">XEM GIỎ HÀNG</button></a>
                <button type="submit" class=" btn btn-cart btn-danger" id="btn--pay">THANH TOÁN</button>
              </div>
              <div id="cancle--cart">
                <p class="text--cancle--cart">x</p>
              </div>
            </div> -->
            </div>
          </router-link>



        </div>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
          </button>

          <!-- KHi chua Login -->

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="!isLoginAdmin && !isLoginUser">
            <router-link to="/nshop/customerorder">
              <div class="dropdown-item"> Xem đơn hàng </div>
            </router-link>
          </div>

          <!-- Option cho User -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="isLoginUser">
            <router-link to="/nshop/customerorder">
              <div class="dropdown-item"> Xem đơn hàng </div>
            </router-link>
            <div @click="logOutUser()" class="dropdown-item"> Đăng xuất</div>
            <div class="dropdown-item"> Đổi mật khẩu</div>
          </div>
          <!-- option cho admin -->

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="isLoginAdmin">
            <router-link to="/nshop/admin/updateOrder">
              <div class="dropdown-item"> Cập nhật đơn hàng </div>
            </router-link>
            <router-link to="/nshop/admin/updateProduct">
              <div class="dropdown-item">Cập nhật sản phẩm</div>
            </router-link>
            <router-link to="/nshop/admin/addProduct">
              <div class="dropdown-item"> Thêm sản phẩm</div>
            </router-link>
            <div @click="logOutUser()" class="dropdown-item"> Đăng
              xuất Admin
            </div>
          </div>


        </div>


      </div>
    </header>
  </div>
</template>

<script>
import { VueElement } from 'vue';

export default {
  props: {
  },
  data() {
    return {
      amountItem: 0,
      isLoginUser: false,
      isLoginAdmin: false
    }
  },
  methods: {
    totalItem() {
      if (localStorage.getItem('cartItems') != null) {
        if (JSON.parse(localStorage.getItem('cartItems')).length != 0) {
          let customerCart = JSON.parse(localStorage.getItem('cartItems'));
          customerCart.forEach(item => {
            this.amountItem = this.amountItem + item.quantity;
          });
        }
      }
    },
    checkLogin() {
      // console.log(JSON.parse(localStorage.getItem('Users')))
      if (JSON.parse(localStorage.getItem('Users')) != null && JSON.parse(localStorage.getItem('Users')).quyenhan == 1) {
        this.isLoginUser = true;
      }
      else if (JSON.parse(localStorage.getItem('Users')) != null && JSON.parse(localStorage.getItem('Users')).quyenhan == 0) {
        this.isLoginAdmin = true;
      }
    },

    logOutUser() {
      const user = JSON.parse(localStorage.getItem('Users'))
      if (localStorage.getItem('Users') != null) {
        localStorage.removeItem('Users');
        this.isLogin = false;
        this.$router.go(this.$router.currentRoute);
      }
    }


  },
  mounted() {
    this.totalItem()
    this.checkLogin()
  }
}
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

.titleFS {
  background-color: #f5f5f5;
}

.titleFS_IF {
  text-align: center;
  animation: animatedColors 5s linear infinite alternate;
}

.mainheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titleNS {
  font-size: 30px;
  margin: 0px;
  color: #69472f;
  font-family: 'Times New Roman', Times, serif;
}

@keyframes animatedColors {
  0% {
    color: red;
  }

  20% {
    color: orange;
  }

  40% {
    color: black;
  }

  60% {
    color: green;
  }

  80% {
    color: blue;
  }

  100% {
    color: purple;
  }
}

.nav__options {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

.option-of__nav {
  margin: 0px 20px;
}

@keyframes upSide {
  from {
    opacity: 0;
    top: 100px;
  }

  to {
    opacity: 1;
    top: 27px;
  }
}

@keyframes hieuungchidoi {
  from {
    opacity: 0;
    left: 0%;
  }

  to {
    opacity: 1;
    left: 50%;
  }
}

.option-of__nav--deep:hover .list--fashion {
  display: block;
  animation: upSide linear .2s forwards;
}

.option-of__nav--deep {
  position: relative;
}

.list_link {
  font-size: 17px;
  color: #c39678;
  text-decoration: none;
  padding: 25px 0px;
}

.list--fashion {
  display: none;
  width: 200px;
  top: 100px;
  position: absolute;
  z-index: 999999;
  list-style-type: none;
  background-color: #fff;
  padding: 0px;
  margin-top: 25px;
}

.list--fashion__selectors {
  padding: 0px;
  border-bottom: 1px #ccb2a1 solid;
  padding: 7px 15px;
}

.list--fashion__link {
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  font-weight: 200;
}

.list--fashion__link:hover {
  color: #a2660c;
  font-size: 17px;
  font-weight: 200;
}

.list_link:hover {
  color: #c3a795;
  border-bottom: 3px solid #c0a593;
}

.nav__icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.down {
  font-size: 15px;
  margin-left: 3px;
}

.dropdownHidden {
  display: none;

}

.icon__selector {
  margin: 0px 10px;
  color: #c39678;
  font-size: 23px;
  margin: 0px 15px;
}

.formsearch {
  position: absolute;
  height: 150px;
  display: none;
  width: 450px;
  background-color: #fff;
  border: #00000075 2px solid;
  text-align: center;
  top: 95px;
  right: 150px;
  z-index: 99999999;
}

.show__formsearch {
  display: block;
}

.hidden__formsearch {
  display: none;
}

#search:hover {
  cursor: pointer;
}

.formsearch h3 {
  font-weight: lighter;
}

#inputsearch5 {
  width: 400px;
  margin: auto;
  background-color: #efefef;
}

.formsearch__input {
  position: relative;
}

.search-in-input {
  position: absolute;
  bottom: 5px;
  right: 40px;
}

.search-in-input:hover {
  cursor: pointer;
}

#cancle--search {
  color: #ffffff;
  z-index: 99999999;
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #69472f;
}

#cancle--search:hover {
  cursor: pointer;
}

.text--cancle--search {
  font-size: 15px;
  text-align: center;
}

@keyframes showsearch {
  from {
    opacity: 0;
    bottom: 0%;
  }

  to {
    opacity: 1;
    bottom: 7%;
  }
}

@keyframes hiddencart {
  from {
    opacity: 1;
    bottom: 7%;
  }

  to {
    opacity: 0;
    bottom: 0%;
  }
}

.formacc {
  position: absolute;
  height: 390px;
  display: none;
  width: 340px;
  background-color: #fff;
  border: #00000075 2px solid;
  text-align: center;
  top: 95px;
  right: 170px;
  z-index: 99999999;
}

.acc__title {
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 5px;
}

.acc__require {
  font-size: 15px;
  color: #000000;
  margin-bottom: 0px;
}

.label--text {
  font-size: 15px;
  color: #333333;
  font-weight: 500;
}

.size--input {
  height: 45px !important;
}

.btn-account {
  background-color: #c39678;
  border: none;
  width: 310px;
  margin-top: 10px;
}

.btn-account:hover {
  cursor: pointer;
  background-color: #c48256;
}

.rules {
  text-align: justify;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
}

.iconUser--color {
  color: #c39678;
  font-size: 23px;
  position: relative;
}

.signup {
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  color: #000000;
}

.link--signup {
  font-size: 15px;
  color: #a2660c;
}

.forgetpass {
  font-size: 15px;
  text-align: left;
  color: #000000;
}

.link--forgetpass {
  font-size: 15px;
  color: #a2660c;
}

.show__formacc {
  display: block;
}

.hidden__formacc {
  display: none;
}

#account:hover {
  cursor: pointer;
}

#cancle--acc {
  color: #ffffff;
  z-index: 99999999;
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #69472f;
}

#cancle--acc:hover {
  cursor: pointer;
}

.text--cancle--acc {
  font-size: 15px;
  text-align: center;
}

.welcome__user {
  padding: 3px;
  margin: 0px 0px 20px 0px;
  position: absolute;
  top: 0px;
}

.content--feedback {
  font-size: 15px;
  text-align: left;
}

.watch-cart {
  display: none;
  width: 420px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 95px;
  right: 150px;
  z-index: 999999999;
  border: #00000075 2px solid;
}

.watch-cart h5 {
  margin-top: 10px;
  font-weight: 400;
  text-align: center;
}

.cost {
  color: red;
}

.noItemInCart {
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
}

.cart-items {
  position: relative;
}

.number-items {
  position: absolute;
  font-size: 16px;
  bottom: 8px;
  left: 10px;
}

.money p {
  margin: 0px;
}

.btn-cart {
  background-color: #c39678;
  border: none;
  width: 180px;
  height: 30px;
  font-size: 15px;
}

.btn-cart:hover {
  cursor: pointer;
  background-color: #c48256;
}

#cancle--cart {
  color: #ffffff;
  z-index: 99999999;
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #69472f;
}

#cancle--cart:hover {
  cursor: pointer;
}

.text--cancle--cart {
  font-size: 15px;
  text-align: center;
}

.show__watchcart {
  display: block;
}

.hidden__watchcart {
  display: none;
}
</style>