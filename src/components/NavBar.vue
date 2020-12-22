<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" data-cy="rutaRegistro" :to="{name: 'Registro'}">Registro</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="activoDesactivo" href="#" tabindex="-1" :disabled="desactivando" data-cy="salidaUser" @click="salir">LogOut</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase';

export default {
    name: 'NavBar',
    computed: {
        ...mapGetters(['enviandoUser']),
        activoDesactivo(){
            return this.enviandoUser ? '' : 'disabled';
        },
        desactivando(){
            return this.enviandoUser ? false : true;
        }
    },
    methods: {
        salir(){
            firebase.auth().signOut()
            .then(resp => {
                console.log(resp);
                this.$router.push({name: 'Login'});
            }).catch(error => {
                console.error(error);
            })
        }
  },
}
</script>

<style>

</style>