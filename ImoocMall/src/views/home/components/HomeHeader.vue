<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/City">
            <div class="header-right">
                <!-- {{this.$store.state.city}} -->
                {{this.city}}
                <!-- {{this.doubleCity}} -->
                <span class="iconfont arrow-icon">&#xe615;</span>
            </div>
        </router-link>
        <!-- <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe615;</span>
        </div> -->
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
    // props:{
    //     city: String
    // }
}
</script>

<style lang="stylus" scoped>
// @import '~@/assets/css/varibles.styl';
@import '~css/varibles.styl';
.header
    display flex
    line-height : $headerHeight
    font-size : 0.3rem
    background-color : $bgColor
    color : $whiteTextColor
    .header-left
        width : 0.64rem
        float : left
        .back-icon
            text-align : center
            font-size : 0.4rem
    .header-input
        flex 1
        margin-top : 0.12rem
        margin-left : 0.2rem
        padding-left 0.2rem
        height : 0.64rem
        line-height : 0.64rem
        background-color $whiteTextColor
        border-radius : 5px
        color : #ccc
    .header-right
        min-width : 1.24rem
        padding 0 0.1rem
        float : right 
        text-align : center
        color $whiteTextColor
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        .arrow-icon 
            font-size 0.24rem
</style>

