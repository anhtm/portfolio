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
                Hi! I’m Minh, a <strong>web developer</strong> living in Montreal, Quebec. 

                </br> </br>

                I build web applications (Javascript & Python), both frontend and backend apps. I also do web design (UI) on the other hand.

                </br> </br>

                I'm currently enrolled in Computer Science course in College LaSalle, specialized in Video Game Programming, which is quite interesting.

                <br><br>

                I love modern and stunning interfaces, but also fascinated by the beauty of scalability and modularity of a great web app. Best of both worlds, I would say.

                <br><br>
                If you need a website for either personal or professional use, don't hesitate to 
                <router-link :to="{name: 'contact'}" class="is-warning">send me a message.</router-link> 
                </p>
              </div>

              <app-button name="View Projects" 
                          to-route="projects"
                          class="is-warning"
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
</style>