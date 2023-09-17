<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <div class="container">
      <RouterView />
      <!-- <router-view v-slot="{ Component }">
        <transition appear name="slide">
          <component :is="Component" />
        </transition>
      </router-view> -->
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  /* transform: translate3d(100%, 0, 0); */
  opacity: 0;
}
.app {
  width: 100%;
  background-color: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
}
.container {
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
}
</style>
