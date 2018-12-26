<template>
    <div class="banner">
        <img 
            @click="handleShowGallary"
            class="banner-img" 
            :src="banner"
            alt=""
        >
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number">
                <span class="iconfont arrow-icon">&#xe682;</span>
                {{this.banner.length}}
            </div>
        </div>
        <common-gallary 
            :imgs="gallaryImgs"
            v-show="showGallary"
            @close="handleCloseGallary"
        >
        </common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    props: {
        banner: String,
        sightName: String,
        gallaryImgs: Array
    },
    data () {
        return {
            showGallary : false
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleShowGallary : function(){
            this.showGallary = true
            console.log('点击在banner上，this.showGallary --> '+this.showGallary)
        },
        handleCloseGallary () {
            this.showGallary = !this.showGallary
            console.log('点在了Gallary上，this.showGallary --> '+this.showGallary)
        }
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
