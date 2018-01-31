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

            <div>
              Git Repo 
              <a id="git-repo" href="https://github.com/anhtm/my-portfolio">@my-portfolio</a>
            </div>
          </div>

          <div class="column is-4">
            <p class="contacts"> Contact Me </p>
            <div id="my-contact">
              <p> 
                <app-icon name="phone-square"></app-icon>
                <span> (+1) 438-350-6987 </span>
              </p>
              <p>
                <app-icon name="envelope"></app-icon>
                <span>anhtm.mtl@gmail.com</span>
              </p>
            </div>
            <p>
              <app-button 
                name="Send Me A Message"
                class="button is-danger has-text-black"
                to-route="contact"> 
              </app-button>
            </p>
          </div>

          <div class="column">
            <p class="contacts"> Find Me On </p>

            <p id="social-media">
              <a 
                href="https://www.linkedin.com/in/anhtm/" 
                title="LinkedIn">
                <app-icon name="linkedin-square" scale="2"></app-icon>
              </a>
              <a 
                href="https://https://github.com/anhtm" 
                title="Github">
                <app-icon name="github" scale="2"></app-icon>
                
              </a>

              <a href="https://medium.com/@anhtm" 
                 title="Medium">
                <app-icon name="medium" scale="2"></app-icon>
                
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
	</div>
</template>

<script>

export default {
	name: 'app-footer'
}
</script>

<style scoped>
  /** Footer */

#footer {
  background-color: black !important;
  color: whitesmoke;
}

#social-media a {
  color: whitesmoke !important;
}
#social-media a:hover {
  color: #ff9068 !important;
  transition: color 0.3;
}

#social-media a {
  padding-right: 1rem;
}

.contacts {
  padding-bottom: 1rem;
}

#my-contact p {
  font-weight: 400;
}

#git-acc, #git-repo {
  color: #ff9068 !important;
}

</style>