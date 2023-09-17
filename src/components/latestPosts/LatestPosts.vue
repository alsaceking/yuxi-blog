<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const postsList = ref([
  {
    id: 1,
    alias: 'one',
    title: '逍遥游',
    releaseDate: '2023-06-15',
    category: '庄子',
    content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪。'
  },
  {
    id: 2,
    alias: 'two',
    title: '逍遥游',
    releaseDate: '2023-06-15',
    category: '庄子',
    content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪。'
  }
])

const goDetails = (post) => {
  router.push({
    path: `/post/${post.alias}`
    // query: post
  })
}
</script>

<template>
  <section class="content">
    <article
      v-for="post in postsList"
      class="article"
      :key="post.title"
      @click="goDetails(post)"
    >
      <h2 class="post-head">{{post.title}}</h2>
      <p class="post-content">{{post.content}}</p>
      <div class="post-date">{{post.releaseDate}}</div>
    </article>
  </section>
</template>

<style scoped lang="less">
.content {
  height: calc(80vh - 75px);
  padding: 0 20px;
  .article {
    margin-top: 35px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--color-text);
    cursor: pointer;
    .post-head {
      color: #333;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
    }
    .post-content {
      margin: 10px 0;
      text-indent: var(--fontsize-large);
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .post-date {
      color: var(--color-text-d);
    }
  }
}
</style>
