<template>
    <div>
      <h1>List</h1>
      <ul v-for="(user,index) in userList">
        <p><span>{{index}}</span>{{user.id}},{{user.name}}</p>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "List",
      data:function()
      {
        return {
            userList:[],
        }
      },
      created:function () {
        this.$http.get("http://jsonplaceholder.typicode.com/users").then(value => {
          console.log(value)
        this.userList=value.body;
        })
      }
    }

</script>

<style scoped>

</style>
