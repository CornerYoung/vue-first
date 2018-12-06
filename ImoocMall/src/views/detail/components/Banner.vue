<template>
    <div class="banner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_600x330_c34588e7.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">杭州野生动物世界(AAAA景区)</div>
            <div class="banner-number">
                <span class="iconfont arrow-icon">&#xe682;</span>
                39
            </div>
        </div>
        <common-gallary></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    width 100%
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        position absolute
        bottom 0
        left 0
        right 0
        color #fff
        display flex
        font-size 0.3rem
        line-height 0.6rem
        background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex 1
            line-height 0.4rem
            padding 0 0.2rem
        .banner-number
            padding 0 0.4rem
            height: .32rem
            line-height: .32rem
            border-radius: .2rem
            background rgba(0,0,0,.8)
</style>
