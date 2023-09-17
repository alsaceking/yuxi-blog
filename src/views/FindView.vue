<script setup>
import { onMounted, ref, computed } from 'vue'
import WoodenfishIcon from '../assets/icon/WoodenfishIcon.vue'
import DiaryList from '@/diaries/DiaryList.vue'

const leftSolgan = ref([
    '無聊發呆',
    '虚度光隂',
    '無所事事',
    '漫不經心',
    '遊手好閒',
    '白日做夢',
    '碌碌無為',
    '吊兒郎當'
  ]),
  rightSolgan = ref([
    '得過且過',
    '渾渾噩噩',
    '與世無爭',
    '魂不守舍',
    '消極怠慢',
    '虛度年華',
    '無精打采',
    '好逸惡勞'
  ])
const topTips = '或许牛马不应',
  bottomTips = '有太多的臆想'
const solganLength = computed(() => {
  return leftSolgan.value.length
})
const clientWidth = innerWidth

const initSolgan = () => {
  // const isMobile = window.matchMedia('(max-width: 650px)').matches
  const solganMaxNums = Math.floor((clientWidth - 320) / 120)
  while (solganMaxNums > solganLength.value) {
    leftSolgan.value.unshift('    ')
    rightSolgan.value.push('    ')
  }
  while (solganMaxNums < solganLength.value) {
    leftSolgan.value.shift()
    rightSolgan.value.pop()
  }
}

onMounted(() => {
  initSolgan()
})
</script>

<template>
  <div class="find">
    <!-- solgan -->
    <div class="banner">
      <ul class="site-slogan">
        <li v-for="(str, index) in leftSolgan" :key="index" class="slogan-item">
          <span
            v-for="(code, j) in str"
            :key="j"
            class="matts"
            :class="{ 'matts-solid': code.replace(/\s+/g, '') }"
            >{{ code }}</span
          >
        </li>
      </ul>
      <div class="wooden-wrap">
        <WoodenfishIcon />
        <p class="tips" style="margin-top: 10px">
          <span v-for="(code, index) in topTips" :key="index">{{ code }}</span>
        </p>
        <p class="tips">
          <span v-for="(code, index) in bottomTips" :key="index">{{
            code
          }}</span>
        </p>
      </div>
      <ul class="site-slogan">
        <li
          v-for="(str, index) in rightSolgan"
          :key="index"
          class="slogan-item"
        >
          <span
            v-for="(code, j) in str"
            :key="j"
            class="matts"
            :class="{ 'matts-solid': code.replace(/\s+/g, '') }"
            >{{ code }}</span
          >
        </li>
      </ul>
    </div>
    <!-- diary list -->
    <DiaryList />
  </div>
</template>

<style scoped lang="less">
.find {
  position: relative;
  .banner {
    display: flex;
    justify-content: center;
    font-family: '楷体';
    position: relative;
    .wooden-wrap {
      padding: 25px 20px 10px 20px;
      border-bottom: 1px solid #ccc;
      .tips {
        display: flex;
        justify-content: space-between;
        span {
          width: 40px;
          height: 40px;
          color: #666;
          font-weight: bold;
          font-size: 24px;
          text-align: center;
        }
      }
    }
    .site-slogan {
      display: flex;
      border-left: 1px solid #ccc;
      .slogan-item {
        display: flex;
        flex-direction: column;
        .matts {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1;
          width: 59px;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: bold;
          color: #30303a;
          background-color: transparent;
          background-image: linear-gradient(
              90deg,
              #ccc,
              #ccc 50%,
              #fff 50%,
              #fff
            ),
            linear-gradient(0, #ccc, #ccc 50%, #fff 50%, #fff);
          background-repeat: repeat-x, repeat-y;
          background-size: 4px 1px, 1px 4px;
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          background-position: 0 50%, 50% 0;
          transition: background-color, color 0.6s ease;
          &::before,
          &::after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            height: 141.4%;
            transform-origin: 0 0;
          }
          &::before {
            left: 0;
            border-left: 1px dashed #ccc;
            transform: rotate(-45deg);
          }
          &::after {
            right: 0;
            border-right: 1px dashed #ccc;
            transform: rotate(45deg);
          }
        }
        .matts-solid {
          cursor: pointer;
          &:hover {
            background-color: #30303a;
            color: #fff;
          }
        }
      }
    }
  }
}
@media (max-width: 430px) {
  .find {
    .banner {
      .wooden-wrap {
        padding-top: 30px;
        border: none;
      }
      .site-slogan {
        display: none;
      }
    }
  }
}
</style>
