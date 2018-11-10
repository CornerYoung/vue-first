<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">杭州</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">上海</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">杭州</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">阿克苏</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">鄂尔多斯</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">吐鲁番</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">南京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">青岛</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿尔卑斯</div>
                <div class="item border-bottom">阿拉斯加</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">B</div>
            <div class="item-list">
                <div class="item border-bottom">北京</div>
                <div class="item border-bottom">北海道</div>
                <div class="item border-bottom">半岛</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CityList'
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl'
    .border-bottom
        border-bottom 1px solid #ccc
    // .border-topbottom
    //     border-bottom 1px solid #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    .title
        line-height 0.44rem
        background-color #eeeeee
        padding-left 0.2rem
        color #666
        font-size 0.26rem
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wrapper
            width 33.33%
            float left
            .button
                padding 0.1rem 0
                text-align center
                margin 0.1rem
                border 0.02rem solid #ccc
                border-radius 0.06rem
    .item-list
        .item
         line-height 0.76rem
         padding-left 0.2rem
</style>
