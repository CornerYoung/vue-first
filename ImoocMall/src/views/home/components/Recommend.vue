<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="" srcset="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList : Array
    },
    data(){
        return {
            // recommendList: [{
            //     id:'0001',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/5a/271e81378fbb2df40d6098eaaddbf6ac.water.jpg_200x200_0ec74a3b.jpg',
            //     title: '呀诺达热带雨林',
            //     desc: '带上孩子来一次丛林探险吧'
            // },{
            //     id:'0002',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/d0/3a3ac982cb22488d1b31dd2857fde18b.water.jpg_200x200_4b1cf9d4.jpg',
            //     title: '蜈支洲岛',
            //     desc: '带上心爱的人来浪漫情人岛吧~'
            // },{
            //     id:'0003',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/43/1217ccf8106bca9a077b58bf56bb2598.water.jpg_200x200_318d0773.jpg',
            //     title: '三亚千古情景区',
            //     desc: '置身传统黎村，领略黎族风情'
            // },{
            //     id:'0004',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1802/ef/ef88e4b2fec1f385a3.img.jpg_200x200_217e7a83.jpg',
            //     title: '亚特兰蒂斯失落的空间水族馆',
            //     desc: '失落的空间水族馆邀您一同揭开千年之谜'
            // },{
            //     id:'0005',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/7f/7f06f56b02987c66a3.img.jpg_200x200_2c416b4a.jpg',
            //     title: '库木塔格沙漠景区',
            //     desc: '帅的人都去过了😎，你还等什么~'
            // },{
            //     id:'0006',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/79/7970f247fb8f32b690.img.jpg_200x200_3108631c.jpg',
            //     title: '喀拉峻',
            //     desc: '👍小伙伴们都收藏了，去看看吧~'
            // },{
            //     id:'0007',
            //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/36/36d961ca13ce0cfa3.img.jpg_200x200_c4f43f77.jpg',
            //     title: '吴桥杂技大世界',
            //     desc: '这里最近很火哦，好多人都在点评它呢！'
            // }]
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
            color #fff
</style>
