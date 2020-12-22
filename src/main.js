import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Firebase from 'firebase'
import { firebaseConfig } from './config/firebaseConfig'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Firebase,
  render: h => h(App)
}).$mount('#app')
