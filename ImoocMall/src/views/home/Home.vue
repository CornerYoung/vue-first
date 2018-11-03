<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/Swiper';
import Icons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
    name: 'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper,
        Icons,
        HomeRecommend
    }
}
</script>

<style>

</style>

