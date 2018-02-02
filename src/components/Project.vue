<template>
	<div class="section">
		<div class="container">
			
			<h1 class="title is-1 level-left">
				{{ projects[index].title }}
			</h1>
			
			
			<a class="button is-warning is-uppercased"
				:href="projects[index].url">

				Visit The Website 
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

			<carousel :perPage="1" class="section" v-if="index == 0">
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/homepage.png">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/homepage-fr.png">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/Upcoming.png">
				</figure>
			  </slide>

			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/meal-page.png">
				</figure>
			  </slide>

			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/book-meal.png">
				</figure>
			  </slide>

			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/create-meal.png">
				</figure>
			  </slide>
			  
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/signup.png">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/review-msg.png">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/settings.png">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="../assets/screenshots-abcdchef/payout.png">
				</figure>
			  </slide>
			 </carousel>


			 <carousel :perPage="1" class="section" v-if="index == 1">
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/homepage.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/signup.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/signin.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/2lists.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/options.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/edit.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-buckist/rename.png">
					</figure>
				</slide>
			</carousel>

			<carousel :perPage="1" class="section" v-if="index == 2">
				<slide>
					<figure>
						<img src="../assets/screenshots-memo/begin.png">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="../assets/screenshots-memo/played.png">
					</figure>
				</slide>

			</carousel>

			
			<div>
				<button @click="goBack" class="button"> Go Back </button>
			</div>
			
		</div>

		
	</div>
</template>

<script>
	
export default {
	name: 'project',

	data() {
		return {
			projects: [
				{
					title: 'AbracadaChef',
					whatIdid: 
					'I was part of a team of 3 developers, and worked as a frontend developer. Our mission was to build a completely frontend application that renders data from a backend JSON API, and is fully responsive across devices. My responsibilities include building wireframes and prototypes of the application, and use the design to build the frontend architecture. I used Vue.js to handle and fetch data from our API, and Vue-router for routing and authentication. One of the biggest challenges for me was working with Amazon S3 Bucket in photos management, along with manipulating the photos on the interface.',
					technologies: ['Frontend', 'UI/UX Design', 'Vue.js', 'Javascript', 'Bulma CSS Framework', 'JSON APIs', 'Stripe.js', 'Amazon S3', 'Internationalization', 'HTML/CSS'],
					url: 'https://abracadachef.com/#/',
					date: 'January 28th 2018'
				},

				{
					title: 'Buckist',
					whatIdid: `
						This was my first fullstack application which I built using Flask framework.
						The idea was simple: build a bucket list application with fundamental CRUD functionalities. I used SQLAlchemy (a Flask extension) as to set up database schema. The most challenging part of the project is the deployment on Heroku. There were bugs that didn't appear in development environment but came up in deployment, which took quite a bit of researching to solve.`,
					technologies: ['Backend', 'Python on Flask', 'DevOps', 'Bulma CSS Framework', 'HTML/CSS', 'Javascript', 'jQuery', 'SQLAlchemy'],
					url: 'https://buckist.herokuapp.com/',
					date: 'September 30th 2017'
				},

				{
					title: 'MemoZoo',
					whatIdid: 'I built this simple single-player memory game as a small project to get to know jQuery and JavaScript when I started coding. Understanding the logic behind the game and implementing it in into Javascript was the challenge.',
					technologies: ['Javascript', 'jQuery', 'HTML/CSS'],
					url: 'https://anhtm.github.io/memo-game/',
					date: 'July 19th 2017'
				}
			]
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
</style>