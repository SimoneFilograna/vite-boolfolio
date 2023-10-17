<script>
    import Card from "../../components/Card.vue";
    import axios from "axios"; 

    export default{
        components:{
            Card,
        },
        data(){
            return{
                projects: [],
                pagination:{}
            }
        },
        methods: {

        // CHIAMATA AXIOS PER OTTENERE I PROGETTI
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects")
                .then((response) => {
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
    <div class="container text-light text-center pt-5">
        <h2 class="display-5 fst-italic">CHECK MY WORKS</h2>

        <div class="row row-cols-3 mt-5 g-5 p-2" >
                <div class="col mt-5" v-for="project in projects">
                    <Card :singleCard="project"></Card>                   
                </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>