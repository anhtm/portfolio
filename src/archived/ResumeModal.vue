<template>
	<div class="modal">
	  <div class="modal-background" @click="notifyClose()"></div>
	  <div class="modal-content">
	    <p class="image">
	      <img src="../assets/resume-v2018.pdf"
	      	   alt="">
	    </p>
	  </div>
	  <button class="modal-close is-large" 
	   		  aria-label="close"
	   		  @click="notifyClose()"></button>
	</div>
</template>

<script>

export default {
	name: 'img-modal',

	props: [''],

	methods: {

		notifyClose() {
  			return this.$emit('exit', true)

		}
	}
}
</script>