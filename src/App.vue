<template>
  <div id="app">
    
    <app-navbar></app-navbar>
    <transition name="fade">
    
      <router-view></router-view>
      
    </transition>
    <!-- <app-footer></app-footer> -->

  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  components: {
    [Navbar.name]: Navbar,
    [Footer.name]: Footer,
  }
}
</script>

<style>
html,body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  color: #1E1B18;
  font-weight: 300;
  font-size: 0.9rem;
}

h3.title {
  margin-bottom: 5rem !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
