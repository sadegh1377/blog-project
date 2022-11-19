<template>
  <div id="SignIn" class="container">
    <div class="myform form mt-5 shadow">
      <div class="logo mb-3">
        <div class="col-md-12 text-center">
          <h1>Sign in</h1>
        </div>
      </div>
      <form @submit.prevent="signIn()" name="login">
        <div class="form-group text-left">
          <label>Email</label>
          <input type="email" name="email" class="form-control" aria-describedby="emailHelp"
                 placeholder="example@example.com"
                 v-model="email"
                 v-focus>
        </div>
        <div class="form-group text-left">
          <label>Password</label>
          <div class="input-group">
            <input :type="visibility" name="password" id="password"
                   class="form-control "
                   aria-describedby="emailHelp" placeholder=""
                   v-model="password">
            <span v-if="visibility === 'password'" class="input-group-btn  border p-1 rounded"
                  @click="showPassword()">
               <font-awesome-icon class="reveal align-content-center" icon="eye"></font-awesome-icon>
          </span>
            <span v-if="visibility === 'text'" class="input-group-btn border-right-0 border p-1 rounded"
                  @click="hidePassword()">
               <font-awesome-icon class="reveal align-content-center" icon="eye-slash"></font-awesome-icon>
          </span>
          </div>
        </div>
        <div class="col-md-12 text-center mb-3 ">
          <button type="submit" class="btn mybtn ">Sign in
          </button>
        </div>
        <div class="col-md-12 text-center mb-3" v-if="feedback">
          <p class="btn btn-block nonePointer  alert-danger">{{ feedback }}</p>
        </div>
        <div class="col-md-12 ">
          <div class="login-or">
            <hr class="hr-or">
            <span class="span-or">or</span>
          </div>
        </div>
        <div class="form-group">
          <p class="text-center">Not a member?
            "
            <router-link to="/sign-up" id="signup">Sign Up Now</router-link>
            "
          </p>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import {Authentications} from "@/mixins/Authentications";

export default {
  name: "SignIn",
  mixins: [Authentications],
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
}
</script>

<style scoped>
@import "../../assets/styles/authenticationStyles.css ";
</style>