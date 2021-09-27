import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  locale: require('element-ui/lib/locale/lang/ru-RU'),
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
