<template>
	<div class="column is-4">
        <div class="card">
          <div class="card-image is-hidden-touch">
            <figure class="image is-2by1">
              <img :src='img' border="0">
            </figure>
          </div>
          <div class="card-content">
            <h4 class="has-text-centered is-size-3-desktop is-size-5-touch title"> {{title}} </h4>
            <p class="content">
            {{ description }}
            </p>
            <router-link 
            	:to="{name: 'project', params: {key: projKey}}"
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
	width: 100%;
}

.column {
  display: flex !important;
}
</style>