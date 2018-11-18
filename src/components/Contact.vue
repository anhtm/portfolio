<template>
	<div class="section is-medium">
		<div class="container has-text-centered">
			<div class="section">
        <div class="columns">
          <div class="column is-7">
		        <contact-form></contact-form>
          </div>
          <div class="column is-offset-1 is-4 is-hidden-touch contact-media">
            
            <div class="contact-section">
              <h1 class="title is-spaced is-4">Contact & Social Media</h1>
              <p> 
                <fa-icon icon="phone-square"></fa-icon>
                <span> (+1) 438-350-6987 </span>
              </p>
              <p>
                <fa-icon icon="envelope"></fa-icon>
                <span>anhtm.mtl@gmail.com</span>
              </p>
            </div>

            <div class="contact-section">

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
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from './ContactForm';

export default {
  components: {
    [ContactForm.name]: ContactForm,
  },

  data() {
		return {
      email: 'anhtm.mtl@gmail.com',
      phone: '(+1) 438-350-6987'
		}
	},
}
</script>


<style scoped>
	
hr {
	width: 150px;
	display: block;
	margin-left: auto;
    margin-right: auto;
}

#social-media a {
	padding-right: 1.5rem;
}

.contact-media {
  text-align: left;
}
.contact-section {
  margin-bottom: 2rem;
}
</style>