<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/Swiper';
export default {
    name: 'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper
    }
}
</script>

<style>

</style>

