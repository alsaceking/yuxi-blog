<script setup>
import { ref } from 'vue'

const isDisable = ref(false)
const isExport = ref(false)
const formData = ref({
  name: '雨析',
  supplement: '',
  content: '',
  publishTime: ''
})

const resetForm = () => {
  formData.value = {
    name: '雨析',
    supplement: '',
    content: '',
    publishTime: ''
  }
}

const handleSave = () => {
  if (!formData.value.content || isDisable.value) return

  isDisable.value = true
  const nowTime = new Date().getTime()
  const currentMonth = new Date().getMonth() + 1
  formData.value.publishTime = nowTime

  let monthList = JSON.parse(localStorage.getItem('__MONTHLIST__')) || []
  if (monthList?.[0]?.month === currentMonth) {
    monthList[0].diaryList.push(formData.value)
  } else {
    monthList.unshift({
      month: currentMonth,
      diaryList: [formData.value]
    })
  }

  localStorage.setItem('__MONTHLIST__', JSON.stringify(monthList))
  resetForm()
}

const handleExport = () => {
  if (isExport.value) return
  isExport.value = true
  exportJson()
}

const exportJson = () => {
  const monthList = JSON.parse(localStorage.getItem('__MONTHLIST__')) || []
  const jsonData = {
    year: new Date().getFullYear().toString(),
    monthList: monthList
  }
  const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'monthList.json'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    localStorage.removeItem('__MONTHLIST__')
  }, 100)
}
</script>

<template>
  <div class="wrapper">
    <div class="top-pannel">
      <h2>发点牢骚：</h2>
      <div class="export-button" @click="handleExport">
        {{ isExport ? '妘枝' : '导出' }}
      </div>
    </div>
    <input v-model="formData.supplement" type="text" />
    <textarea v-model="formData.content" rows="8"></textarea>
    <!-- button -->
    <div class="submit-button" @click="handleSave">{{ isDisable ? '妘枝' : '保 存' }}</div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  height: 100vh;
  font-size: 18px;
  .top-pannel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h2 {
      font-weight: bold;
    }
    .export-button {
      padding: 0 10px;
      color: #fff;
      background: #fcb47e;
      border: 1px solid #929aab;
      border-radius: 5px;
    }
  }
  input {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border: 2px solid #929aab;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  textarea {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    resize: none;
    border: 2px solid #929aab;
    border-radius: 5px;
  }
  .submit-button {
    margin-top: 15px;
    padding: 10px 20px;
    border: 2px solid #929aab;
    border-radius: 30px;
    text-align: center;
    background: #fcb47e;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
