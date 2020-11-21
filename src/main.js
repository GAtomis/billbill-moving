import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastClick from 'fastclick'

import '@/components/common/mint-ui/index'
//小b站主题样式覆盖
import './assets/css/we-ui.scss'
//reset样式以及全局样式规定
import './assets/css/base.css'
//路由守卫
import './permission'
//svg加载器
import '@/assets/icons'

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')