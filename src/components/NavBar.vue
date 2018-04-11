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
    				<div class="level-item"
    					 v-for="tab in tabs"
    					 
    					 >
    					<router-link 
			            	class="is-link is-uppercase" 
			            	:to="{name: tab}"
			            	:class="{'is-chosen': $route.name == tab}">

			            	{{tab}}

			            </router-link>
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
			tabs: ['home', 'about', 'projects']
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


/*.navbar-burger {
  margin-top: 1rem;
}
.navbar-burger:active {
  color: white !important;
}*/
</style>