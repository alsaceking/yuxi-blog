<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import CatIcon from '@/assets/icon/CatIcon.vue'

const light =
    'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  dark =
    'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
const svgPath = ref(light)
const themeParam = ref(1)

const toggleTheme = () => {
  switch (themeParam.value) {
    case 1:
      themeParam.value = 2
      svgPath.value = dark
      document.documentElement.className = 'dark'
      break
    case 2:
      themeParam.value = 1
      svgPath.value = light
      document.documentElement.className = ''
      break
  }
}

const router = useRouter()

watch(
  () => router.currentRoute.value.fullPath,
  (val, oldVal) => {
    console.log('val: ', val)
    console.log('oldVal: ', oldVal)
  }
)
</script>

<template>
  <header>
    <nav>
      <!-- <a href="/" class="logo">
        <CatIcon />
      </a> -->
      <RouterLink to="/" class="logo">
        <CatIcon />
      </RouterLink>
      <div class="nav">
        <!-- <a href="/yuxi-blog/posts-list" class="nav__item">Posts</a>
        <a href="/yuxi-blog/find" class="nav__item">Find</a>
        <a href="/yuxi-blog/about" class="nav__item">Me</a> -->
        <RouterLink to="/posts-list" class="nav__item">Posts</RouterLink>
        <RouterLink to="/find" class="nav__item">Find</RouterLink>
        <RouterLink to="/about" class="nav__item">Me</RouterLink>
        <div class="toggle-theme" @click="toggleTheme">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="svgPath"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  backdrop-filter: saturate(100%) blur(8px);
  display: flex;
  justify-content: center;
  // border-bottom: 1px solid #ccc;
}
nav {
  width: 100%;
  max-width: 850px;
  padding: 10px 20px;
  display: flex;
  // justify-content: center;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  .logo {
    cursor: pointer;
  }
  .nav {
    display: flex;
    align-self: center;
    // flex: 1;
    .nav__item {
      display: inline-block;
      position: relative;
      margin-left: 30px;
      transition: all 0.25s;
      font-weight: 600;
      font-size: var(--fontsize-large);
      transition: all 0.25s;
      color: var(--color-text);
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: bottom 0.25s;
      }
      &:hover {
        transform: translateY(-5px);
        text-shadow: 3px 2px 3px #b3b3b3;
        &::before {
          bottom: -10px;
        }
      }
    }
    .toggle-theme {
      width: 24px;
      height: 24px;
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
