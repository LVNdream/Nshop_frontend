<template>
  <div>
    <Header v-if = "reload" ></Header>
    <div class="frame--intruduce">
      <!-- <img class="framepicture__picturemain" src="img/slide_1_img.webp" alt="loading"> -->
    </div>
    <main class="container-main pb-5">

      <div class="mt-2">
        <h2>Men fashion</h2>
      </div>
      <div class="product mt-2 d-flex flex-wrap">

        <div class="product__item" v-for=" product in products" :key="product._id">

          <ProductItem  :product="product" @Change-amount-item="()=>{
            reloadAmountItem()
          }"></ProductItem>

          <!-- <div class="avata--product">
                <a class="avata__link"><img
                        class="img-fluid avata__link--product" :src="'/src/assets' + product.avata " alt=""
                        title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"> </a>
            </div>
            <div class="item-infor">
                <p class="item-id" hidden>{{ product._id}}</p>
                <p class="item-name">{{ product.tensp }}</p>
                <p class="item-price mb-2">{{ product.giasp }}</p>
                <div class="article--itemStyle">
                    <div class="d-flex size--selection mt-2">
                        <div>
                            <input type="radio" id="size1" name="itemSize" value="S">
                            <label for="size1">S</label><br>
                        </div>
                        <div>
                            <input type="radio" id="size2" name="itemSize" value="M">
                            <label for="size2">M</label><br>
                        </div>
                        <div>
                            <input type="radio" id="size3" name="itemSize" value="L">
                            <label for="size3">L</label>
                        </div>
                        <div>
                            <input type="radio" id="size4" name="itemSize" value="XL">
                            <label for="size4">XL</label>
                        </div>
                    </div>
                </div>
                <div class="show--cart">
                    <div class="cart d-flex justify-content-around">
                        <div class="cart__shopping ">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div class="bag__shopping text-center ">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
            </div> -->

        </div>


      </div>
    </main>
    <Footer>></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProductService from '../services/product.service'
import ProductItem from "../components/Product.vue";
import { watch } from 'vue';

export default {

  components: {
    Header,
    Footer,
    ProductItem
  },
  data() {
    return {
      products: [],
      reload:true,
    }
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
        // console.log(this.products[0]);
      } catch (error) {
        console.log(error);
      }
    },
    reloadAmountItem(){
      this.reload = false;
      this.$nextTick(()=>{
        this.reload=true
      })
    }
  },
  created() {
    this.retrieveProducts();
  },

}
</script>

<style scoped>
.container-main {
  margin: 0 115px;
}

.frame--intruduce {
  position: relative;
  height: 530px;
  width: 100%;
  background-image: url("/src/assets/img/collection_banner.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: 5px;
}

.product__item {
  position: relative;
  height: 440px;
  width: 300px;
  margin: 10px;
}

.item-name {
  margin-bottom: 5px;
}

.money {
  margin-bottom: 5px;
}

.size--selection {
  font-size: 14px;
  gap: 13px;
}

.color--selection {
  font-size: 14px;
  gap: 13px;
}

.item-infor {
  position: absolute;
  width: 100%;
}

.show--cart {
  display: none;
  height: 40px;
  font-size: 25px;
  background-color: #a89182;
  border-radius: 5px;
}

.iconFavorite {
  font-size: 25px;
  color: #ffffffbc;
}

.isFavorite {
  color: red;
  font-size: 25px;
}

.article--iconFavorite :hover {
  cursor: pointer;
}

.cart__shopping {
  color: #fff;
}

.cart__shopping:hover {
  color: rgba(42, 35, 33, 0.882);
  cursor: pointer;
}

.bag__shopping:hover {
  color: #917f5b;
  cursor: pointer;
}

.bag__shopping {
  width: 50px;
  color: #ffffff;
  background-color: rgba(42, 35, 33, 0.882);
  border-radius: 5px;
  padding: 0;
}

.article--itemStyle {
  display: none;
}

.product__item:hover .show--cart {
  display: block;
}

.product__item:hover .article--itemStyle {
  display: block;
}

.product__item:hover .item-infor {
  animation: showcart linear 0.5s forwards;
  background-color: rgba(255, 255, 255, 0.674);
}

@keyframes showcart {
  from {
    opacity: 0;
    bottom: 0%;
  }

  to {
    opacity: 1;
    bottom: 10%;
  }
}</style>