<template>
	<div class="column is-4">
        <div class="box">
          <div class="service-logo">
            <app-icon :name="iconName" scale="4"></app-icon>
          </div>
          <div class="info">
            <h4 class="title is-4"> {{ title }} </h4>
            <ul class="content has-text-left">
              <li>
                <app-icon name="check" scale="1"></app-icon>
                <span> {{ subI }} </span> 
              </li>
              <li>
                <app-icon name="check" scale="1"></app-icon>
                
                <span> {{ subIi }} </span> 
              </li>
              <li>
                <app-icon name="check" scale="1"></app-icon>
                
                <span> {{ subIii }} </span> 
              </li>
            </ul>
          </div>
        </div> 

      </div> 
</template>

<script>

export default {
	name: 'service',

	props: ['title', 'subI', 'subIi', 'subIii', 'iconName']
}
</script>

<style scoped>

h4.title {
  margin-top: 2rem;
}

/*.column {
  display: inline-flex;
}*/
</style>