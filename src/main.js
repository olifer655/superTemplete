import Vue from 'vue'
import App from './App'
import 'jquery/dist/jquery.min'
import './common/css/basic.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
