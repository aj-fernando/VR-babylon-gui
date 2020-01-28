import Vue from 'vue'
import App from './App.vue'
import vb from 'vue-babylonjs';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(vb);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
