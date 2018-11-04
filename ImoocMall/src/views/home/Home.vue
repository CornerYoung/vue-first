<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/Swiper';
import Icons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper,
        Icons,
        HomeRecommend,
        HomeWeekend
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style>

</style>

