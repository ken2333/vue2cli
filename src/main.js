// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import helloworld from "./components/HelloWorld";
import List from "./components/List";
import  vueResouce from "vue-resource"
import  VueRouter from  'vue-router'

Vue.config.productionTip = false
//加载路由模块
Vue.use(VueRouter);
Vue.use(vueResouce);
//配置路由器
const  router=new VueRouter({
    routes:[
      {path:"/",component:helloworld},
      {path:"/list",component:List},
    ],
    mode:"history"
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
