<template>
  <div id="HomePage">
    <HomeBanner/>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-9">
          <ArticleNavbar :navName="navName" @changeNav="changeNav"/>
          <div class="spinner-border mt-5" style="width: 3rem; height: 3rem;" role="status" v-if="loading === true">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else>
            <div v-for="(article,index) in articlesArray" :key="index">
              <ArticlePreview :article="article"/>
            </div>
          </div>
          <nav class="mt-4 d-flex justify-content-center" v-if="numberOfPagination !== 0">
            <ul class="pagination pagination-sm">
              <li class="page-item" v-for="pageNumber in numberOfPagination"
                  :class="{'active':activePage === pageNumber}"
                  @click="getArticleByOffset(pageNumber)"
                  :key="pageNumber">
                <span class="page-link">{{ pageNumber }}</span>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <PopularTags :popularTags="popularTags" :loading="loading" @filterByTag="getArticleByTag"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner";
import PopularTags from "@/components/PopularTags";
import ArticlePreview from "@/components/ArticlePreview";
import ArticleNavbar from "@/components/ArticleNavbar";
import {GlobalMixin} from "@/mixins/GlobalMixin";
import {HomePage} from "@/mixins/HomePage";

export default {
  name: "HomePage",
  mixins: [HomePage, GlobalMixin],
  components: {ArticleNavbar, ArticlePreview, PopularTags, HomeBanner},
}
</script>

<style scoped>

</style>