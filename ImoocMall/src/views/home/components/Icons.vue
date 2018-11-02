<template>
    <div class="icons">
        <div class="icon" v-for="item of IconList" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="" srcset="">
            </div>
            <p class="icon-desc">{{item.cont}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Icons',
    data:function(){
        return {
            IconList:[{
                    id:1,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    cont:'景点门票'
                },{
                    id:2,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    cont:'一日游'
                },{
                    id:3,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    cont:'杭州必游'
                },{
                    id:4,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    cont:'动植物园'
                },{
                    id:5,
                    imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                    cont:'打卡圣地'
                },{
                    id:6,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                    cont:'西湖'
                },{
                    id:7,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                    cont:'杭州乐园'
                },{
                    id:8,
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    cont:'西溪湿地'
                }]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl';
.icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
        position relative
        overflow hidden
        width 25%
        height 0
        float left 
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom 0.44rem
            box-sizing border-box
            padding 0.1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height 0.44rem
            line-height 0.44rem
            color $darkTextColor
            text-align center
</style>



