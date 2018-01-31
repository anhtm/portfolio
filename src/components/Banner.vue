<template>
	
    <section class="hero is-fullheight is-hidden-mobile" id="banner">
      
        
        <div class="hero-body">
          <div class="container has-text-centered">
            <h2 
                class="title is-size-3-mobile is-size-1-desktop is-spaced has-text-weight-light"
                id="my-name"> 

                Hi, I'm Minh. 
            </h2>
            <h3 class="subtitle is-4"> 
              I do this and that. 
            </h3>


            <!-- <a class="buttons button is-black" href="assets/resume-MinhAnhTrinh.pdf" id="resume-button" target="_blank"> <span>VIEW MY RESUME</span> -->

            <app-button name="More About Me" to-route="about">
            </app-button>
            <app-button name="View My Resume"></app-button> 
            </a>
          </div> 
        </div>
      
    </section>
</template>

<script>

export default {
	name: 'app-banner'
}
</script>

<style scoped>
	/* Banner */
.hero {
  background: -webkit-linear-gradient(to top, #fd746c, #ff9068); 
  background: linear-gradient(to top, #fd746c, #ff9068);
}

#my-name {
  color: whitesmoke;
  font-size: 5rem;
}

.subtitle {
  color: #1E1B18 !important;
  padding-bottom: 3rem;
}
</style>