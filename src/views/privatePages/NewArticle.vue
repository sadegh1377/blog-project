<template>
  <div id="NewArticle" class="container mt-5">
    <form @submit.prevent="save()" class="myform shadow" enctype="multipart/form-data">

      <div class="form-group col-md-12 text-left">
        <label>Article Title</label>
        <input type="text" class="form-control" placeholder="VueJs is awesome"
               v-model="title">
      </div>
      <div class="form-group col-md-12 text-left">
        <label>What's this article about?</label>
        <input type="text" class="form-control" placeholder="Awesomeness of VueJs"
               v-model="description">
      </div>


      <div class="form-group text-left">
        <label>Your article body</label>
        <textarea class="form-control" rows="8"
                  v-model="body"></textarea>
      </div>
      <div class="form-group col-md-12 text-left">
        <label>Tags</label>
        <input type="text" class="form-control" placeholder="VueJs"
               @keydown.enter.prevent="addToTagsList(tag)"
               v-model="tag">
        <span class="tags mt-2" v-for="(tag ,index) in tagsList" :key="index">
          <font-awesome-icon icon="xmark" class="xmark" @click="removeFromTagList(index)"/>
          {{ tag }}
        </span>
      </div>
      <div class="col-md-12 text-center mt-2 mb-3">
        <button type="submit" class=" btn btn-block mybtn btn-primary">Publish Article
        </button>
      </div>
      <div class="col-md-12 text-center mb-3" v-if="feedback">
        <p class="btn btn-block nonePointer  alert-danger">{{ feedback }}</p>
      </div>
      <div class="col-md-12 text-center mb-3" v-if="success">
        <p class="btn btn-block  nonePointer  alert-success">{{ success }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import {NewArticle} from "@/mixins/NewArticle";

export default {
  name: "NewArticle",
  mixins: [NewArticle]
}
</script>

<style scoped>
@import "../../assets/styles/authenticationStyles.css";

.hover {
  position: relative;
  display: inline-block;
  width: 130px;
}

.tooltipText {
  visibility: hidden;
  width: 300px;
  background-color: #929292;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px;
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 110%;
  opacity: 0;
  transition: opacity 1s;
}

.hover:hover .tooltipText {
  visibility: visible;
  opacity: 1;
}

.form {
  display: block;
  height: 100px;
  width: 100%;
  background: #95f197;
  text-align: center;
  line-height: 100px;
  border-radius: 4px;
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
}

.myform {
  max-width: 700px;
}

.xmark {
  margin-right: 5px;
  cursor: pointer;
}
</style>