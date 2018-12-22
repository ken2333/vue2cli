<template>
      <div>
        <p>{{titile}}</p>
          <ul v-for="user in list">
            <p >{{user.name}} : {{user.age}}</p>
          </ul>
        <button @click="changeName"  >删除一个用户</button>
        <button  v-on:click="$emit('changeString','changeemit')" >emit</button>
      </div>
</template>

<script>
    export default {
        name: "Content",
      props:{
        titile:{required:true}
        ,list:{type:Array,
          required: false
        }
      },
      methods:{
          changeName:function () {
             this.list.pop();
          }
      }
    }
</script>

<style scoped>

</style>
