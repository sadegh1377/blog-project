<template>
  <div id="ArticlePreview" class="mt-3">
    <router-link :to="{name:'ArticlePage', params:{slug:article.slug}}" class="card border-0 text-black"
                 @click.native="scrollToTop">
      <div class="card-header d-flex justify-content-between p-0 m-0 border-0">
        <div>
          <img src="../assets/profilePicture.png" class="profImage"
               v-if="article.author.image == null || article.author.image === undefined" alt="p">
          <img :src="article.author.image" class="profImage" alt="p">
          <div class="d-inline-block text-left info">
            <div class="username">{{ article.author.username }}</div>
            <div class="date">{{ article.createdAt }}</div>
          </div>
        </div>
        <button type="button" class="like-btn favorited" @click.prevent="removeFromFavorite(article)"
                v-if="article.favorited">
          <font-awesome-icon icon="heart-circle-plus" class="like-btn-icon"/>
          {{ article.favoritesCount }}
        </button>
        <button type="button" class="like-btn" @click.prevent="addToFavorite(article)" v-else>
          <font-awesome-icon icon="heart-circle-plus" class="like-btn-icon"/>
          {{ article.favoritesCount }}
        </button>
      </div>
      <h1 class="card-body text-left p-0 m-0 fw-bolder article-body">
        {{ article.title }}
      </h1>
      <p class="card-body text-left opacity-50 p-0">
        {{ article.description }}
      </p>
      <div class="card-footer border-0 d-flex justify-content-between p-0 m-0 border-0">
        <span class="readMore opacity-50">Read more</span>
        <div>
          <span v-for="(tag,index) in article.tagList" :key="index" class="tags">{{ tag }}</span>
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import {ArticlePreview} from "@/mixins/ArticlePreview";

export default {
  name: "ArticlePreview",
  mixins: [ArticlePreview],
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
.profImage {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 25px;
  width: 30px;
  height: 30px;
  /*border: 1px solid white;*/
  border-radius: 50%;
  aspect-ratio: auto 30 / 30
}

.card-header {
  background-color: white !important;
}

.info {
  line-height: 1rem;

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
  color: #469548;
  background-color: white !important;
  border: 1px solid #469548;
  border-radius: 5px;
  height: 30px;
}

.favorited {
  color: white;
  background-color: #469548 !important;
  border: 1px solid #469548;
}

.like-btn:hover {
  color: white;
  background-color: #5CB85C !important;

}

.like-btn-icon {
  margin-right: 3px;
  font-size: 15px;
}

.article-body {
  font-size: 20px;
  font-family: sans-serif;
}

.card-footer {
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.readMore {
  font-size: 11px;
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