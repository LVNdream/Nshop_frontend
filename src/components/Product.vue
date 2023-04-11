<template>
    <div>
        <div class="avata--product">
            <a class="avata__link"><img class="img-fluid avata__link--product" :src="'/src/assets' + product.avata" alt=""
                    title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"> </a>
        </div>
        <div class="item-infor">
            <p class="item-id" hidden>{{ product._id }}</p>
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
                    <div class="cart__shopping " @click="() => loadShopCart(product)">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="bag__shopping text-center ">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    data(){
        return{
        }
    },
    props: {
        product: { type: Object, required: true },
    },
    methods: {
        // ham kiem tra  xem sp co trong gio hang chua

       

        isExistedInCart(item, arrCart) {
            let myIndex = -1;
            arrCart.forEach((itemCart, index) => {
                if (item.id == itemCart.id && item.size == itemCart.size) {
                    myIndex = index;
                }
            });
            return myIndex;
        },
        // ham load them vao gio hang
        loadShopCart(product) {
            let updatedCart = [];
            console.log(product);

            // const linkClicked = evt.target;
            let itemSize = document.getElementsByName('itemSize');
            let lenItemSize = itemSize.length;
            let SizeValue = 'S';
            for (let i = 0; i < lenItemSize; i++) {
                if (itemSize.item(i).checked) {
                    SizeValue = itemSize.item(i).value;
                }
            }

            // // let itemColor = document.getElementsByName('itemColor');
            // // let lenItemColor = itemColor.length;
            // // let colorValue = linkClicked.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[0].children[0].attributes.value.value;
            // // for (let i = 0; i < lenItemColor; i++) {
            // //     if (itemColor.item(i).checked) {
            // //         colorValue = itemColor.item(i).value;
            // //     }
            // // }



            // // console.log(linkClicked.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[0].children[0].attributes.value.value);
            // //console.log(linkClicked);
            // //console.log(linkClicked.parentElement.parentElement.parentElement.parentElement.children[0].textContent);
            alert("Đã thêm sản phẩm: " + product._id);
            if (typeof Storage !== undefined) {
                let newItem = {
                    id: product._id,
                    name: product.tensp,
                    size: SizeValue,
                    picture: product.avata,
                    price: product.giasp,
                    quantity: 1
                };
                //kiểm tra txem giỏ hàng , cartItems, đã tônf tại trong localStorage chưa, chưa tì tạo mới nó
                if (JSON.parse(localStorage.getItem('cartItems')) === null) {
                    updatedCart.push(newItem);
                    //console.log(updatedCart);
                    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                    //reset lại trang 
                    // window.location.reload();

                }

                else {
                    const updatedCart = JSON.parse(localStorage.getItem('cartItems'));
                    let index = this.isExistedInCart(newItem, updatedCart);
                    if (index >= 0) {
                        //console.log(index);
                        updatedCart[index].quantity++;
                        //console.log(updatedCart);
                    }
                    else {
                        //console.log(newItem)
                        updatedCart.push(newItem);

                        //console.log(updatedCart);
                    }
                    //console.log(updatedCart);
                    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                    //reset lại trang
                    // window.location.reload();
                }

            }
            else {
                alert("Local Storage is not working on your browser!!!");
            }
            this.$emit('ChangeAmountItem')

        }

    },
    mounted() {
        // console.log(this.amountItem);
    }
};
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
}
</style>