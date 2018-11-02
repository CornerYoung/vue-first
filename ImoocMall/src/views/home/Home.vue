<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/Swiper';
import Icons from './components/Icons'
export default {
    name: 'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper,
        Icons
    }
}
</script>

<style>

</style>

