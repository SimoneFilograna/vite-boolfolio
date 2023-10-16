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

</style>
