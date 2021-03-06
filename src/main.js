// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import 'vue-awesome/icons'
import VueCarousel from 'vue-carousel';

import Icon from 'vue-awesome/components/Icon'
import Button from '@/components/Button'

// Require the main Sass manifest file
require('./mystyles.scss');

Vue.config.productionTip = false
Vue.use(VueCarousel);

Vue.component('app-button', Button)
Vue.component('app-icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
