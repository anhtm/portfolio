<template>
	
    <div class="column is-2-desktop is-3-tablet is-4-mobile my-skill">
    	<i :class="name"></i>
    </div>
</template>

<script>

export default {

	name: "skill",

	props: ['name']
}

</script>

<style scoped>

i {
	font-size: 3rem;
}
</style>