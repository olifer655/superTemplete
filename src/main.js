import Vue from 'vue'
import App from './App'
import 'jquery/dist/jquery.min'
import './common/css/basic.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// require('./common/css/basic.css').toString()
// require('bootstrap/dist/css/bootstrap.css').toString()
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

window.SyApp = {}
var env = (window.location.host.split('.')[0]).split('-')[1]
SyApp.ENV = env
SyApp.FILE_SERVER = window.location.protocol + '//file'+ (env ? '-' + env :'') + '.kaipao.cc/'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
