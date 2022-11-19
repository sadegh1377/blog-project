<template>
  <div id="PopularTags" class="">
    <div class="w-100 popular-Tags-container p-2">
      <h6 class="text-black">Popular Tags</h6>
      <div class="tags-container">
        <div class="text-center mt-2" v-if="loading === true">
          <div class="spinner-border mx-auto" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <span v-else>
        <span class="tags " v-for="(tag,index) in popularTags" :key="index"
              @click="filterByTag(tag)">{{ tag }}</span>
          </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PopularTags",
  props: {
    popularTags: {
      type: Array,
      require: true
    },
    loading: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    filterByTag(tag) {
      this.$emit('filterByTag', tag)
    }
  }
}
</script>

<style scoped>
.popular-Tags-container {
  background-color: #f3f3f3;
  text-align: left;
  border-radius: 4px;
}

.tags-container {
  width: 100%;
}

.tags {
  display: inline-block;
  padding: 2px 7px 2px 7px;
  margin-right: 3px;
  margin-bottom: 5px;
  border-radius: 10rem;
  color: white;
  font-size: 14px;
  font-weight: lighter;
  background-color: #818a91;
  text-decoration: none;
  cursor: pointer;
}

.tags:hover {
  background-color: #656a71;
}
</style>