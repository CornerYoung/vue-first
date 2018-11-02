<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data (){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationClickable :true,
                grabCursor : true,
                loop:true,
                autoplay: 1500,
                autoplayDisableOnInteraction : false
            },
            swiperList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/fe/fd9c295c0e1a7602.jpg_750x200_11c8343f.jpg'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/69/8697f10f17f35a02.jpg_750x200_c98193a9.jpg'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper-wrap >>> .swiper-pagination-bullet-active 
    background: #fff;
.swiper-wrap
    width 100%
    height 0
    overflow hidden
    padding-bottom 27%
    background-color #eee
    .swiper-img
        width 100%
        height 100%
</style>
