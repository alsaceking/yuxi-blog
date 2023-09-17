export const categoryList = ['technology', 'life']

export const postsList = [
  {
    category: 'technology',
    tag: '技能分享',
    alias: 'git-sharing',
    title: 'Git 非常酷的文件版本控制工具',
    releaseDate: '2018-05-06'
  },
  {
    category: 'life',
    tag: '生活',
    alias: 'two',
    title: '庄子 逍遥游 大椿树的年轮',
    releaseDate: '2023-06-15'
  }
]

const obj = {}

for (let i = 0; i < postsList.length; i++) {
  categoryList.forEach(item => {
    if (postsList[i].category === item) {
      obj[item] = obj[item] || []
      obj[item].push(postsList[i])
    }
  })
}

export const categoryObj = obj
