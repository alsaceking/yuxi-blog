<script setup>
import { useRouter } from 'vue-router'
import HeaderComp from '@/components/header/HeaderComp.vue'
import { postsList } from '@/posts/postsObj.js'

console.log(postsList)
const router = useRouter()

const goDetails = (post) => {
  router.push({
    path: `/post/${post.category}/${post.alias}`
  })
}
</script>

<template>
  <HeaderComp></HeaderComp>
  <div class="posts-list">
    <h1 class="tips">Posts</h1>
    <article v-for="post in postsList" class="article" :key="post.alias" @click="goDetails(post)">
      <a class="post-head">{{ post.title }}</a>
      <time class="post-date">{{ post.releaseDate }}</time>
    </article>
  </div>
</template>

<style lang="less" scoped>
.posts-list {
  position: relative;
  padding: 120px 20px 20px 20px;
  .tips {
    font-size: 28px;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 15px;
  }
  .article {
    padding: 5px 0 10px 0;
    // border-bottom: 1px dashed #d1cdcd;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .post-head {
      flex: 1;
      color: var(--color-text);
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        opacity: 0.8;
      }
    }
    .post-date {
      width: 100px;
      text-align: right;
      color: var(--color-text-d);
      font-family: Georgia, sans-serif;
    }
  }
}
@media (max-width: 680px) {
  .posts-list {
    padding-top: 80px;
  }
}
</style>
