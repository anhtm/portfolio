<template>
	<div>
		<!-- Footer -->
    <section class="section is-medium" id="footer">
      <div class="container" id="contact">
        <div class="columns">

          <div class="column is-4">

            <p>
              Created by <a id="git-acc" href="https://github.com/anhtm">@anhtm</a>
            </p>

            <p>
              Git Repo
              <a id="git-repo" href="https://github.com/anhtm/my-portfolio">@portfolio</a>
            </p>
          </div>

          <div class="column is-4" v-if="$route.name !== 'contact'">
            <p class="contacts"> Contact Me </p>
            <div id="my-contact" class="contacts">
              <p> 
                <fa-icon icon="phone-square"></fa-icon>
                <span> (+1) 438-350-6987 </span>
              </p>
              <p>
                <fa-icon icon="envelope"></fa-icon>
                <span>anhtm.mtl@gmail.com</span>
              </p>
            </div>
            <p>
              <router-link 
                class="button is-warning"
                :to="{name: 'contact'}"> 
                Send a Message
              </router-link>
            </p>
          </div>

          <div class="column">
            <p class="contacts"> Find Me On </p>

            <p class="social-media">
              <a 
                href="https://www.linkedin.com/in/anhtm/" 
                title="LinkedIn"
                target="_blank">
                <fa-icon :icon="['fab', 'linkedin']" size="2x"></fa-icon>
              </a>
              <a 
                href="https://github.com/anhtm" 
                title="Github"
                target="_blank">
                <fa-icon :icon="['fab', 'github']" size="2x"></fa-icon>
                
              </a>

              <a href="https://medium.com/@anhtm" 
                 title="Medium"
                 target="_blank">
                <fa-icon :icon="['fab', 'medium']" size="2x"></fa-icon>
                
              </a>
            </p>
          </div>

        </div>
      </div>`
    </section>
	</div>
</template>

<script>

export default {
	name: 'app-footer'
}
</script>

<style lang="css" scoped>
#footer {
  background-color: black !important;
}

.social-media a {
  padding-right: 1rem;
}

.social-media a:hover {
  color: #F4C109 !important;
  transition: color 0.3;
}

.contacts {
  padding-bottom: 1rem;
}

#git-acc, #git-repo {
  color: #F4C109 !important;
}

p, a {
  color: whitesmoke;
}
</style>
