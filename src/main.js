// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import VueCarousel from 'vue-carousel';
import Button from '@/components/Button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Require the main Sass manifest file
require('./mystyles.scss');

Vue.config.productionTip = false
Vue.use(VueCarousel);

library.add(faMedium, faGithub, faLinkedin, faPhoneSquare, faEnvelope)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('app-button', Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
