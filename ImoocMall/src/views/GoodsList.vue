<template>
  <div>
      这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.admin}}</span>
      <router-link to="/goods/title">显示商品标题</router-link>
      <router-link to="/goods/img">显示商品图品</router-link>
      <div>
        <router-view></router-view>
      </div>
      <!-- <router-link :to="{name:'cart'}">跳转到购物车页面</router-link> -->
      <router-link :to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
      <button @click="jump">button - 跳转到购物车页面</button>
  </div>
</template>
<style>

</style>
<script>
export default {
  data(){
      return {
          msg: 'hello vue'
      }
  },
  methods:{
      jump(){
          //this.$router.push('/Cart')
          //this.$router.push({path:'/cart'})
          this.$router.push({path:'/cart?goodsId=123'})
          //this.$router.go(-2)
      }
  }
}
</script>

