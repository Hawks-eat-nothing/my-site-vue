import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./css/tailwindcss.css"
import '@mdi/font/css/materialdesignicons.min.css'
import VueClipboard from "vue-clipboard2"
import twemoji from "twemoji";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VueLazyload)

axios.defaults.baseURL='http://127.0.0.1:8085';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
