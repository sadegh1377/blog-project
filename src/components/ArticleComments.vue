<template>
  <div id="ArticleComments" class="mb-5 ">
    <div class="container col-sm-12 col-md-8 col-lg-6 mainBackground border rounded p-3">
      <div class="mt-2">
                <textarea type="text" class="w-100 text-left "
                          rows="3"
                          v-model="body"
                          @keyup.ctrl.enter="addComment"
                          placeholder="Write a comment...(ctrl+enter to submit)">
                </textarea>
        <p class="text-danger" v-if="feedback">{{ feedback }}</p>
      </div>
      <div class="row p-1 m-0 border listBackground mt-2 rounded text-left"
           v-for="(comment,index) in comments" :key="index">
        <div class="col-12 text-right">
          <div class="font-weight-bold mb-3">
            <img :src="profImage" class="profImage" alt="p">
            <span class="userName">{{ comment.author.username }}</span>
          </div>
          <div class="border p-2 rounded bg-white">
            <p class="mr-3 text-break d-inline p-2">{{ comment.body }}</p>
            <div class="text-left font-italic text-secondary">{{ comment.createdAt }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {GlobalMixin} from "@/mixins/GlobalMixin";
import {ArticlePage} from "@/mixins/ArticlePage";

export default {
  name: "ArticleComments",
  mixins: [ArticlePage, GlobalMixin],
  props: {},
  data() {
    return {}
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  methods: {},
  created() {
  },
}
</script>

<style scoped>
.mainBackground {
  background-color: #f9f9f9;
}

.listBackground {
  background-color: #f1f1f1;
}

.userName {
  color: #5CB85C;
}

input {
  /*text-align: center;*/
  opacity: 0.8;
  padding: 5px;
  border: 1px solid #333333;
  border-radius: 10px;
  outline: none;
  width: 210px;
  /*font-weight: 400;*/
}

.profImage {
  display: inline-block;
  margin-right: 5px;
  /*margin-bottom: 25px;*/
  width: 30px;
  height: 30px;
  /*border: 1px solid white;*/
  border-radius: 50%;
  aspect-ratio: auto 30 / 30
}
</style>