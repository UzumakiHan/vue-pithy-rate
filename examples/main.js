import Vue from 'vue'
import App from './App.vue'
import VuePithyRate from '../packages'

Vue.config.productionTip = false
Vue.use(VuePithyRate)

new Vue({
  render: h => h(App)
}).$mount('#app')
