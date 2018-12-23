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
            imgs : [
                'http://img1.qunarzz.com/sight/p0/1411/c0/510cdcb852590824eb40027bb011c18a.water.jpg_350x240_a4cc818d.jpg',
                'http://img1.qunarzz.com/sight/p0/1505/10/10d0ebb75a00502b.water.jpg_350x240_f091c7d4.jpg'
            ],
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
