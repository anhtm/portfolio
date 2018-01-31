<template>
	<div>
		<!-- About -->
    <section class="section is-medium" id="section-about">
      <div class="container" id="about">
        <div class="columns">

          <div class="column is-7">
            <div id="bio">
              
                <h3 class="title is-spaced">
                  A B O U T
                </h3>
        
              <div id="about-me" class="content">
                <p>
                Hi! I’m Minh, a freelance <span>web developer</span> living in Montreal, Quebec. </br> </br>

                I create modern and fully responsive websites, from static sites to full-stack applications. My area of expertise includes Python & Javascript frameworks. 
                </br> </br>

                As a developer with lots of passion for clean and modern design, I always challenge myself to combine the beauty of both worlds to produce high-quality, well-functioning websites with stunning interfaces. </br> </br>

                If you need a website for either personal or professional use, don't hesitate to 
                <router-link :to="{name: 'contact'}">send me a message.</router-link> 
                </p>
              </div>



              <!-- <app-button name="View Skills" to-route="projects"></app-button> -->

              <app-button name="View Services" 
                          to-route="services"
              ></app-button>
              <app-button name="Say Hi!" 
                          to-route="contact"
              ></app-button>

            </div>
          </div>

          <div class="column is-offset-1 is-4 is-hidden-touch">
            <figure class="image">
              <img id="ava" class="img-thumbnail" src="http://i.imgur.com/uNs81id.jpg" alt="avatar">  
            </figure>
          </div>

        </div>
      </div>
    </section>
	</div>
</template>

<style scoped>
	/* About */
/*#section-about {
  background-color: hsl(0, 0%, 96%)
}*/

#about-me p {
  text-align: justify;
  margin-bottom: 3rem;
}

#about-me span {
  font-weight: bold;
}
</style>