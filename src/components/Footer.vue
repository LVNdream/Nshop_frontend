<template>
  <div>
    <footer class="articleFooter container">
        <div class="infor">
            <h4 class="title">Về HOMESHOP</h4>
            <p class="infor__ỉntroduce">Tủ quần áo vintage cho các chàng trai và cô gái</p>
            <img class="infor__logo--footer" src="/src/assets/img/footer_logobct_img.webp" alt="loading">
        </div>
        <div class="location">
            <h4 class="title">Địa chỉ liên hệ</h4>
            <ul class="listfooter location__list">
                <li class="listfooter__selectors"><strong>Địa chỉ: </strong> 10/20D, Nguyễn Trãi, P.Cái Khế, Q.Ninh Kiều, TP Cần Thơ</li>
                <li class="listfooter__selectors"><strong>Điện thoại: </strong> 0817.637.376 - 0917.637.376</li>
                <li class="listfooter__selectors"><strong>Email: </strong> nobitahome.vn@gmail.com</li>
            </ul>
        </div>
        <div class="help">
            <h4 class="title">Hỗ trợ khách hàng</h4>
            <ul class="listfooter help__list">
                <li class="listfooter__selectors">Tìm kiếm</li>
                <li class="listfooter__selectors">Giới Thiệu</li>
            </ul>
        </div>
        <div class="careclient">
            <h4 class="title">Chăm sóc khách hàng</h4>
            <ul class="listfooter careclient__list">
                <li class="listfooter__selectors">
                    <p class="footer__numberphone"><i class="icons--number fa-solid fa-phone"></i><strong> 0917.637.376</strong></p>
                    <p class="footer__email"><i class="icons--email fa-solid fa-envelope"></i> nobitahome.vn@gmail.com</p>
                </li>
                <li class="listfooter__selectors"> <strong>Follow Us</strong></li>
            </ul>
            <div class="careclient__icons">
                <div class="iconFacebook">
                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div class="iconInstagram">
                    <a href="https://www.instagram.com/accounts/login/"><i class="fa-brands fa-instagram"></i></a>
                </div>

            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   
   @charset "UTF-8";
.articleFooter {
  margin-top: 50px;
  display: flex;
  justify-content: space-between; }

.infor__logo--footer {
  height: 60px;
  width: 150px; }

.listfooter {
  list-style-type: none;
  padding: 0px;
  margin-bottom: 5px; }

.infor__ỉntroduce {
  margin-bottom: 5px; }

.listfooter__selectors {
  margin-bottom: 5px; }

.footer__numberphone {
  margin-bottom: 5px; }

.footer__email {
  margin-bottom: 10px; }

.icons--number {
  color: #c39678;
  font-size: 20px;
  margin-right: 10px; }

.icons--email {
  color: #c39678;
  font-size: 20px;
  margin-right: 10px; }

.title {
  font-size: 22px;
  color: #c39678;
  font-family: 'Times New Roman', Times, serif; }

.infor {
  margin-right: 50px;
  flex: 1; }

.location {
  margin-right: 50px;
  flex: 1; }

.help {
  margin-right: -50px;
  flex: 1; }

.careclient {
  margin-right: -50px;
  flex: 1; }

.careclient__icons {
  display: flex; }

.iconFacebook {
  color: #c39678;
  font-size: 25px;
  margin: 0px 5px; }

.iconInstagram {
  color: #c39678;
  font-size: 25px;
  margin: 0px 5px; }


</style>