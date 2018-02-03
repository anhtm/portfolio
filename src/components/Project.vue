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
					<img src="https://image.ibb.co/iRv6B6/homepage.png" alt="homepage" border="0">
					
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="https://image.ibb.co/eEDF4R/homepage_fr.png" alt="homepage_fr" border="0">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					
					<img src="https://image.ibb.co/hiJhjR/Upcoming.png" alt="Upcoming" border="0">

				</figure>
			  </slide>

			  <slide>
			    <figure>
					<img src="https://image.ibb.co/g7sWdm/meal_page.png" alt="meal_page" border="0">

				</figure>
			  </slide>

			  <slide>
			    <figure>
					<img src="https://image.ibb.co/gt4oPR/book_meal.png" alt="book_meal" border="0">
				</figure>
			  </slide>

			  <slide>
			    <figure>

					<img src="https://image.ibb.co/hUfv4R/create_meal.png" alt="create_meal" border="0">
				</figure>
			  </slide>
			  
			  <slide>
			    <figure>
					<img src="https://image.ibb.co/d49Yr6/signup.png" alt="signup" border="0">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="https://image.ibb.co/dbJF4R/review_msg.png" alt="review_msg" border="0">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					<img src="https://image.ibb.co/ckbPym/settings.png" alt="settings" border="0">
				</figure>
			  </slide>
			  <slide>
			    <figure>
					
					<img src="https://image.ibb.co/nBEcJm/payout.png" alt="payout" border="0">
				</figure>
			  </slide>
			 </carousel>


			 <!-- Buckist images -->
			 <carousel :perPage="1" class="section" v-if="index == 1">
				<slide>
					<figure>
						
						<img src="https://image.ibb.co/iMsNZR/homepage.png" alt="homepage" border="0">

					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/dxiqM6/signup.png" alt="signup" border="0">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/hQ9KER/signin.png" alt="signin" border="0">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/j2bMTm/2lists.png" alt="2lists" border="0">
					</figure>
				</slide>
				<slide>
					<figure>
						
						<img src="https://image.ibb.co/fpN6uR/Screenshot_2018_02_01_at_6_24_51_PM.png" alt="Screenshot_2018_02_01_at_6_24_51_PM" border="0">

					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/dWfsZR/edit.png" alt="edit" border="0">

					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/nixvom/rename.png" alt="rename" border="0">
					</figure>
				</slide>
			</carousel>

			<carousel :perPage="1" class="section" v-if="index == 2">
				<slide>
					<figure>
						<img src="https://image.ibb.co/d9x9g6/begin.png" alt="begin" border="0">
					</figure>
				</slide>
				<slide>
					<figure>
						<img src="https://image.ibb.co/njcmTm/played.png" alt="played" border="0">
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
					'I was part of a team of 3 developers, and worked as a frontend developer. Our mission was to build a completely frontend application that renders data from a backend JSON API, and is fully responsive across devices. My responsibilities include creating wireframes and prototypes of the application, and building the frontend architecture based on the design. I used Vue.js to handle and fetch data from our API, and Vue-router for routing and authentication. I learned a lot of new technologies and how to solve problems while implementing them into the application (Amazon S3 Bucket for photos management, Stripe.js for payment/payout procedures).',
					technologies: ['Frontend', 'UI/UX Design', 'Vue.js', 'Javascript', 'Bulma CSS Framework', 'JSON APIs', 'Stripe.js', 'Amazon S3', 'Internationalization', 'HTML/CSS'],
					url: 'https://abracadachef.com/#/',
					date: 'January 28th 2018'
				},

				{
					title: 'Buckist',
					whatIdid: `
						This was my first fullstack application, which I built using Flask framework.
						The idea was simple: build a bucket list application with fundamental CRUD functionalities. I used SQLAlchemy (a Flask extension) as to set up the database schema. I found the most challenging part of the project was the deployment on Heroku. I was unfamiliar with the process, and found unexpected bugs, which took me quite a bit of time for researching and resolving.`,
					technologies: ['Backend', 'Python on Flask', 'DevOps', 'Bulma CSS Framework', 'HTML/CSS', 'Javascript', 'jQuery', 'SQLAlchemy'],
					url: 'https://buckist.herokuapp.com/',
					date: 'September 30th 2017'
				},

				{
					title: 'MemoZoo',
					whatIdid: 'I built this simple single-player memory game as a small project to get to know jQuery and JavaScript when I started coding. Understanding the logic behind the game and implementing it in into Javascript code was a major part of the project.',
					technologies: ['UI', 'Javascript', 'jQuery', 'HTML/CSS'],
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