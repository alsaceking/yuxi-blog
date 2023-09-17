<script setup>
import { onMounted, ref } from 'vue'
import { getMonthAlias, getDateState } from '@/utils/date.js'

const navList = ref([
  {
    alias: '贰零贰叁年',
    date: '2023',
    dataList: []
  }
])
const currentNavIndex = ref(0)

const switchNav = (index, date) => {
  currentNavIndex.value = index
  const list = navList.value

  if (!list[index].dataList.length) {
    import(`./diary${date}.json`).then((file) => {
      list[index].dataList = file.monthList
    })
  }
}

onMounted(() => {
  const date = new Date()
  const year = date.getFullYear()

  switchNav(0, year)
})
</script>

<template>
  <div class="diary-wrap">
    <!-- nav -->
    <nav class="year-nav">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="switchNav(index, item.date)"
        >
          <span :class="{ 'year-nav_active': index === currentNavIndex }">{{
            item.alias
          }}</span>
        </li>
      </ul>
    </nav>
    <!-- moment list -->
    <section
      v-for="item in navList[currentNavIndex].dataList"
      :key="item.month"
      class="moment-wrap"
    >
      <h1 class="month-alias">{{ getMonthAlias(item.month) }}</h1>
      <div
        v-for="moment in item.diaryList"
        :key="moment.publishTime"
        class="moment-item"
      >
        <div class="avatar">
          <img src="/jacob-blog/kai.jpg" alt="" />
        </div>
        <div class="content-wrap">
          <div class="name">
            <span>{{ moment.name }}</span>
            <time>{{ getDateState(moment.publishTime) }}</time>
          </div>
          <p class="content-text">{{ moment.content }}</p>
          <span class="content-tag">{{ moment.supplement }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
.diary-wrap {
  width: 100%;
  .year-nav {
    padding: 25px 40px;
    border-bottom: 1px solid #ebf2ed;
    li {
      display: inline-block;
      margin-bottom: 10px;
      a,
      span {
        padding: 5px 10px;
        background-color: #eeeeee;
        color: #707070;
        margin: 0 4px;
        border-radius: 5px;
        font-size: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.year-nav_active {
          background: #dcdcdc;
          color: #898989;
        }
      }
    }
  }
  .moment-wrap {
    padding: 0 40px 40px 40px;
    .month-alias {
      text-align: center;
      font-family: '楷体';
      font-weight: bold;
      font-size: 36px;
    }
    .moment-item {
      padding: 20px 0;
      border-bottom: 1px solid #ebf2ed;
      display: flex;
      .avatar {
        width: 60px;
        height: 60px;
        font-size: 0;
        border-radius: 50%;
        border: 2px solid #ebe832;
        overflow: hidden;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .content-wrap {
        flex: 1;
        padding-left: 15px;
        .name {
          display: flex;
          flex-direction: column;
          color: #576b95;
          time {
            // font-family: Georgia, sans-serif;
            font-size: 12px;
            color: #999;
            letter-spacing: 1px;
          }
        }
        .content-tag {
          color: #576b95;
        }
      }
    }
  }
}
@media (max-width: 680px) {
  .diary-wrap {
    .year-nav {
      padding: 15px 15px 0 15px;
    }
    .moment-wrap {
      padding: 0 20px 20px 20px;
      .month-alias {
        font-size: 24px;
      }
      .moment-item {
        padding: 15px 0;
        .avatar {
          width: 45px;
          height: 45px;
          img {
            width: 45px;
            height: 45px;
          }
        }
      }
    }
  }
}
</style>
