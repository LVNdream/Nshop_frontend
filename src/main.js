import { createApp } from 'vue';
import router from "./router";
import '@//auth/interception';

import App from './App.vue';
import"bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/src/dropdown.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
// import './assets/main.css';
createApp(App).use(router).mount("#app");
// createApp(App).mount('#app')
