<template>
  <div id="app">
    <keep-alive>
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
