<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="header-back iconfont">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
.header
    position relative
    overflow hidden
    height 0.86rem
    line-height 0.86rem
    text-align center
    color #ffffff
    background-color $bgColor
    font-size 0.32rem
    .header-back
        width 0.64rem
        font-size 0.4rem
        text-align center
        position absolute
        top 0
        left 0
</style>
