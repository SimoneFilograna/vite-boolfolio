<script>
  import axios from "axios";

  export default {
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
        }
      },
      mounted() {
        this.getProjects()
      }
    }
</script>

<template>
  <div class="container">
    <h1>hello vue</h1>
  </div>
</template>

<style>

</style>
