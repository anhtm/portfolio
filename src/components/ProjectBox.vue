<template>
	<!-- <div class="box section">
	  <article class="media">
	    <div class="media-left">
	      <figure class="image">
	        <img src="" alt="Image">
	      </figure>
	    </div>
	    <div class="media-content">
	      <div class="content">
	      	<h1 class="">{{title}}</h1>
	        <p>
	          {{description}}
	        </p>
	      </div>
	      <nav class="level is-mobile">
	        <div class="level-left">
	          <a class="level-item">
	            <router-link 
	            	:to="{name: 'proj', params: {key: projKey}}"
	            	class="button is-black is-outlined">
	            	See Project 
	            	
	            </router-link>
	          </a>
	        </div>
	      </nav>
	    </div>
	  </article>
	</div> -->

	<div class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img v-if="projKey == 1" src="../assets/abcdchef-res.png">
              <img v-else-if="projKey == 2" src="../assets/buckist-res.png">
              <img v-else-if="projKey == 3" src="../assets/memo-res.png">
            </figure>
          </div>
          <div class="card-content">
            <h4 class="has-text-centered is-size-3-desktop is-size-5-touch title"> {{title}} </h4>
            <p class="content">
            {{ description }}</p>
            <router-link 
            	:to="{name: 'proj', params: {key: projKey}}"
            	class="button is-black is-outlined">
            	See Project 
            	
            </router-link>
            
          </div>
        </div>
    </div>
</template>

<script>

export default {
	name: 'project',

	props: ['title', 'description', 'projKey', 'img']
}
</script>

<style scoped>
img {
	width: 50%;
}

.column {
  display: inline-flex;
}
</style>