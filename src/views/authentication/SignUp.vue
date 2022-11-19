<template>
  <div id="SignUp" class="container">
    <div class="myform form mt-5 shadow">
      <div class="logo mb-3">
        <div class="col-md-12 text-center">
          <h1>Sign Up</h1>
        </div>
      </div>
      <form @submit.prevent="signUp()" name="registration">
        <div class="form-group text-left">
          <label>User Name</label>
          <input type="text" name="name" class="form-control" id="firstname" aria-describedby="emailHelp"
                 placeholder="Enter your user name"
                 v-model="username"
                 v-focus>
        </div>
        <div class="form-group text-left">
          <label>Email</label>
          <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                 placeholder="example@example.com"
                 v-model="email">
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
        <div class="form-group text-left">
          <label>Confirm Password</label>
          <div class="input-group">
            <input :type="visibility" name="confirm password" id="confirm password" class="form-control"
                   placeholder=""
                   v-model="confirmPassword">
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
        <div class="col-md-12 text-center mb-3">
          <button type="submit" class=" btn btn-block mybtn">Sign up</button>
        </div>
        <div class="col-md-12 text-center mb-3" v-if="feedback">
          <p class="btn btn-block nonePointer alert-danger">{{ feedback }}</p>
        </div>
        <div class="col-md-12 ">
          <div class="form-group">
            <p class="text-center">Already a member?
              "
              <router-link to="/sign-in" id="signin">Sign in here</router-link>
              "
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {Authentications} from "@/mixins/Authentications";

export default {
  name: "signUp",
  mixins: [Authentications],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      feedback: null,
      visibility: "password"
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
@import "../../assets/styles/authenticationStyles.css ";
</style>