<template>
	<div>
		<!-- About -->
    <section class="section is-medium" id="section-about">
      <div class="container" id="about">
        <div class="columns">

          <div class="column is-7">
            <div id="bio">
              
                <h3 class="title is-spaced">
                  About me
                </h3>
        
              <div id="about-me" class="content">
                <p>
                Hi! My name is Minh. I'm a software developer based in Montreal, Quebec. 

                </br> </br>

                I'm currently doing my internship at Dynamicly. I use Javascript in my day-to-day work, including React.js & Node.js. I'm responsible for developing and maintaining an in-house React frontend library that we use across internal and external applications. I also do a lot of other things also! If you want to know more about me and my skill sets, send me a message, or check out my resume here.

                </br> </br>

                I love puzzles since I was a kid, so for me solving problem is like playing a game - it's challenging but also very much interesting. Sometimes you lose, but in the end you always learn something new. 

                <br><br>

                I'm also currently enrolled in Computer Science program at Lasallle College, and specialized in Video Game Programming. So yes, in my free time I build games or join hackathons for fun. I have participated in several hackathons, more details can be found here.

                <br><br>

                So that's about it for me. If you'd love to have a chat with me or contact me for opportunities, please don't hesitate to <router-link :to="{name: 'contact'}" class="is-warning">send me a message.</router-link> 

                <br><br>

                Have a great day :)
                
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

<style lang="scss" scoped>
#about-me {
  p {
  text-align: justify;
  margin-bottom: 3rem;
 } 
}
</style>