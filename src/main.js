import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/argon.scss";

createApp(App).use(store).use(bootstrap).use(router).mount('#app')
