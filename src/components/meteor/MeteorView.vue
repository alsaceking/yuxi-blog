<template>
  <div class="home">
    <!-- star list -->
    <div class="star-list">
      <div
        v-for="(item, index) in starArry"
        class="star"
        :style="{ left: `${item.x}px`, top: `${item.y}px`, animationDuration: `${item.duration}s` }"
        :key="index"
      >
        .
      </div>
    </div>
    <!-- :style="{transform: `translate(${item.x}px, ${item.y}px)`}" -->
    <!-- meteor -->
    <div class="meteor-list">
      <div
        v-for="(meteor, index) in meteorArry"
        class="meteor"
        :class="{ bg: index === 1 }"
        :key="index"
        :style="{
          left: `${meteor.x}%`,
          top: `${meteor.y}%`,
          animationDuration: `${meteor.duration}s`,
          animationDelay: `${meteor.delay}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    onMounted(() => {
      initStar()
      initMeteor()
    })

    // get random count (0 <= count <=num)
    const getRandomCount = (num) => {
      return Math.floor(Math.random() * (num + 1))
    }
    // draw star
    const STAR_COUNT = 150
    const starArry = ref([])

    const initStar = () => {
      for (let i = 0; i < STAR_COUNT; i++) {
        const star = {
          x: getRandomCount(window.innerWidth),
          y: getRandomCount(window.innerHeight),
          duration: (getRandomCount(50) + 50) / 50
        }
        starArry.value.push(star)
        // console.log(star.duration)
      }
    }

    // draw meteor
    const METEOR_COUNT = 15
    const meteorArry = ref([])

    const initMeteor = () => {
      meteorArry.value = []
      for (let i = 0; i < METEOR_COUNT; i++) {
        const meteor = {
          x: 60 + getRandomCount(40),
          y: getRandomCount(10),
          duration: (getRandomCount(10) + 15) / 10,
          delay: getRandomCount(20) / 10
        }
        meteorArry.value.push(meteor)
      }
    }

    return {
      starArry,
      meteorArry
    }
  }
}
</script>

<style scoped lang="less">
.meteor-list {
  // position: relative;
  // width: 100%;
  // height: 100%;
  .meteor {
    position: absolute;
    // top: 10%;
    // left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 0 5px 7px #636262;
    transform: rotate(-45deg);
    background-color: #fff;
    opacity: 0;
    animation: scratch 2s linear infinite;
    // cubic-bezier(0.36,0.26,0.83,0.53)
    &.bg {
      background-color: yellow;
    }
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      display: block;
      border: 0px solid #fff;
      border-width: 3px 150px;
      border-radius: 15px;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
    }
  }
}
@keyframes scratch {
  // 0% {
  //   transform: translate(80vw, -100%);
  // }
  // 100% {
  //   transform: translate(-100%, 80vh);
  // }
  0% {
    opacity: 0.5;
    transform: scale(0.5) translate3d(0, 0, 0) rotate(-45deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) translate3d(-50vw, 50vw, 0) rotate(-45deg);
  }
  100% {
    opacity: 0.2;
    transform: scale(1) translate3d(-100vw, 100vw, 0) rotate(-45deg);
  }
}
.star {
  color: #fff;
  position: absolute;
  // font-size: 24px;
  animation: twinkle 3s infinite;
}
@keyframes twinkle {
  0% {
    color: #fff;
  }
  50% {
    color: #333;
  }
  100% {
    color: #fff;
  }
}
.home {
  position: relative;
  background-image: linear-gradient(to top, #434343 0%, black 100%);
  height: 100vh;
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
