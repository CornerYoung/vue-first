<template>
  <div id="app">
    <!-- 所有的路由都使用了keep-alive做了缓存 -->
    <!-- 使用exclude，排除了Detail，使Detail页面每次展示的时候不被缓存,mounted这个钩子每次都会重新执行 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.left{
    width:20%;
    border: 1px solid gray;
    float: left;
  }
</style>
