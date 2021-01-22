import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from "./routes"
import store from "./view/shop/store";

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
