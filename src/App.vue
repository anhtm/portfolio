<template>
  <div id="app">
    
    <app-navbar></app-navbar>
    <router-view/>
    <app-footer></app-footer>
    
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

<style lang="scss">

@import "node_modules/bulma/sass/utilities/initial-variables";
@import "node_modules/bulma/sass/utilities/functions";

$black: #1E1B18;
$black-invert: #fff;

$pink: #ff9068;
$pink-invert: #fff;

$hover-shadow: 5px 12px 40px #c3c3c3;
$new-shadow: 3px 3px 7px #c3c3c3;

$family-sanserif: "Roboto";


$danger: $pink;
$danger-invert: $pink-invert;
$link: $black;
$link-invert: $black-invert;
$info: $black;
$info-invert: $black-invert;
$link-hover: $pink;

$box-shadow: $new-shadow;
$box-padding: 1.5rem;
$box-link-hover-shadow: $hover-shadow;
$button-hover-color: $pink;

$card-shadow: $new-shadow;
$card-header-shadow: none;

@import "node_modules/bulma/bulma";
</style>

<style>
html,body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  color: #1E1B18;
  font-weight: 300;
  font-size: 1.1rem;
}

h3.title {
  margin-bottom: 5rem !important;
}
</style>
