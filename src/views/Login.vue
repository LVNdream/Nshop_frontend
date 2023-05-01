<template>
    <div>

        <Header></Header>
        <div class="m-auto articleLogin">
            <h3 class="title__login">Đăng nhập</h3>

            <form @submit.prevent="submitLogin()" class="needs-validation" novalidate>
                <div class="list-group">
                    <div class="form-floating mb-4">
                        <input v-model="this.userData.email" @blur="isValidateFormLogin()"
                            v-bind:class="{ 'is-invalid': errors.email, 'is-valid': errors.valid_email }" type="email"
                            class="form-control size--input-login list-group-item list-group-item-action"
                            id="floatingInputEmail" name="email" required>
                        <label class="label--text" for="floatingInputEmail">Email</label>
                        <div class="valid-feedback">
                            Bạn đã nhập Email, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div class="form-floating mb-4">
                        <input v-model="this.userData.matkhau" @blur="isValidateFormLogin()"
                            v-bind:class="{ 'is-invalid': errors.matkhau, 'is-valid': errors.valid_matkhau }"
                            type="password" class="form-control size--input-login list-group-item list-group-item-action"
                            id="floatingInputMatkhau" name="matkhau" required>
                        <label class="label--text" for="floatingInputMatkhau">Mật khẩu</label>
                        <div class="valid-feedback">
                            Bạn đã nhập mật khẩu, vui lòng xem lại thông tin trước khi submit!
                        </div>
                        <div class="invalid-feedback">
                            {{ errors.matkhau }}
                        </div>
                    </div>
                </div>
                <p class="policy">This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy"
                        target="_blank">Google Privacy Policy</a>
                    and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
                <p class="policy">Nếu bạn chưa có tài khoản, vui lòng tạo tài khoản! <a href="/account/register">Tạo tài
                        khoản</a></p>
                <button type="submit" class="btn btn-danger btn-login">Đăng nhập</button>

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

            userData: {
                email: '',
                matkhau: ''
            },
            errors: {
                email: '',
                matkhau: '',
                valid_email: false,
                valid_matkhau: false,
            }
        }
    },
    methods: {
        isValidateFormLogin() {
            let isValid = true;
            this.errors = {
                email: '',
                matkhau: ''
            };
            // email hợp lệ
            if (!this.userData.email || !this.userData.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                this.errors.email = 'Bạn vui lòng nhập email hợp lệ!';
                isValid = false;
            }
            else {
                this.errors.valid_email = true
            }

            // địa chỉ
            if (!this.userData.matkhau) {
                this.errors.matkhau = 'Bạn vui lòng nhập mật khẩu!';
                isValid = false;
            }

            else {
                this.errors.valid_matkhau = true
            }
            return isValid;

        },
        // ham submitlogin
        async submitLogin() {
            this.isValidateFormLogin();
            // console.log(this.isValidateForm())
            if (this.isValidateFormLogin()) {
                // console.log(this.userData);
                const resultLogin = await AccountService.loginAccount(this.userData);

                // console.log(resultLogin.user);
                if (resultLogin.isLogin) {
                    localStorage.setItem('Users', JSON.stringify(resultLogin.user));
                }
                // console.log(JSON.parse(localStorage.getItem('Users')))
                alert(resultLogin.message);
                if (JSON.parse(localStorage.getItem('Users'))) {
                    if (JSON.parse(localStorage.getItem('Users')).quyenhan == 1) {

                        this.$router.replace({ path: '/nshop/customerorder' });
                    }
                    else if (JSON.parse(localStorage.getItem('Users')).quyenhan == 0) {
                        this.$router.replace({ path: '/nshop/admin/updateOrder' });
                    }
                }
            }
            // else {
            //     alert('Bạn nhập đầy đủ thông tin');
            // }

        }
    }
}
</script>
<style scoped>
.articleLogin {
    width: 35%;
}

.size--input-login {
    height: 60px !important;
    background-color: #e0e2e3;
}

.label--text {
    z-index: 99999999;
    font-size: 17px;
}

.btn-login {
    text-align: center;
    width: 170px;
    margin-left: 185px;
    background-color: #d39871;
    border: none;
}

.btn-login:hover {
    background-color: #c5743f;
}

.policy {
    color: #e8a355;
}

.title__login {
    margin: 0 195px;
    color: #c5743f;
    border-width: 20px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 5px solid #cc5c11;
    margin-bottom: 20px;
}
</style>