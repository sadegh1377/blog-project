<template>
  <div id="ArticleNavbar">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <div class="nav-link" :class="{'active':navName ==='Global Feed'}" aria-current="page" @click="changeNav">Global
          Feed
        </div>
      </li>
      <li class="nav-item" v-if="navName !=='Global Feed'">
        <div class="nav-link" :class="{'active':navName !=='Global Feed'}" aria-current="page">{{ navName }}</div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleNavbar",
  props: {
    navName: {
      type: String,
      require: true
    }
  },
  methods: {
    changeNav() {
      this.$emit('changeNav')
    }
  }
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>