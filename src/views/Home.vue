<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },

  data(){
    return {
      show:false
    }
  },
 methods:{
 }
}
</script>
  <template>
<div>
  <Header />
  <main>
    <div class="frame--intruduce">
        <!-- <img class="framepicture__picturemain" src="img/slide_1_img.webp" alt="loading"> -->
    </div>
    <div class="intruduce">

        <div class="intruduce__left">
            <div id="intruduce__animation--left1" class="intruduce__animation1"></div>
            <div id="intruduce__animation--left2" class="intruduce__animation2"></div>
            <div class="content-Intruduce--left">
                <p class="content-Intruduce__title1 content-Intruduce__title--l1">Phong cách vintage</p>
                <h4 class="content-Intruduce__title2 content-Intruduce__title--l2">Alice Blue</h4>
                <p class="content-Intruduce__title3 content-Intruduce__title--l3">Mẹo phối đò nữ tính</p>
                <div class="btn btn--seemore btn--size-s"><a class="intruduce__link-seemore" href="/home">Xem thêm</a>
                </div>
            </div>
        </div>

        <div class="intruduce__right" >
            <div id="intruduce__animation--right1" class="intruduce__animation1"></div>
            <div id="intruduce__animation--right2" class="intruduce__animation2"></div>
            <div class="content-Intruduce--right">
                <p class="content-Intruduce__title1 content-Intruduce__title--r1">Phụ kiện thời trang</p>
                <h4 class="content-Intruduce__title2 content-Intruduce__title--r2">Accessories</h4>
                <p class="content-Intruduce__title3 content-Intruduce__title--r3">Nón, giày, dép, túi xách...</p>
                <div class="btn btn--seemore btn--size-s"><a class="intruduce__link-seemore" href="/home">Xem thêm</a>
                </div>
            </div>
        </div>
    </div>
    <div class="article--menfashion">
        <div class="title--menfashion"><a class="title--fashion__link" href="/home">HOMESHOP Fashion</a></div>
        <p class="information__content">Thời trang nam</p>
        <div class="information__product">
            <div class="avata" @mouseenter="enterAvataMan" @mouseleave="leaveAvataMan">
                <div id="AvataMan__animation--left1" class="AvataMan__animation1"></div>
                <div id="AvataMan__animation--left2" class="AvataMan__animation2"></div>
                <img class="avata--fashion" src="src/assets/img/home_collection_1_banner.webp" alt="loanging">
            </div>
            <div class="product">
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/74308f00-d8f8-4666-b7b7-37d2e751dcde_53b9e6bee8544d5b99f2ee8d8976cc4f_medium.webp"
                                alt="" title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Áo sơ mi nam tay ngắn</p>
                        <p class="item-price"><Strong>200000</Strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/8ed6a55c-385a-4cfe-a550-a6c82aa3f599_e0d7b13598214eabbcb0cc9c0b3ee5f5_medium.webp"
                                alt="" title="ÁO SƠ MI TRẮNG TAY NGẮN TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Áo sơ mi nam tay ngắn</p>
                        <p class="item-price"><strong>250000</strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/62ccae2d-f468-41b6-9b87-3062210d83d9_be1eda135771464f8fae5d8fe741c94a_medium.webp"
                                alt="" title="QUẦN ÂU TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Quần Âu Korea</p>
                        <p class="item-price"><strong>350000</strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/edc4bd9e-63fe-47bb-93d1-dacafd3d6c5d_e599fa402d1b4a839d0f05bf130556ea_medium.webp"
                                alt="" title="ÁO KHOÁC BLAZER"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Áo khoác Blazer trẻ...</p>
                        <p class="item-price"><strong>350000</strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/3937ef58-2640-4fcc-a3de-f65f1eccdeeb_0dd3260b12df4a11adc1017fbb2f8375_medium.webp"
                                alt="" title="ÁO THUN BALO MÙA HÈ"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Áo thun nam 3 lỗ</p>
                        <p class="item-price"><strong>350000</strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/c7e46214-72bf-4477-b29e-0baa4aa10f87_8944cebd6f814b53b6a72dc097482238_medium.webp"
                                alt="" title="ÁO THUN 3 LỖ NHẸ NHÀNG"> </a>
                    </div>
                    <div class="item-infor">
                        <p class="item-name">Áo thun 3 lỗ Cotton...</p>
                        <p class="item-price"><strong>350000</strong></p>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="article--womenfashion">
        <div class="title--womenfashion"><a class="title--fashion__link" href="/home">ALICE BLUE</a></div>
        <p class="information__content">Thời trang nữ</p>
        <div class="information__product">
            <div class="product product--girl">
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/54e4e65c-d6c9-4763-9ea2-4654814c1923_a3b212bf50614200a8edf5c0c2bf53bc_8ea606a6b0a84085a0b499cb4729f5b3_medium.webp"
                                alt="" title="VÁY NỮ TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">

                        <p class="item-name">Áo váy nữ tay ngắn</p>
                        <p class="item-price"><strong>350000</strong></p>

                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/303f48ff-5501-4d62-9a03-887ff5a8f19b_a8c0014de4774a16b438fa38be40f2eb_c46c0cd9a161460dabbf5938a3dbe1f3_medium.jpeg"
                                alt="" title="VÁY NỮ TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">

                        <p class="item-name">Áo váy nữ tay ngắn</p>
                        <p class="item-price"><strong>350000</strong></p>

                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/ad4b0a46-6f5a-44fb-99d4-c8d0c6fa0d0a_93df437021964c68bb05b31a0c875db3_68862c4cf1184a398673d89430526c46_medium.webp"
                                alt="" title="VÁY NỮ TRẺ TRUNG"> </a>
                    </div>
                    <div class="item-infor">

                        <p class="item-name">Áo váy nữ tay ngắn</p>
                        <p class="item-price"><strong>350000</strong></p>

                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/c326f154-12ef-4cc0-8045-868f477875e0_48ef7b1ff3294afcb29dd51bd3ee1e10_3911670475724c6bbf09cd02f4f075f1_medium.webp"
                                alt="" title="VÁY NỮ THỜI TRANG NĂNG ĐỘNG"> </a>
                    </div>
                    <div class="item-infor">

                        <p class="item-name">Áo váy nữ tay ngắn thời trang</p>
                        <p class="item-price"><strong>350000</strong></p>

                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/d5919845-5593-401c-8cf5-02f1a8749f45_a742f6c92a784183aa76320dfe80f94c_4a37f1d0019d40de8aed7d8986f38e39_medium.webp"
                                alt="" title="VÁY NỮ CỔ TRÒN NỮ TÍNH"> </a>
                    </div>
                    <div class="item-infor">

                        <p class="item-name">Áo váy nữ tay ngắn thời trang</p>
                        <p class="item-price"><strong>350000</strong></p>

                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__items">
                    <div class="avata--product">
                        <a class="avata__link" href=""><img class="avata__link--product"
                                src="src/assets/img/img_5467_bc8e5cfda238479082451f01d2e8c787_e3f26a839cfe480a9a6f19575d48c7e0_medium.jpg"
                                alt="" title="VÁY NỮ KIỂU CÔ DÂU"> </a>
                    </div>
                    <div class="item-infor">
                        <div class="money">
                            <p class="item-name">Áo váy nữ tay ngắn thời trang</p>
                            <p class="item-price"><strong>350000</strong></p>
                        </div>
                        <div class="show--cart">
                            <div class="cart">
                                <div class="cart__shopping">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="bag__shopping">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="avata">
                <div id="AvataWoman__animation--left1" class="AvataWoman__animation1"></div>
                <div id="AvataWoman__animation--left2" class="AvataWoman__animation2"></div>
                <img class="avata--fashion" src="src/assets/img/home_collection_2_banner.webp" alt="loanging">
            </div>
        </div>
    </div>
</main>
<Footer/>
</div>
</template>
<style  scoped>
/* @charset "UTF-8"; */
/*  css cho body */
.frame--intruduce {
  position: relative;
  height: 530px;
  width: 85%;
  background-image: url("/src/assets/img/slide_1_img.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: auto; }

/* css cho cái about */
.intruduce {
  margin: 25px 190px;
  display: flex;
  justify-content: space-between; }

.intruduce__left {
  position: relative;
  width: 555px;
  height: 355px;
  background-image: url("/src/assets/img/categorybanner_1_img.webp");
  background-size: 100% 100%;
  margin-right: 10px; }

.intruduce__animation1 {
  display: none;
  position: absolute;
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%; }

.intruduce__animation2 {
  display: none;
  position: absolute;
  background-color: rgba(241, 224, 213, 0.3);
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%;
  right: 0; }

@keyframes hieuungchiadoi {
  from {
    opacity: 0;
    width: 0%; }
  to {
    opacity: 1;
    width: 50%; } }

@keyframes background--zoomin {
  from {
    background-size: 100% 100%; }
  to {
    background-size: 102% 105%; } }

@keyframes hieuungmouseleave {
  from {
    opacity: 0;
    width: 60%; }
  to {
    opacity: 1;
    width: 0%; } }

@keyframes background--zoomout {
  from {
    background-size: 102% 105%; }
  to {
    background-size: 100% 100%; } }

/* .about__left:hover .about__animation1{
    display: block;
    animation: hieuungchiadoi1 linear .5s forwards;
}
.about__left:hover .about__animation2{
    display: block;
    animation: hieuungchiadoi2 linear .5s forwards;
}
.about__left:hover{
    animation:background--zoomin ease-out 1.5s forwards ;
} */
.intruduce__right {
  position: relative;
  width: 555px;
  height: 355px;
  background-image: url("/src/assets/img/categorybanner_2_img.webp");
  background-size: 100% 100%;
  margin-left: 10px; }

/* .about__right:hover .about__animation1{
    display: block;
    animation: hieuungchiadoi1 linear .5s forwards;
}
.about__right:hover .about__animation2{
    display: block;
    animation: hieuungchiadoi2 linear .5s forwards;
}
.about__right:hover{
    animation:background--zoomin ease-out 1.5s forwards ;
} */
.content-Intruduce--left {
  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 999999999; }

.content-Intruduce--right {
  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 999999999; }

.content-Intruduce__title1 {
  font-size: 20px;
  margin: 0;
  color: #d4a776;
  font-family: 'Times New Roman', Times, serif; }

.content-Intruduce__title2 {
  color: #847063;
  margin-bottom: 15px; }

.content-Intruduce__title3 {
  font-size: 17px;
  color: #d4a776;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px; }

/* css cho button */
.btn--seemore {
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 12px 48px;
  border-radius: 10px;
  cursor: pointer;
  min-width: 120px;
  transition: opacity 0.2s ease;
  user-select: none; }

.btn--seemore {
  width: 100px;
  padding: 5px 15px; }

.btn--seemore:hover {
  opacity: 0.8;
  color: #c39678; }

.btn--seemore {
  background-color: #69472f; }

.intruduce__link-seemore {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 200; }

.intruduce__link-seemore:hover {
  color: #a7e150;
  font-size: 17px;
  font-weight: 200; }

/* 
  css cho thoi trang nam */
/* Css cho hình thời trang nam */
.avata {
  position: relative; }

.AvataMan__animation1 {
  display: none;
  position: absolute;
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%; }

.AvataMan__animation2 {
  display: none;
  position: absolute;
  background-color: rgba(241, 224, 213, 0.3);
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%;
  right: 0; }

/* Cho nữ */
.AvataWoman__animation1 {
  display: none;
  position: absolute;
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%; }

.AvataWoman__animation2 {
  display: none;
  position: absolute;
  background-color: rgba(241, 224, 213, 0.3);
  background-color: rgba(199, 199, 199, 0.2);
  /* background-color: #000000; */
  z-index: 999999;
  width: 50%;
  height: 100%;
  right: 0; }

/* !!!!!!_________!!!! */
.article--menfashion {
  margin: 20px 190px; }

.article--womenfashion {
  margin: 20px 190px; }

.title--menfashion {
  width: 100%;
  height: auto;
  text-align: center; }

.title--womenfashion {
  width: 100%;
  height: auto;
  text-align: center; }

.title--fashion__link {
  text-decoration: none;
  color: #a0816c;
  font-size: 28px;
  font-size: 700;
  font-family: 'Times New Roman', Times, serif; }

.title--fashion__link:hover {
  color: #b09583;
  padding-bottom: 3px;
  border-bottom: #b09583 3px solid; }

.information__content {
  text-align: center;
  color: #b09583;
  font-size: 17px;
  font-weight: 200; }

.avata--fashion {
  width: 550px;
  height: 600px; }

.information__product {
  display: flex;
  justify-content: space-between; }

.product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 30px; }

.product__items {
  position: relative; }

.avata__link {
  z-index: 999999999; }

.item-infor {
  position: absolute;
  width: 100%; }

.item-name {
  margin-bottom: 5px;
  font-size: 15px;
  color: #a2660c; }

.money {
  margin: 0px 10px; }

.show--cart {
  display: none;
  margin: 0px 10px; }

.cart {
  display: flex;
  justify-content: center;
  gap: 50px;
  font-size: 20px;
  color: #c0a593;
  background-color: #c0a593;
  border-radius: 5px;
  margin-top: 10px; }

.cart__shopping {
  text-align: center;
  margin-top: 5px;
  color: #fff; }

.cart__shopping:hover {
  color: #917f5b;
  cursor: pointer; }

.bag__shopping {
  width: 35px;
  z-index: 999999;
  background-color: #fff;
  margin: 5px;
  text-align: center;
  border-radius: 5px; }

.bag__shopping:hover {
  background-color: #917f5b;
  cursor: pointer; }

.product__items:hover .show--cart {
  display: block; }

/*  */
/* Animation__showCarrt */
@keyframes showcart {
  from {
    opacity: 0;
    bottom: 0%; }
  to {
    opacity: 1;
    bottom: 7%; } }

/*  */
/*  */
.product__items:hover .item-infor {
  animation: showcart linear .5s forwards;
  background-color: rgba(255, 255, 255, 0.674); }

/* thời trang nữ */
.information--girl {
  margin: 20px 190px; }

/* .avata__link--girlfashion{
    margin-left: 30px;
} */
.product--girl {
  margin-left: 0px;
  margin-right: 30px; }

/*  */

</style>>


