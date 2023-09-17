<script setup>
import { shallowRef, ref } from 'vue'
import { useRoute} from 'vue-router'
import HeaderComp from '@/components/header/HeaderComp.vue'

const route = useRoute()
const ariticle = shallowRef(null)
const title = ref(''), date = ref(''), author = ref('')
import(`@/posts/${route.params.tag}/${route.params.alias}.md`).then(post => {
  ariticle.value = post.default
  title.value = post.title || 'title'
  author.value = post.author || '雨析'
  date.value = post.date || '很久以前'
}).catch(() => {
  // router.replace('/404')
})

</script>

<template>
  <HeaderComp></HeaderComp>
  <div class="post-details">
    <h1 class="title">{{ title }}</h1>
    <p class="tips">由 <span>{{author}}</span> 于 <span>{{date}}</span> 所写</p>
    <component :is="ariticle" v-highlight />
  </div>
</template>

<style lang="less" scoped>
.post-details {
  position: relative;
  padding-top: 120px;
  .title {
    font-weight: 700;
    font-size: var(--fontsize-large-x);
    text-align: center;
  }
  .tips {
    font-family: '楷体';
    text-align: center;
    color: var(--color-text-d);
    font-style: italic;
    span {
      font-family: Georgia, sans-serif;
      font-style: normal;
    }
  }
}
.markdown-body {
  transition: color 0.5s, background-color 0.5s;
  background-color: var(--color-background);
  color: var(--color-text);
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 35px;
  line-height: 30px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
