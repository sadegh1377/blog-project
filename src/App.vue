<template>
  <div id="app">
    <GlobalNavbar/>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import GlobalNavbar from "@/views/GlobalNavbar";

export default {
  components: {GlobalNavbar}
}
</script>

<style>
@font-face {
  font-family: "sourceSansProRegular";
  src: local("sourceSansProRegular"),
  url(assets/fonts/SourceSansPro-Regular.ttf) format("truetype");
}

#app {
  font-family: 'sourceSansProRegular', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active {
  transition: opacity 0.2s ease-in;
}

.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>