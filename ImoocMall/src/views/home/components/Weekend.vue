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
    data(){
        return {
            weekendList: [{
                id:'0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg',
                title: '石家庄的秋天',
                desc: '金秋时节无限美，层林尽染好风光'
            },{
                id:'0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/81/b178edc1197700.jpg_r_640x214_9acee897.jpg',
                title: '厦门娱乐万岁',
                desc: '不登鼓浪屿的新玩法~'
            },{
                id:'0003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                title: '最美丝路行',
                desc: '情系西北，中国梦丝路行'
            },{
                id:'0004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/25/87744e508e62c5.jpg_r_640x214_6c481013.jpg',
                title: '带宝贝玩转香港',
                desc: '孩子的天堂，别想拉走小朋友'
            }]
        }
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
    padding-bottom 33.9%
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
