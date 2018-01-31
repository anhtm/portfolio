<template>
	<div>
		<!-- Service -->
    <section id="section-service" class="section is-medium">
      <div class="container has-text-centered" id="service">

      <h3 class="title">S E R V I C E S</h3>

        <div class="columns">

          <!-- <div class="column is-4">
            <div class="box">
              <div class="service-logo">
                <app-icon name="database" scale="4"></app-icon>
              </div>
              <div class="info">
                <h4 class="title is-4">
                  Backend Development</h4>
                <ul class="content has-text-left">
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    <span> sub 1 </span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    <span> sub 2 </span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    <span> sub 3 </span> 
                  </li>
                </ul>
              </div>
            </div>
          </div> -->

          <service title="Backend Development"
                   sub-i="something"
                   sub-ii="something else"
                   sub-iii="anything">
            <app-icon name="database" scale="4"></app-icon>
          </service>

          <div class="column is-4">
            <div class="box">
              <div class="service-logo">
                <app-icon name="user-circle" scale="4"></app-icon>
              </div>
              <div class="info">
                <h4 class="title is-4">Frontend Development</h4>
                <ul class="content has-text-left">
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    <span> Modern Frameworks (Vue.js, React, etc.) </span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    
                    <span> Responsive Web App </span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    
                    <span> sub 3</span> 
                  </li>
                </ul>
              </div>
            </div> 
          </div> 


          <div class="column is-4">
            <div class="box">
              <div class="service-logo">
                <app-icon name="paint-brush" scale="4"></app-icon>
              </div>
              <div class="info">
                <h4 class="title is-4">Web Design</h4>
                <ul class="content has-text-left">
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    
                    <span> </span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    
                    <span> sub 2</span> 
                  </li>
                  <li>
                    <app-icon name="check" scale="1"></app-icon>
                    
                    <span> sub 3 </span> 
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <!-- <a class="revert button is-black" href="mailto:anhtm.mtl@gmail.com?Subject=" target="_blank"> CONTACT ME</a> -->

        <app-button name="Contact Me"></app-button>
      </div>
    </section>
	</div>
</template>

<script>
import Service from '@/components/Service'

export default {
  components: {
    [Service.name]: Service
  }
}
</script>

<style scoped>


</style>