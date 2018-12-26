<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link 
                tag="li"
                class="item" 
                v-for="item of recommendList" 
                :key="item.id" 
                :to=" '/detail/'+item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="" srcset="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList : Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
@import '~css/varibles.styl';
.recommend-title
    margin-top 0.2rem
    line-height 0.8rem
    background-color #eee
    text-indent 0.2rem
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
        padding 0.1rem
    .item-info
        flex 1
        padding 0.1rem
        min-width 0
        .item-title
            line-height 0.54rem
            font-size 0.3rem
            ellipsis()
        .item-desc
            line-height 0.4rem
            font-size 0.26rem
            color #ccc
            ellipsis()
        .item-btn
            margin-top 0.16rem
            background-color #ff9300
            padding 0 0.2rem
            border-radius 0.06rem
            color $whiteTextColor
</style>
