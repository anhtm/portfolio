<template>
	<div class="section">
		<div class="container">
			
			<h1 class="title is-1 level-left">
				{{ projects[index].title }}
			</h1>
			
			
			<a class="button is-warning is-uppercased"
				:href="projects[index].url">
				Visit Website 
			</a>

      <a class="button is-black is-uppercased"
				:href="projects[index].sourcecode">
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
					<p> {{ projects[index].whatIdid }}</p>
				</div>
				<div class="column is-offset-1" id="tech">
					<h1 class="title">Technologies</h1>
					<ul>
						<li v-for="item in projects[index].technologies">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
			
			<div>
				<button @click="goBack" class="button"> Go Back </button>
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
</style>