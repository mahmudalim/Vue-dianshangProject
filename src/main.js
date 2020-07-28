// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import less from 'less-loader'
import './assets/css/global.css'
import './plugins/element.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Element,
  // less,
  components: { App },
  template: '<App/>'
})
