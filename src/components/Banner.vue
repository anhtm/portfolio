<template>
	
    <section class="hero is-large is-hidden-mobile" id="banner">
      
        
        <div class="hero-body">
          <div class="container has-text-centered">
            <h2 
                class="title intro is-size-4-mobile is-size-1-desktop is-spaced has-text-weight-light"
                id="my-name"> 
                &lt;h1&gt; Hi, I'm Minh! I build software.&lt;/h1&gt;
            </h2>
            <div class="button-group">
              <app-button name="More About Me" to-route="about" class="is-black"></app-button>
              <app-button name="Portfolios" to-route="projects"></app-button>
            </div>
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
  /* background: -webkit-linear-gradient(to top, #fd746c, #ff9068); 
  background: linear-gradient(to top, #fd746c, #ff9068); */
}

#my-name {
  /* color: whitesmoke; */
  color: black;
  font-size: 2.5rem !important;
  font-weight: 300;
}

.button-group {
  padding: 2rem;
}

.intro {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .1em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: 
    typing 6s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
</style>