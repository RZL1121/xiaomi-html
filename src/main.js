import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
//引入rem.js文件
import "./modules/rem"
//引入swiper.min.css样式
import "swiper/css/swiper.min.css"

import { Lazyload, InfiniteScroll,Header,Button, Tabbar, TabItem, Cell } from 'mint-ui';


import axios from "axios"
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
