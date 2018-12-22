<template>
  <div id="app">
  <Header></Header>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import  Content from  './components/Content'
import  Header from './components/Header'
 export default {
  name: 'App',
  components: {
    HelloWorld,
    Content,
    Header:Header
  },



}
</script>

<style>

</style>
