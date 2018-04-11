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
                Welcome! My name is Minh, I'm web developer living in Montreal, Quebec. 

                </br> </br>

                I build web applications (JavaScript & Python); both frontend and backend. My areas of expertise are JavaScript frameworks. I also do web design as a hobbie.

                </br> </br>

                At the same time I'm being enrolled in Computer Science program in College LaSalle, specialized in Video Game Programming.

                <br><br>

                I love modern and stunning interfaces, but also fascinated by the beauty of scalability and modularity of a great web app.

                <br><br>
                If you need to build a website for either personal or professional use, don't hesitate to 
                <a href="mailto:anhtm.mtl@gmail.com?Subject=Hi, Minh!" target="_blank">send me a message.</a>
                
                </p>
              </div>

              <app-button name="View Projects" 
                          to-route="projects"
                          class="is-warning"
              ></app-button>
              
              <app-button 
                name="Say Hi"
                class="button"
                href="mailto:anhtm.mtl@gmail.com?Subject=Hi, Minh!" target="_blank"> 
                </app-button>

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