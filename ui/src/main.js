// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//引入mock
import './mock/index'
// 按需全量引入 bk-magic-vue 样式
import 'bk-magic-vue/dist/bk-magic-vue.min.css'
import '@/assets/componentLibrary/demand-import';
// bk-magic-vue全引入
// import '@/assets/componentLibrary/fully-import';
// 几何图
import * as Echarts from 'echarts'
// 引用API文件
import api from './api/index'
//公共方法
import './controller/func/common.js';
// 统一样式引入
import './assets/index'
// 引入自定义方法
import Dire from './directive/index.js'
// 引入自定义组件
import Component from './components/index.js'
//vuex
import store from './store/index'
import 'jquery'

Vue.use(Echarts);
Vue.use(Dire);
Vue.use(Component);
Vue.prototype.$echarts = Echarts;
// 将API方法绑定到全局
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
const headTheme = 'light'; //选择 light 或 blue
Vue.prototype.headTheme = headTheme;
console.log(123)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    data() {
        return {
            website: '我是全局变量',
        }
    },
    components: {App},
    template: '<App/>',
});
