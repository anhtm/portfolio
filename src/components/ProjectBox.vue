<template>
	<div class="box section">
	  <article class="media">
	    <div class="media-left">
	      <figure class="image is-128x128">
	        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
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
	</div>
</template>

<script>

export default {
	name: 'project',

	props: ['title', 'description', 'projKey']
}
</script>