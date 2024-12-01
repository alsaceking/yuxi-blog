<script setup>
import CatFace from '@/components/catFace/CatFace.vue'
</script>

<template>
  <div class="home">
    <div class="router-wrap">
      <RouterLink to="/about" class="card">
        <h2 class="title">👀 一个混子</h2>
        <div class="desc">不求甚解</div>
      </RouterLink>
      <RouterLink to="/find" class="card">
        <h2 class="title">😪 一点牢骚</h2>
        <div class="desc">13213213</div>
      </RouterLink>
      <RouterLink to="/posts-list" class="card">
        <h2 class="title">📙 一些零碎</h2>
        <div class="desc">吾生也有涯，而知也无涯</div>
      </RouterLink>
    </div>
    <CatFace></CatFace>
  </div>
</template>

<style scoped lang="less">
.home {
  position: relative;
  min-height: 100vh;
  .router-wrap {
    padding: 20px 0px;
    width: 100%;
    box-sizing: border-box;
  }
}
.card {
  display: block;
  width: 200px;
  padding: 10px 15px;
  border-radius: 10px;
  background: var(--color-background);
  box-shadow: 5px 5px 15px #b3b3b3, -5px -5px 15px #ffffff;
  margin-bottom: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
    color: #394e6a;
  }
  .desc {
    color: #bebebe;
    font-size: 14px;
  }
}
@media (max-width: 680px) {
  .home {
    .router-wrap {
      padding: 20px 25px;
      .card {
        width: auto;
      }
    }
  }
}
</style>
