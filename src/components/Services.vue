<template>
	<div>
		<!-- Service -->
    <section class="section is-medium">
      <div class="container has-text-centered">

      <h3 class="title">S E R V I C E S</h3>

        <div class="columns is-multiline">

          <service  v-for="(service,i) in services" 
                    :title="service.title"
                   :sub-i="service.sub1"
                   :sub-ii="service.sub2"
                   :sub-iii="service.sub3"
                   :icon-name="service.icon"
                   :key="i">
          </service>

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
  },

  data() {
    return {
      services: [
        {
          title: "Web Design",
          sub1: 'Wireframes & Prototypes',
          sub2: '',
          sub3: '',
          icon: 'paint-brush'
        },
        {
          title: "Frontend Development",
          sub1: 'Modern Frameworks (Vue.js, React, etc.)',
          sub2: 'Responsive Web App',
          sub3: '',
          icon: 'user-circle'
        },
        {
          title: "Backend Development",
          sub1: 'Node.js & Django frameworks',
          sub2: 'Customed APIs',
          sub3: '',
          icon: 'database'
        },
        
      ]
    }
  }
}
</script>

<style scoped>


</style>