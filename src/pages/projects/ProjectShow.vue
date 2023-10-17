<script>
    import axios from "axios";
    import dayjs from "dayjs"

    export default{
        data(){
            return{
                project: {},
            }
        },
        methods:{
            getProject() {
            axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
                .then(resp => {
                this.project = resp.data     
                console.log(this.project)       
                })
            },

            getImg(proj){
            return `http://127.0.0.1:8000/storage/${proj.thumb}`
            },

            formatDate(date){
                return dayjs(date).format("DD-MM-YYYY")
            }

        },
        mounted(){
            this.getProject();
        }
    }
</script>

<template>
    <div class="container text-white">
        <div class="row">
            <div class="col">
                <h1 class="display-4">{{ project.title }}</h1>
                <img :src="getImg(project)" alt="">
                <div class="badge-container d-flex">
                    <span class="badge" v-for="tech in project.technologies">{{ tech.name }}</span>
                </div>
                <!-- <p>Type: {{ project.type.type }}</p> -->
                <p class="">GitHub: 
                    <a href="{{ project.link }}">Link</a>
                </p>
                <p>{{ project.description }}</p>
                <p>Release: {{ formatDate(project.release) }}</p>
            </div>
        </div>
        <div class="button-container text-center mt-3">
            <router-link class="btn btn-primary more-button" :to="{name: 'projects'}">SEE AL MY PROJECT</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>