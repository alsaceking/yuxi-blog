<script setup>
import CatFace from '@/components/catFace/CatFace.vue'
</script>

<template>
  <div class="home">
    <h1 class="pc">雨 析</h1>
    <h1 class="mobile">雨 析</h1>
    <p>
      ✨
      从前那些人的一举一动，一言一行都如此纯真，女孩子的脸红就胜过一大段对白。可后来有了胭脂，便分不清是真情还是假意。
    </p>
    <a href="/jacob-blog/posts-list" class="forword-btn">Go Ahead</a>
    <CatFace></CatFace>
  </div>
</template>

<style scoped lang="less">
.home {
  position: relative;
  min-height: 100vh;
  h1 {
    padding: 100px 0 35px;
    font-size: 42px;
    font-weight: bold;
    width: 80%;
    min-width: 320px;
    margin: 0 auto;
    text-align: center;
    text-shadow: -1px -1px 1px #5e5e5e, 2px 2px 1px #b3b3b3;
  }
  .mobile {
    display: none;
  }
  .pc {
    display: block;
  }
  p {
    font-style: italic;
    font-size: 16px;
    color: var(--color-text-d);
    width: 80%;
    margin: 0 auto;
    min-width: 320px;
  }
  .forword-btn {
    font-size: var(--fontsize-large-x);
    border-radius: 5px;
    color: #191919;
    // color: #394E6A;
    font-family: 'lufga';
    letter-spacing: 1px;
    text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #b3b3b3, 0 2px 0 #b3b3b3,
      0 3px 0 #5e5e5e, 0 4px 0 #5e5e5e;
    // text-shadow: -1px -1px 1px #394E6A, 2px 2px 1px #363636;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border-radius: 45% 55% 57% 43% / 48% 48% 52% 52%;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5) inset,
      10px 10px 20px rgba(0, 0, 0, 0.3), 15px 15px 30px rgba(0, 0, 0, 0.05),
      -10px -10px 15px rgba(255, 255, 255, 0.8) inset;
    animation: action 3s linear infinite;
    cursor: pointer;
  }
  @keyframes action {
    25% {
      border-radius: 68% 32% 58% 42% / 15% 88% 12% 85%;
    }
    50% {
      border-radius: 77% 23% 46% 54% / 33% 63% 37% 67%;
    }
    70% {
      border-radius: 49% 51% 63% 37% / 41% 73% 27% 59%;
    }
    100% {
      border-radius: 45% 55% 59% 41% / 48% 87% 13% 52%;
    }
  }
}
@media (max-width: 680px) {
  .home {
    h1 {
      padding-top: 35px;
      font-size: 32px;
      font-weight: bold;
      width: 100%;
    }
    .mobile {
      display: block;
    }
    .pc {
      display: none;
    }
  }
}
</style>
