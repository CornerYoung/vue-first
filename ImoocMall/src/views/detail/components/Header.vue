<template>
    <div>
        <router-link tag="div" class="header-abs" to="/">
            <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div class="header-fix"></div>
    </div>
</template>

<script>
export default {
    name : 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
.header-abs
    position absolute
    width 0.8rem
    height 0.8rem
    top 0.2rem
    left 0.2rem
    border-radius 50%
    background-color rgba(0, 0 ,0 ,0.8)
    .header-abs-icon
        color #fff
        line-height 0.8rem
        text-align center
        font-size 0.5rem
</style>
