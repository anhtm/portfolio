<template>
	<div>
    	<app-banner></app-banner>
		
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
	components: {
    [Banner.name]: Banner
		
	}
}
</script>