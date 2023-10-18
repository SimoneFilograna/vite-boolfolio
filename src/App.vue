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
        
      }
    },
    
    }
</script>

<template>
  
  <TheHeader></TheHeader>

  <main>
    <router-view></router-view>
  </main>
  
<TheFooter></TheFooter>

</template>

<style lang="scss">
  @use "./styles/partials/mixins";
  @use "./styles/partials/variables";

  body{
    background-image: url(./assets/img/bg-body.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    background-attachment: fixed;

    .more-button{
            background-color: variables.$button-color;
            border: 0;
            width: 10%;
        &:hover{
            @include mixins.box-shadow;
            }
        }
  }
</style>
