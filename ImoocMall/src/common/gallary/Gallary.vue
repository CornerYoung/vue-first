<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide>
                    <img   
                        class="gallary-img" 
                        src="http://img1.qunarzz.com/sight/p0/1411/c0/510cdcb852590824eb40027bb011c18a.water.jpg_350x240_a4cc818d.jpg" 
                        alt=""
                    >
                </swiper-slide>
                <swiper-slide>
                    <img   
                        class="gallary-img" 
                        src="http://img1.qunarzz.com/sight/p0/1505/10/10d0ebb75a00502b.water.jpg_350x240_f091c7d4.jpg" 
                        alt=""
                    >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    data () {
        return {
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 1
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    .wrapper
        height 0
        width 100%
        padding-bottom 100%
        .gallary-img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem
</style>
