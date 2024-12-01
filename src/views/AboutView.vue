<script setup>
import { onMounted, ref } from 'vue'
import { getMonthAlias } from '@/utils/date.js'
import HeartLoading from '@/components/loading/heartLoading.vue'

const aboutDesc = [
  '用回忆勾勒时光的轮廓，将人生细细切分成一格格月光。',
  '每一页都是一段故事，每一格都镌刻着欢笑与泪水。',
  '时而轻叹人生无常，时而感慨岁月匆匆，却也在字里行间留下了最真实的自己。',
  '希望浏览回忆录的你，不仅能透过文字认识一个平凡的我，更能在字里行间感受到生活中的浪漫与趣味，捕捉到那些微小却美好的瞬间。在时光的长河里，寻找属于彼此的共鸣'
]
const rememberObj = {
  '1992-3': '👶你好20世纪末🎈🎁',
  '1995-6': '🐵成天在地上打滚玩泥巴。。。(居然还有印象！哈哈哈)',
  '1996-7':
    '🐸在田里抓癞蛤蟆然后解剖着玩(小时候真的啥都不怕😂，现在完全不敢碰)，👵被奶奶劈头大骂😭再也不敢了',
  '1997-12': '跟着阿姨去北京途中差点走丢（还好哥们机灵🎃）',
  '2000-9': '🎆在新世纪到来的时候带上了红领巾😀',
  '2010-11':
    '看了一部好像叫《80后》的电影，第一次开始思考人生（这时候看电影还不需要会员网页上还没有小广告😶）',
  '2011-2':
    '⛄第一次体验了一场酣畅淋漓的大雪🤸‍♂️，在某一瞬间发现雪落下的样子很美💕',
  '2011-9':
    '🏀学院篮球赛手感爆炸狂砍27分，最后时刻有绝杀机会可惜被断，连出手的机会都没（感觉只要出手就有了好恨啊🥊）',
  '2014-4': '🌝出发拉萨，对未知的旅途充满期待~',
  '2014-9': '🌊结束了快乐的旅程，一切回归平静，收获颇多',
  '2018-10': '🍯芒果Q果漾很甜🌈',
  '2019-10': '人生无常，飞来横祸👻',
  '2022-12': '惟江上之清风，与山间之明月🎀',
  '2024-3': '🙎‍♂️一个混子'
}
const hobbyList = [
  {
    title: '喜欢的书籍',
    content: '《爱的教育》《三国演义》《庄子》《史记》'
  },
  {
    title: '喜欢的运动',
    content: '篮球、羽毛球、滑板、爬山、户外运动等等大部分运动都喜欢~'
  },
  {
    title: '喜欢的歌手',
    content: '赵雷'
  },
  {
    title: '喜欢的游戏',
    content: 'Dota2、古剑奇谭3、种田'
  },
  {
    title: '喜欢的动漫',
    content: '《凡人修仙传》'
  },
  {
    title: '喜欢的人',
    content: '霍去病、辛弃疾'
  }
]
const recordList = ref([])
const initRecordList = () => {
  const born = 1992
  const nowDate = new Date()
  const nowYear = nowDate.getFullYear()
  const diffYear = nowYear - born + 1

  for (let i = 0; i < diffYear; i++) {
    for (let j = 0; j < 12; j++) {
      const key = `${born + i}-${j + 1}`
      // 永远19岁
      const age = i > 30 ? 19 : i
      const year = born + i
      const month = j + 1
      const obj = {
        age: i,
        details: `${age} 岁，在 ${year} 年 ${getMonthAlias(month)}`,
        content: rememberObj[key] || null
      }
      recordList.value.push(obj)
    }
  }
  recordList.value.splice(0, 2)
}
const thenList = ref([])
const initThenList = () => {
  const born = 1992
  for (let i = 92; i < 100; i++) {
    for (let j = 0; j < 12; j++) {
      const age = i
      const year = born + i
      const month = j + 1
      const obj = {
        age: i,
        details: `${age} 岁，在 ${year} 年 ${getMonthAlias(month)}`
      }
      thenList.value.push(obj)
    }
  }
}

onMounted(() => {
  initRecordList()
  initThenList()
})
</script>
<template>
  <div class="about">
    <div class="about-desc">
      <h1>时光笔记</h1>
      <p v-for="(item, index) in aboutDesc" :key="index">{{ item }}</p>
    </div>
    <!-- life record -->
    <div class="record-wrap">
      <div class="base-cell" v-for="(item, index) in recordList" :key="index">
        <div v-if="item.content">{{ item.content }}</div>
        <div v-else class="cell-placeholder"></div>
        <div class="date-details">
          <span>{{ item.age > 30 ? '永远' : '' }}{{ item.details }}</span>
        </div>
      </div>
      <div style="width: 200px; font-weight: bold">
        <HeartLoading />
      </div>
      <div
        v-for="(item, index) in thenList"
        :key="index"
        class="base-cell"
        style="background-color: #eee"
      >
        <div v-if="item.content">{{ item.content }}</div>
        <div v-else class="cell-placeholder"></div>
        <div class="date-details">
          <span>{{ item.details }}</span>
        </div>
      </div>
      <div class="base-cell" style="background-color: #eee">
        既然都走过了一生，还有什么在乎的呢？🖤
      </div>
    </div>
    <!-- hobby -->
    <div class="about-desc">
      <div v-for="(item, index) in hobbyList" :key="index">
        <h1 class="title">{{ item.title }}</h1>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.about {
  position: relative;
  padding: 0 20px;
}
.about-desc {
  padding: 20px 0;
  font-size: 14px;
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    letter-spacing: 1px;
    font-style: italic;
  }
  .title {
    font-weight: 400;
    margin: 15px 0 5px 0;
  }
}
.record-wrap {
  display: flex;
  flex-wrap: wrap;
  .base-cell {
    position: relative;
    opacity: 0.9;
    display: flex;
    align-items: center;
    min-height: 28px;
    padding: 2px 6px;
    margin: 0 5px 5px 0;
    font-size: 14px;
    border: 1px solid #eee;
    background-color: #fff;
    transition: 368ms;
    border-radius: 4px 8px 5px 15px/15px 4px 20% 5px;
    &:hover {
      .date-details {
        display: block;
      }
    }
    .date-details {
      position: absolute;
      bottom: 42px;
      left: 0;
      display: none;
      white-space: nowrap;
      filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.2));
      backdrop-filter: blur(4px);
      padding: 8px 12px;
      font-size: 14px;
      // background-color: antiquewhite;
      background-color: #eee;
      border-radius: 4px 8px 5px 15px/15px 4px 20% 5px;
    }
    .cell-placeholder {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #ccc;
    }
  }
}
</style>
