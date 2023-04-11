<template>
    <div>
        <Header></Header>

        <div class="article__formsignup">
            <h3 class="title__signup">Tạo tài khoản</h3>
            <p class="policy">Nếu bạn đã có tài khoản, vui lòng đăng nhập! <router-link to="/nshop/login">Đăng nhập</router-link></p>
            <form @submit.prevent="submitRegister()" class="needs-validation" id="signupForm">
                <div class="list-group">
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.ho" type="text" class="form-control size--input-signup list-group-item list-group-item-action"
                            id="floatingInputHo" name="ho" required>
                        <label class="label--text" for="floatingInputHo">Họ</label>
                        <div class="valid-feedback">
                            Bạn đã nhập họ, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập họ!
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.ten" type="text" class="form-control size--input-signup list-group-item list-group-item-action"
                            id="floatingInputTen" name="ten" required>
                        <label class="label--text" for="floatingInputTen">Tên</label>
                        <div class="valid-feedback">
                            Bạn đã nhập tên, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập tên!
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.sodienthoai" type="text" class="form-control size--input-signup list-group-item list-group-item-action"
                            id="floatingInputPhone" name="sodienthoai" required>
                        <label class="label--text" for="floatingInputPhone">Số điện thoại</label>
                        <div class="valid-feedback">
                            Bạn đã nhập số điện thoại, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập số điện thoại!
                        </div>
                    </div>
                    <div class="mb-4 d-flex ml-3 flex-grap-radio">
                        <div class="">
                            <input v-model="inforUser.gioitinh" class="form-check-input" type="radio" name="gioitinh" id="gender1" value="Nam" required>
                            <label class="form-check-label" for="gender1">Nam</label>
                        </div>
                        <div class="">
                            <input v-model="inforUser.gioitinh" class="form-check-input" type="radio" name="gioitinh" id="gender2" value="Nu" required>
                            <label class="form-check-label" for="gender2"> Nữ </label>
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng chọn giới tính!
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.ngaysinh" type="date" class="form-control size--input-signup list-group-item list-group-item-action"
                            id="inputDOB" name="ngaysinh" required>
                        <label class="label--text" for="inputDOB">Ngày sinh: dd/mm/yyyy</label>
                        <div class="valid-feedback">
                            Bạn đã nhập ngày sinh, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập ngày sinh!
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.email" type="email" class="form-control size--input-signup list-group-item list-group-item-action"
                            id="floatingInputEmail" name="email" required>
                        <label class="label--text" for="floatingInputEmail">Email</label>
                        <div class="valid-feedback">
                            Bạn đã nhập Email, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập Email!
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="inforUser.matkhau" type="password"
                            class="form-control size--input-signup list-group-item list-group-item-action"
                            id="floatingInputMatkhau" name="matkhau" required>
                        <label class="label--text" for="floatingInputMatkhau">Mật khẩu</label>
                        <div class="valid-feedback">
                            Bạn đã nhập mật khẩu, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            Bạn vui lòng nhập mật khẩu!
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-danger btn-signup">Đăng kí</button>
            </form>
        </div>

        <Footer></Footer>

    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import AccountService from '../services/account.service'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            inforUser: {
                ho: "",
                ten: "",
                sodienthoai: "",
                gioitinh: "",
                ngaysinh:Date(),
                email: "",
                matkhau: "",
                quyenhan: 1
            }
        }
    },
    methods:{
      async submitRegister(){
        const resultAccount = await AccountService.createAccount(this.inforUser);
        alert(resultAccount);
      }  
    }

}
</script>
<style scoped>
.flex-grap-radio {
    gap: 30px;
}

.article__formsignup {
    width: 35%;
    margin: auto;
}

.btn-signup {
    text-align: center;
    width: 170px;
    margin-left: 185px;
    background-color: #d39871;
    border: none;
}

.btn-signup:hover {
    background-color: #c5743f;
}

.form-check-input-female {
    margin-left: 15px;
}

.label--text {
    z-index: 99999999;
    font-size: 17px;
}

.size--input-signup {
    height: 60px !important;
    background-color: #e0e2e3;
}

.gap--forgender {
    gap: 50px;
}

.title__signup {
    margin: 0 170px;
    color: #c5743f;
    border-width: 20px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 5px solid #cc5c11;
    margin-bottom: 20px;
}
</style>