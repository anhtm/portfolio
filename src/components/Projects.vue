<template>
	<div>
		<!-- Projects -->
    <section id="section-projects" class="section is-medium">
      <div class="container has-text-centered" id="projects">

      <h3 class="title"> P R O J E C T S </h3>
      
        <div class="columns is-multiline">

          <!-- <div class="column is-4-desktop">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img src="assets/memogamev2.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="has-text-centered is-size-3-desktop is-size-5-touch title is-marginless"> Memozoo </h4>
                <p class="content">
                Memozoo is a single-player memory game in an animated animal theme, written in JavaScript and jQuery.</p>
                <a class="buttons button is-black" href="https://anhtm.github.io/memo-game/" target="_blank"> SEE PROJECT</a>
                <a class="buttons button is-black" href="https://github.com/anhtm/memo-game" title="See code"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
              </div>
            </div>
          </div> -->

          <div class="column is-12-desktop">
            <project title="AbracadaChef"
                     :proj-key="1"
                   description="An online meal-sharing platform, built with Vue.js and Bulma."
                   >   
            </project>
          </div>

          <div class="column is-12-desktop">
            <project title="Buckist"
                     :proj-key="2"
                   description=" Buckist, in short for bucket list, is a full-stack Flask application that helps users keeping track of bucket ideas and wishes."
                   >   
            </project>
          </div>

          <div class="column is-12-desktop">
            <project title="Memozoo"
                     :proj-key="3"
                   description="Memozoo is a single-player memory game in an animated animal theme, written in JavaScript and jQuery."
                   >   
            </project>
          </div>
          
        </div>
      </div>
    </section>
	</div>
</template>


<script>
import ProjectBox from '@/components/ProjectBox.vue'

export default {
  components: {
    [ProjectBox.name]: ProjectBox
  }
}

</script>
<style scoped>

</style>