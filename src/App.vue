<script>
  import axios from "axios";

  export default {
    data() {
      return{
        projects: []
      }
    },
    methods: {
      getProjects(){
        axios.get("http://127.0.0.1:8000/api/projects")
        .then((response)=>{
            this.projects = response.data.data
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
