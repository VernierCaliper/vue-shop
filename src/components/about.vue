<template>
  <div class="about">
    <span class="about_title">{{msg}}</span>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
    return {
      msg: '暂未开放，敬请期待'
    }
  }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
