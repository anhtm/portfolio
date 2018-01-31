<template>
	<div class="section">
		<!-- Navbar -->
	    <!-- <div class="container">
	      <nav class="navbar is-transparent">
	        <div class="navbar-brand">
	          	<router-link 
	            	class="navbar-item title is-2 has-text-weight-light"
	            	:to="{name: 'home'}">
	            	 M I N H
	            </router-link>
	          <button class="button is-white navbar-burger burger" data-target="my-menu">
	              <span></span>
	              <span></span>
	              <span></span>
	          </button>
	        </div>

	        <div class="navbar-menu" id="my-menu">
	          <div class="navbar-end">
	            <a class="navbar-item" href="assets/resume-MinhAnhTrinh.pdf" target="_blank">
	            RESUME
	            </a>
	            <router-link 
	            	class="navbar-item is-link" 
	            	:to="{name: 'about'}">
	            	ABOUT
	            </router-link>
	            <router-link 
	            	class="navbar-item is-link"
	            	:to="{name: 'projects'}">
	            	PROJECTS
	            </router-link>
	            <router-link 
	            	class="navbar-item is-link"
	            	:to="{name: 'services'}">
	            	SERVICES
	            </router-link>
	            <router-link 
	            	class="navbar-item is-link"
	            	:to="{name: 'contact'}">
	            	CONTACT
	            </router-link>
	          </div>
	        </div>
	      </nav>
	    </div> -->

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
    				<div class="level-item">
    					<router-link 
			            	class="is-link" 
			            	:to="{name: 'about'}">
			            	ABOUT
			            </router-link>
    				</div>
    				<div class="level-item">
    					<router-link 
			            	class="is-link"
			            	:to="{name: 'projects'}">
			            	PROJECTS
			            </router-link>
    				</div>
    				<div class="level-item">
    					<router-link 
			            	class="is-link"
			            	:to="{name: 'services'}">
			            	SERVICES
			            </router-link>
    				</div>
    				<div class="level-item">
    					<router-link 
			            	class="is-link"
			            	:to="{name: 'contact'}">
			            	CONTACT
			            </router-link>
    				</div>

    			</div>
    		</div>
    	</div>
	   
	</div>
</template>

<script>

export default {
	name: 'app-navbar'
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


/*.navbar-burger {
  margin-top: 1rem;
}
.navbar-burger:active {
  color: white !important;
}*/
</style>