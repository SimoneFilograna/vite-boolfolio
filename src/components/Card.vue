<script>
    export default{
        props:{
            singleCard: Object
        },
        methods:{

            // FUNZIONE PER OTTENERE L'IMMAGINE DAL PROGETTO BACKEND
        getImg(singleCard){
            return `http://127.0.0.1:8000/storage/${singleCard.thumb}`
            }
        }
    }
</script>

<template>
        <div class="card proj-card">
            <img :src="getImg(singleCard)" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{singleCard.title}}</h5>
            </div>
        </div>
</template>

<style scoped>
    .proj-card{
            background-color: transparent;
            color: white;
            border-color: transparent;
            border-radius: 2rem;


            .card-img-top{
                border-radius: 2rem;
            }
        }    
</style>