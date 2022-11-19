<template>
  <div id="HomeBanner" class="w-100 bg-Banner">
    <div class="py-3">
      <h1 class="logo">Brand</h1>
      <p class="description">A place to share your knowledge</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner"
}
</script>

<style scoped>
.bg-Banner {
  background-color: #5CB85C;
}

.logo {
  color: white;
  font-size: 80px;
}

.description {
  color: white;
  font-size: 20px;
}
</style>