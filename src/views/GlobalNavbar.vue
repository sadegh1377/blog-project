<template>
  <div id="GlobalNavbar">
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container nav-font-size">
        <router-link to="/" class="navbar-brand opacity">Brand</router-link>
        <div class="nav-font-size">
          <router-link to="/" class="mx-3">Home</router-link>
          <router-link to="/sign-in" class="mx-3 registration" v-if="!isAuthenticated">Sign in</router-link>
          <router-link to="/sign-up" class="mx-3 registration" v-if="!isAuthenticated">Sign up</router-link>
          <router-link to="/new-article" class="mx-3 registration" v-if="isAuthenticated">
            <font-awesome-icon icon="pen-to-square"/>
            New Article
          </router-link>
          <div class="btn-group no-right-margin" v-if="isAuthenticated">
            <button class="btn dropdown-toggle" type="button" id="defaultDropdown"
                    data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              <img class="profImage border" src="../assets/profilePicture.png"
                   alt="p" v-if="user.image ===null || user.image === ''"/>
              <img class="profImage" :src="user.image" alt="p" v-else/>
              {{ user.username }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
              <li>
                <button class="dropdown-item" @click="goToSetting()">
                  <font-awesome-icon icon="gear" class="margin-right"/>
                  Settings
                </button>
              </li>
              <li>
                <button class="dropdown-item text-danger" @click="logOut()">
                  <font-awesome-icon icon="right-from-bracket" class="margin-right"/>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {GlobalMixin} from "@/mixins/GlobalMixin";

export default {
  name: "GlobalNavbar",
  mixins: [GlobalMixin],
  data() {
    return {}

  },
  methods: {
    goToSetting() {
      this.$router.push({name: "UserSettings"}).catch(() => {
      });
    },
    logOut() {
      localStorage.removeItem("jwt");
      this.$router.push({name: "Home"});
      location.reload()
    }
  }
}
</script>

<style scoped>
.profImage {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
  width: 27px;
  height: 27px;
  /*border: 1px solid white;*/
  border-radius: 50%;
  aspect-ratio: auto 30 / 30
}

.navbar-brand {
  font-size: x-large;
  color: #c40101;
}

.nav-font-size {
  font-size: medium;
}

.navbar {
  color: white;
}

a {
  color: black;
  text-decoration: none;
  opacity: .5;
}

div a.router-link-exact-active {
  opacity: 1;
}

a:hover {
  color: black;
}


.no-right-margin {
  margin-right: 0 !important;
}

.dropdown-toggle:enabled {
  color: black;
}

.dropdown-toggle:hover {
  color: black !important;
}

.margin-right {
  margin-right: 10px;
}
</style>