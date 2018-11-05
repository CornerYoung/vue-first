<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showIcon">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of pages[index]" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="" srcset="">
                    </div>
                    <p class="icon-desc">{{item.cont}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'Icons',
    props:{
        IconList : Array
    },
    data:function(){
        return {
            swiperOption:{
                loop:true,
                autoplay: false,
                autoplayDisableOnInteraction : true
            }
            // IconList:[{
            //         id:'0001',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            //         cont:'景点门票'
            //     },{
            //         id:'0002',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            //         cont:'一日游'
            //     },{
            //         id:'0003',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            //         cont:'杭州必游'
            //     },{
            //         id:'0004',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            //         cont:'动植物园'
            //     },{
            //         id:'0005',
            //         imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            //         cont:'打卡圣地'
            //     },{
            //         id:'0006',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
            //         cont:'西湖'
            //     },{
            //         id:'0007',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            //         cont:'杭州乐园'
            //     },{
            //         id:'0008',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
            //         cont:'西溪湿地'
            //     },{
            //         id:'0009',
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            //         cont:'暑期酷夏'
            //     }]
        }
    },
    computed:{
        //构建二维数组，计算一共需要展示几页
        pages () {
            //定义一个空的二维数组 pages
            const pages = [];
            //对IconList进行遍历
            this.IconList.forEach((item,index) => {
                //定义page作为页码，取整，计算出一共有多少页
                const page = Math.floor(index/8);
                //如果pages[page]不存在的话，就赋值一个空数组。比如：pages[2]将展示第三页的内容，但并没有那么多数据，所以就给一个空数组
                if( !pages[page] ){
                    pages[page] = [];
                };
                //在pages[page]中加入IconList中的数据
                pages[page].push(item);
            });
            return pages;
        },
        showIcon () {
            return this.IconList.length
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
@import '~css/mixins.styl'
.icons >>> .swiper-comtainer
    height 0
    padding-bottom 50%
.icons
    margin-top 0.1rem
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
            ellipsis()
</style>



