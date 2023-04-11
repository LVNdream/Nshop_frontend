<template>
    <div>
        hello admin
    </div>
    <div class="dropdown">

        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
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
            <div @click="logOutUser()" class="dropdown-item" :class="{ 'dropdownHidden': !isLoginUser }"> Đăng xuất Admin
            </div>
        </div>

    </div>
</template>

<script></script>

<style scoped></style>