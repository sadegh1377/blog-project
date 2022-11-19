<template>
  <div id="ArticlePage">
    <div class="article-header">
      <div class="container">
        <h1 class="text-left py-4 article-header-font fw-bolder">
          {{ article.title }}
        </h1>
        <div class="card-header d-flex justify-content-start p-0 m-0 border-0">
          <div class="info-margin-right">
            <img :src="profImage" class="profImage" alt="p">
            <div class="d-inline-block text-left info">
              <div class="username">{{ username }}</div>
              <div class="date">{{ article.createdAt }}</div>
            </div>
          </div>
          <button type="button" class="follow-btn">
            <font-awesome-icon icon="plus" class="like-btn-icon"/>
            Follow {{ username }}
          </button>
          <button type="button" class="like-btn" @click="removeFromFavorite(article)" v-if="article.favorited">
            <font-awesome-icon icon="heart-circle-plus" class="like-btn-icon"/>
            Favorite Article ({{ article.favoritesCount }})
          </button>
          <button type="button" class="like-btn" @click="addToFavorite(article)" v-else>
            <font-awesome-icon icon="heart-circle-plus" class="like-btn-icon"/>
            Favorite Article ({{ article.favoritesCount }})
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <p class=" text-left mt-4 article-body">
        {{ article.body }}
      </p>
      <div class="text-left border-bottom">
        <span class="tags" v-for="(tag,index) in article.tagList" :key="index">{{ tag }}</span>
      </div>
      <ArticleComments/>
    </div>
  </div>
</template>

<script>
import ArticleComments from "@/components/ArticleComments";
import {ArticlePage} from "@/mixins/ArticlePage";
import {ArticlePreview} from "@/mixins/ArticlePreview";

export default {
  name: "ArticlePage",
  mixins: [ArticlePage, ArticlePreview],
  components: {ArticleComments}
}
</script>
<style scoped>
@import "../assets/styles/GlobalStyles.css";

.article-header {
  background-color: #333333;
  color: white;
}

.article-header-font {
  font-family: sans-serif;
}

.profImage {
  margin-bottom: 25px !important;
}

.info-margin-right {
  margin-right: 25px;
}

.follow-btn {
  height: 50%;
  color: #999999;
  background-color: transparent;
  border: 1px solid #999999;
  margin-right: 5px;
}


.username {
  font-size: 15px;
  color: #469548;
}

.date {
  font-size: 0.8rem;
  opacity: .7;
}

.like-btn {
  height: 50%;
  color: #5CB85C;
  background-color: transparent;
  border: 1px solid #5CB85C;
}

.article-body {
  font-size: 1.2rem;
}

.tags {
  display: inline-block;
  padding: 2px 7px 2px 7px;
  margin-right: 3px;
  margin-bottom: 5px;
  border-radius: 10rem;
  color: #999;
  border: 1px solid #999;
  font-size: 12px;
  font-weight: lighter;
  /*background-color: #818a91;*/
  text-decoration: none;
}
</style>