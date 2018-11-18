<template>
	<div class="section">
		<div class="container">
			
			<h1 class="title is-1 level-left">
				{{ projects[index].title }}
			</h1>
			
			<a class="button is-warning is-uppercased" 
        target="_blank"
				:href="projects[index].url" 
        v-if="projects[index].url">
				Visit Website 
			</a>

      <a class="button is-black is-uppercased"
				:href="projects[index].sourcecode"
        v-if="projects[index].sourcecode"
        target="_blank">
				Check Source Code 
			</a>

			<span class="date">
				<small>{{ projects[index].date }}</small>
			</span>
			
			<div class="columns section">
				<div class="column is-7">
					<h1 class="title">
						What I Did
					</h1>
					<p class="experience"> {{ projects[index].experience }}</p>
				</div>
				<div class="column is-offset-1" id="tech">
					<h1 class="title">Technologies</h1>
					<ul>
						<li v-for="(item, i) in projects[index].technologies" :key="i">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>

      <carousel :perPage="1" class="section">
        <slide class="slide" v-for="(img,i) in projects[index].images" :key="i">
          <figure>
            <img :src="img" alt="" border="0">
          </figure>
        </slide>
      </carousel>
			
			<div>
				<button @click="goBack" class="button is-black"> Go Back </button>
				<!-- <button @click="goNext" class="button is-warning" v-if="index < 5"> Next </button> -->
			</div>
			
		</div>

		
	</div>
</template>

<script>
import projectData from '../data/projectData'
export default {
	name: 'project',

	data() {
		return {
			projects: projectData
		}
	},

	methods: {
		goBack() {
			this.$router.go(-1)
    },
    
    goNext() {
      const next =  Number(this.$route.params.key + 1);
      
      this.$router.push({ name: 'project', params: { key: next}});

    }
	},

	computed: {
		index() {
			return this.$route.params.key - 1
		}
	}
}
</script>

<style scoped>
.date {
	margin: 1rem;
	padding-top: 1rem;
}

.section {
  padding-left: 0 !important;
}

.experience {
  text-align: justify;
}

.slide {
  margin: 0 auto;
}
</style>