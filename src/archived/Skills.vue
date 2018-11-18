<template>
	<!--Skills-->
    <section class="section is-medium">
      <div class="container has-text-centered">

        <h3 class="title is-spaced">S K I L L S</h3>
        
        
      <div class="columns is-mobile is-multiline">

        <skill v-for="(skill,i) in skills"
        		:name="skill"
        		:key="i"></skill>
        
      </div>
      
        <app-button 
        	name="View Projects"
        	toRoute="projects"></app-button>
      </div>
    </section>
</template>

<script>

import Skill from '@/components/Skill.vue'

export default {
	components: {
		[Skill.name]: Skill
	},

	data() {
		return {
			skills: [
				"devicon-html5-plain-wordmark",
				"devicon-css3-plain-wordmark",
				"devicon-javascript-plain",
				"devicon-jquery-plain-wordmark",
				"devicon-git-plain",
				"devicon-cplusplus-plain",
				"devicon-bootstrap-plain-wordmark",
				"devicon-python-plain-wordmark",
				"devicon-vuejs-plain-wordmark",
				"devicon-nodejs-plain-wordmark",
				"devicon-django-plain",
				"devicon-heroku-plain"]
		}
	}
}


</script>

<style>
.devicon-html5-plain-wordmark,
.devicon-css3-plain-wordmark,
.devicon-javascript-plain,
.devicon-jquery-plain-wordmark,
.devicon-python-plain-wordmark,
.devicon-bootstrap-plain-wordmark,
.devicon-vuejs-plain-wordmark,
.devicon-git-plain,
.devicon-heroku-original,
.devicon-cplusplus-plain,
.devicon-ubuntu-plain-wordmark,
.devicon-django-plain,
.devicon-heroku-plain,
.devicon-nodejs-plain-wordmark {
    font-size: 5rem;
  }
</style>