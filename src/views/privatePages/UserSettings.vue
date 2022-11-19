<template>
  <div id="UserSettings" class="container mt-5">
    <div class="myform form shadow">
      <div class="col-md-12 text-center mb-3">
        <p class="nonePointer text-primary fw-bold">!! Double click on the name or email to make the change !!</p>
      </div>
      <form @submit.prevent="save()" name="registration">
        <img class="profileImage" src="../../assets/profilePicture.png"
             v-if="user.image == null || user.image === undefined" alt="Profile Image">
        <img class="profileImage" :src="user.image" :alt="'profile image of ' + user.image" v-else>

        <div class="form-group text-left">
          <label>User name</label>
          <div class="form-control responsive" v-if="isDisable"
               :class="{'disable': isDisable === true}"
               @dblclick="setOldNameAndEmail">{{ user.username }}
          </div>
          <input v-else type="text" name="name" class="form-control" id="name"
                 placeholder="Enter your user name"
                 v-model="newName"
                 v-focus>
        </div>
        <div class="form-group text-left">
          <label>Email</label>
          <div class="form-control responsive" v-if="isDisable"
               :class="{'disable': isDisable === true}"
               @dblclick="setOldNameAndEmail">{{ user.email }}
          </div>
          <input v-else type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                 placeholder="example@example.com"
                 v-model="newEmail">
        </div>
        <div class="form-group text-left">
          <label>Profile Picture</label>
          <div class="form-control" v-if="isDisable"
               :class="{'disable': isDisable === true}"
               @dblclick="setOldNameAndEmail">
            <p class="responsive">{{ user.image }}</p>
          </div>
          <input v-else type="text" name="name" class="form-control" id="profImage"
                 placeholder="URL of your profile picture"
                 v-model="newImageUrl">
        </div>
        <div class="form-group text-left">
          <label>Password</label>
          <input type="password" name="password" id="password" class="form-control"
                 aria-describedby="emailHelp" placeholder=""
                 v-model="password"
                 :disabled="isDisable">
        </div>
        <div class="form-group text-left">
          <label>Confirm Password</label>
          <input type="password" name="password" id="" class="form-control"
                 aria-describedby="emailHelp" placeholder=""
                 v-model="confirmPassword"
                 :disabled="isDisable">
        </div>
        <div class="col-md-12 text-center mb-3">
          <button type="submit" class=" btn btn-block mybtn btn-primary" :disabled="isDisable">Update Settings</button>
        </div>
        <div class="col-md-12 text-center mb-3" v-if="feedback">
          <p class="btn btn-block nonePointer alert-danger">{{ feedback }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {GlobalMixin} from "@/mixins/GlobalMixin";
import {UserSettings} from "@/mixins/UserSettings";

export default {
  name: "UserSettings",
  mixins: [UserSettings, GlobalMixin],
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/authenticationStyles.css";

.profileImage {
  display: inline-block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  aspect-ratio: auto 100 / 100;
}

.myform {
  max-width: 700px !important;
}

.disable {
  background-color: #e9ecef;
}

.responsive {
  width: 100%;
  overflow: auto;
}
</style>