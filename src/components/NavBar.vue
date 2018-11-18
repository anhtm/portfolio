<template>
	<div class="section">

	    <div class="level">
	    	<div class="container">
	    		<div class="level-item">
	    			<router-link 
	            	class="navbar-item title is-2 has-text-weight-light"
	            	:to="{name: 'home'}"
	            	id="brand-name">
	            	 M I N H
	          </router-link>
	    		</div>
	    	</div>
	    </div>
	    
    	<div class="columns is-centered">
    		<div class="column is-half">
    			<div class="level">
    				<div class="level-item" v-for="tab in tabs">
    					<router-link 
                v-if="tab !== 'resume'"
                :to="{name: tab}"
                :class="{'is-chosen': $route.name == tab}">

                {{tab}}
              </router-link>
              <a v-else href="https://drive.google.com/file/d/1HN3porHXsg7TT1qDB3WbWXqu1yzyWFCM/view?usp=sharing" target="_blank">{{tab}}</a>
    				</div>
    				
    			</div>
    		</div>
    	</div>
	   
	</div>
</template>

<script>

export default {
	name: 'app-navbar',

	data() {
		return {
			tabs: ['home', 'about', 'projects', 'resume', 'contact']
		}
	},

	
}
</script>

<style scoped>
	/* Navbar */
#brand-name {
  border: 1px solid black;
}

#brand-name:hover {
	background-color: white !important;
}

div.columns {
	margin-top: 1rem;
}

.is-chosen {
	border-bottom: 1px solid black;
}

.navbar-burger {
  margin-top: 1rem;
}
.navbar-burger:active {
  color: white !important;
}

.router-link {
  color: black !important;
}
</style>