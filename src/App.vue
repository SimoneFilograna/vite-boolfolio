<script>
  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";
  import Card from "./components/Card.vue";
  import axios from "axios";

  export default {
    components:{
      TheHeader,
      TheFooter,
      Card,
    },
    data() {
      return{
        projects: [],
        pagination:{}
      }
    },
    methods: {

      // CHIAMATA AXIOS PER OTTENERE I PROGETTI
      getProjects(){
        axios.get("http://127.0.0.1:8000/api/projects")
        .then((response)=>{
            const result = response.data;
            this.projects = result.data;
            delete result.data;
            this.pagination = result;
          })       
        },
      },

      mounted() {
        this.getProjects()
      }
    }
</script>

<template>
  <TheHeader></TheHeader>
  <div class="content p-5">

    <div class="jumbotron p-5 mb-4 mt-5 rounded-3 text-light">
    <div class="container py-5 px-5">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center gap-4">
                <h1 class="display-4 fw-bold text-center">
                    Welcome to my Portfolio
                </h1>
        
                <p class="fs-5 text-center lh-lg">Hello, I am Simone Filograna, a passionate web developer who has been immersed in the world of IT since the age of 15. Thanks to my curiosity, I have had the opportunity to delve into various programming languages, always striving to learn and preferring logic over memorization. There is no memory that can surpass a well-structured reasoning.</p>
            </div>
            <div class="col-12 col-lg-6 text-center">
                <img src="./assets/img/right-side.svg" class="welcome-svg " alt="">             
            </div>
        </div>

    </div>
</div>

    <div class="container-fluid text-light text-center p-5">
        <h2 class="display-5 fst-italic">My works</h2>

        <div class="row row-cols-3 mt-5 g-5 p-2" >
                <div class="col mt-5" v-for="project in projects">
                  <Card :singleCard="project"></Card>                   
                </div> 
        </div>
    </div>

    <!-- <div class="watch-more mt-5 text-center">
        <a href="{{route("admin.projects.index")}}" class="btn btn-primary more-button">WATCH MORE</a>
    </div> -->
</div>
<TheFooter></TheFooter>
</template>

<style>
  body{
    background-image: url(./assets/img/bg-body.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
