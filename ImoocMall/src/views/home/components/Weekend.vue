<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="" srcset="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList : Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
.recommend-title
    margin-top 0.2rem
    line-height 0.8rem
    background-color #eee
    text-indent 0.2rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
        width 100%
.item-info
    padding 0.1rem
    .item-title
        line-height 0.54rem
        font-size 0.32rem
        ellipsis()
    .item-desc
        line-height 0.4rem
        font-size 0.28rem
        color #ccc
        ellipsis()
</style>
