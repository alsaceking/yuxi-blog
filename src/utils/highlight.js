// 引入 highlight 核心和语言
// import hljs from 'highlight.js'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
// import shell from 'highlight.js/lib/languages/shell'

// 注册 highlight 语言
hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('shell', shell)

hljs.configure({
  ignoreUnescapedHTML: true
})

export default {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightElement(block)
    })
  }
}