const numToChinese = {
  '0': '零',
  '1': '壹',
  '2': '贰',
  '3': '叁',
  '4': '肆',
  '5': '伍',
  '6': '陆',
  '7': '柒',
  '8': '捌',
  '9': '玖',
  '10': '拾'
}
const convertString = (str) => {
  return str.replace(/\d+/g, (match) => {
      let result = ''
      if (match.length === 2 && match[0] === '1') {
          const match1 = match[1] === '0' ? '' : numToChinese[match[1]]
          result += numToChinese['10'] + match1
      } else if (match.length === 2) {
          const match1 = match[1] === '0' ? '' : numToChinese[match[1]]
          result += numToChinese[match[0]] + numToChinese['10'] + match1
      } else {
          result += numToChinese[match]
      }
      return result
  })
}
const chineseHours = [
  '子时-夜半',
  '丑时-鸡鸣',
  '寅时-平旦',
  '卯时-日出',
  '辰时-朝食',
  '巳时-隅中',
  '午时-日中',
  '未时-日昳',
  '申时-哺时',
  '酉时-日入',
  '戌时-黄昏',
  '亥时-人定'
]
const formatTime = (time) => {
  const date = time ? new Date(time) : new Date()

  const month = date.getMonth() + 1
  const today = date.getDate()
  const hours = date.getHours() === 23 ? 0 : Math.ceil(date.getHours() / 2)
  
  const classicalHours = chineseHours[hours] 
  
  return convertString(`${month}月${today}日 `) + classicalHours
}

const hoursAlias = [
  '即夕',
  '破晓',
  '质明',
  '亭午',
  '薄暮',
  '夜阑',
]

export const getDateState = (time) => {
  const nowTime = new Date()
  const diff = time ? Math.round((nowTime - time) / 1000) : 0
  const hours = new Date(time).getHours()
  const formatHours = Math.floor(hours / 4)

  const oneDay = 3600 * 12
  const oneWeek = 3600 * 24 * 7
  const oneMonth = 3600 * 24 * 30
  const twoMonth = 3600 * 24 * 60

  let resultStatus = ''

  if (diff < oneDay) {
    resultStatus = '是日-' + hoursAlias[formatHours]
  } else if (oneDay < diff && diff < oneWeek) {
    // const num = Math.floor(diff / oneDay)
    // resultStatus = `${num}天前`
    resultStatus = `迩日-`  + hoursAlias[formatHours]
  } else if (oneWeek < diff && diff < oneMonth) {
    // const num = Math.floor(diff / oneWeek)
    // resultStatus = `${num}周前`
    resultStatus = '旬余-'  + hoursAlias[formatHours]
  } else if (oneMonth < diff && diff < twoMonth) {
    // const num = Math.floor(diff / oneMonth)
    // resultStatus = `${num}月前`
    resultStatus = '月余-'  + hoursAlias[formatHours]
  } else {
    resultStatus = formatTime(time)
  }

  return resultStatus
}

export const getMonthAlias = (month) => {
  let alias = ''
  switch (month) {
    case 1:
      alias = '孟春-柳月-岁始'
      break
    case 2:
      alias = '殷春-如月-花朝'
      break
    case 3:
      alias = '暮春-桐月-姑洗'
      break
    case 4:
      alias = '初夏-槐月-麦候'
      break
    case 5:
      alias = '仲夏-蒲月-芒种'
      break
    case 6:
      alias = '幕夏-荷月-林鈡'
      break
    case 7:
      alias = '桐秋-兰月-夷则'
      break
    case 8:
      alias = '清秋-桂月-南吕'
      break
    case 9:
      alias = '凉秋-戍月-杪商'
      break
    case 10:
      alias = '早冬-露月-应鈡'
      break
    case 11:
      alias = '正冬-寒月-黄鈡'
      break
    case 12:
      alias = '季冬-腊月-岁杪'
      break
  }

  return alias
}