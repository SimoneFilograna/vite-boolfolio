<script>
    export default{

    }
</script>

<template>
    <nav class="navbar navbar-expand-md shadow-sm">
            <div class="container p-2">
                <h2 class="text-white pe-3">Simone Filograna</h2>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto d-flex gap-2">
                        <li class="nav-item">
                            <router-link class="text-decoration-none text-white" :to="{name: 'homepage'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-decoration-none text-white" :to="{name: 'contacts'}">Contattami</router-link>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
            
                        <li class="nav-item">
                            <a class="nav-link text-white" href="http://127.0.0.1:8000/login">Login</a>
                        </li>                      
                        
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style lang="scss" scoped>

</style>