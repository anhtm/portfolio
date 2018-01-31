<template>
	<router-link 
		class="button is-black"
		:to="{name: toRoute}"
		id="my-btn">

		{{name}}

		<slot></slot>
	</router-link>
</template>

<script>

export default {

	props: ['name', 'toRoute']
}
</script>

<style scoped>

#my-btn {
  border-radius: 0 ;
  margin-top: 1rem;
  padding: 1.5rem !important;
  margin-right: 0.5rem;
}

</style>