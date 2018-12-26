<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption" v-if="showSwiper">
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
    props:{
        swiperList : Array
    },
    data (){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationClickable :true,
                grabCursor : true,
                loop:true,
                autoplay: 1500,
                autoplayDisableOnInteraction : false
            }
        }
    },
    computed:{
        showSwiper () {
            return this.swiperList.length
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
    padding-bottom 26.5%
    background-color #eee
    .swiper-img
        width 100%
        height 100%
</style>
