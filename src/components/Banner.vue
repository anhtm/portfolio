<template>
	
    <section class="hero is-fullheight is-hidden-mobile" id="banner">
      
        
        <div class="hero-body">
          <div class="container has-text-centered">
            <h2 
                class="title is-size-3-mobile is-size-1-desktop is-spaced has-text-weight-light"
                id="my-name"> 

                Hi, my name is Minh.
            </h2>
            <h3 class="subtitle is-3"> 
              I'm a web developer. I'm currently looking for an internship in Summer 2018.
            </h3>

            <app-button name="More About Me" to-route="about" class="is-black">
            </app-button>
            
            <app-button name="Portfolios" to-route="projects"></app-button>
            </a>
          </div> 
        </div>
      
    </section>
</template>

<script>

export default {
	name: 'app-banner',

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
  font-size: 6rem !important;
  font-weight: 300;
}

.subtitle {
  color: #1E1B18 !important;
  padding-bottom: 3rem;
  font-weight: 300;

}
</style>