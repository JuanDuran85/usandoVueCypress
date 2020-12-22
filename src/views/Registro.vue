<template>
    <div class="container">
        <h1 class="my-5">Registro de Usuario</h1>
        <form @submit.prevent="agregandoUser">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="formulario.email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="formulario.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
</template>

<script>
import firebase from 'firebase';

    export default {
        name: 'Registro',
        data() {
            return {
                formulario: {
                    email: '',
                    password: ''
                },
                errorCode: '',
                errorMessage: ''
            }
        },
        methods: {
            agregandoUser(){
                if (this.formulario.email && this.formulario.password.length > 5) {
                     firebase.auth().createUserWithEmailAndPassword(this.formulario.email, this.formulario.password)
                        .then((user) => {
                            console.log(user);
                            this.$router.push({name: 'Home'});
                        })
                        .catch((error) => {
                            this.errorCode = error.code;
                            this.errorMessage = error.message;
                        });    
                } else {
                    console.log("No se puede...");
                }
            }
        },
    }
</script>

<style>

</style>