<template>
	<div>
		<!-- Projects -->
    <section id="section-projects" class="section is-medium">
      <div class="container has-text-centered" id="projects">

      <h3 class="title"> Projects & Hackathons </h3>

        <div class="columns is-multiline">
            <project v-for="(proj,index) in projects"
                     :title="proj.title"
                     :proj-key="index + 1"
                     :description="proj.description"
                     :img="proj.imgUrl"
                     :key="index"
                     class="project">
                        
            </project>
        </div>
      </div>
    </section>
	</div>
</template>


<script>
import ProjectBox from '@/components/ProjectBox.vue'

export default {
  components: {
    [ProjectBox.name]: ProjectBox
  },

  data() {
    return {
      projects: [
        {
          title: "Fresh Fridge",
          imgUrl: "https://preview.ibb.co/mnH2x0/Screenshot-20181116-171853.png",
          description: "​A mobile application that helps keeping track of kitchen inventory and food expiry information to reduce domestic food waste."
        },
        {
          title: "GitBit",
          description: "​A tool that allows users to merge commits from various git hosting platforms to encourage code regurlarity and quality.",
          imgUrl: "https://preview.ibb.co/gVCkH0/fcc-baner.png"
        },
        {
          title: "BuildAR",
          description: "​An application that uses camera input/output to project interactive & augmented how-to user manuals.",
          imgUrl: "https://preview.ibb.co/hGJvjf/mission-hack.png" 
        },
        {
          title: "Cooktu",
          // imgUrl: "https://image.ibb.co/nOLTPR/abcdchef_res.png",
          imgUrl: "https://preview.ibb.co/hgrBAL/Screenshot-from-2018-11-18-15-49-23.png",
          description: "An online meal-sharing application (SPA) that allows users to browse, book and pay for meal events through a secured platform.",
        },
        {
          title: "Buckist",
          // imgUrl: "https://image.ibb.co/cspKER/buckist_res.png",
          imgUrl: "https://preview.ibb.co/mSr04f/Screenshot-from-2018-11-18-15-58-15.png",
          description: "In short for bucket list, Buckist is a full-stack Flask application that helps users keeping track of bucket ideas and wishes.",
        },
        {
          title: "MemoZoo",
          // imgUrl: "https://image.ibb.co/ncf6Tm/memo_res.png",
          imgUrl: "https://preview.ibb.co/jLQtPf/Screenshot-from-2018-11-18-16-03-30.png",
          description: "A single-player memory game in an animated animal theme, written in JavaScript and jQuery."
        }
      ]
    }
  }
}

</script>

<style scoped>


</style>