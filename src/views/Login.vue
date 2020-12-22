<template>
  <div class="container">
    <h1 class="my-5">Login</h1>
    <div v-if="errores">
      <p class="text-center" id="mensajeError">{{errores}}</p>
    </div>
    <form class="text-left" @submit.prevent="login" data-cy="formularioEntrar">
      <div class="form-group">
        <label >Correo</label>
        <input type="email" class="form-control" v-model="formLabelAlign.user" data-cy="inputCorreo" placeholder="Ingresa tu correo">
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" class="form-control" v-model="formLabelAlign.password" data-cy="inputPassword" placeholder="Ingresa el password">
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
        formLabelAlign: {
            user: '',
            password: '',
        },
        errores: null,
    }
    },
    methods: {
        login() {
            console.log(this.formLabelAlign.user);
            Firebase.auth()
            .signInWithEmailAndPassword(
                this.formLabelAlign.user, 
                this.formLabelAlign.password
            )
            .then(() =>{
                alert('Entraste');
                this.errores = null;
                this.$router.push('home');
            })
            .catch(error => {
              console.error(error.message)
              this.errores = error.message;
            });
        }
    },

}
</script>