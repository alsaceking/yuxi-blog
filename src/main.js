import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/index.css'
import 'github-markdown-css/github-markdown.css'
import highlight from './utils/highlight'
import 'highlight.js/styles/github.css'

const app = createApp(App)
app.directive('highlight', highlight)
app.use(router)

app.mount('#app')
