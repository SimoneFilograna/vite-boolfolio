<script>
import axios from 'axios';

    export default{
        data(){
            return{
                userForm: {
                    name: "",
                    email: "",
                    message: "",
                },

                success: null,
                errors: null,
            }
        },
        methods:{
            onClickSubmit(){
                axios.post("http://localhost:8000/api/contacts", this.userForm)
                .then(resp => {
                    console.log(resp.data)
                    this.success = resp.data.message
                    console.log(this.success)
                    this.errors = null;
                }).catch(e => {
                    this.errors = e.response?.data?.message ?? e.message;
                })
            } 
        }
    }
</script>

<template>
    <div class="container text-white">
        <div class="row">
            <div class="col">

                <div class="alert alert-danger" v-if="errors">
                Qualcosa è andato storto: {{ errors }}
                </div>

                <form @submit.prevent="onClickSubmit" v-if="!success">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome e Cognome</label>
                        <input type="text" id="name" class="form-control" v-model="userForm.name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" class="form-control" v-model="userForm.email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea id="message" class="form-control" v-model="userForm.message"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary more-button mt-4">Invia</button>
                </form>

                <div class="alert alert-success" v-else>
                    {{ this.success }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>