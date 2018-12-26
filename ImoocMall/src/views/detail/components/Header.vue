<template>
    <div>
        <router-link 
            tag="div" 
            class="header-abs" 
            to="/"
            v-show="this.showAbs"
        >
            <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed"
            v-show="!this.showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="header-fixed-back iconfont">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name : 'DetailHeader',
    data () {
        return {
            showAbs : true,
            opacityStyle : {
                opacity : 0
            }
        }
    },
    methods : {
        handleScroll () {
            const top = document.documentElement.scrollTop
            console.log('scroll')
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    //当对一个组件使用<keep-alive>后，这个组件会多出一个 activated 的生命周期函数，在每一次页面展示时会执行一次
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    //相对应的，这个组件还会多出一个 deactivated 生命周期函数，对事件进行解绑
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
.header-abs
    position absolute
    width 0.8rem
    height 0.8rem
    line-height 0.8rem
    text-align center
    top 0.2rem
    left 0.2rem
    border-radius 50%
    background-color rgba(0, 0 ,0 ,0.6)
    .header-abs-icon
        color #fff
        font-size 0.5rem
.header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background-color $bgColor
    font-size 0.32rem
    z-index 2
    .header-fixed-back
        width 0.64rem
        font-size 0.4rem
        text-align center
        position absolute
        top 0
        left 0
        color $whiteTextColor
</style>
