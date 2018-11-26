<template>
    <div>
        <!-- <home-header :city="city"></home-header> -->
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <icons :IconList="IconList"></icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
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
    data () {
        return {
            // city : '',
            swiperList : [],
            IconList : [],
            recommendList : [],
            weekendList : []
        }
    },
    methods : {
        getHomeInfo : function(){
            //目前用的是本地模拟的地址，假如代码要上线，肯定不能用这样的地址，就需要在上线之前把这里的地址重新替换成/api/index.json这种格式
            //于是我们可以在开发环境中依然使用/api/index.json这个路径，使用代理机制把api下的的路径转发到本地的mock文件夹下
            // axios.get('../../../static/mock/index.json')
            axios.get('/api/index.json')
            .then(this.getHomeInfoSccc)
        },
        getHomeInfoSccc(res){
            res = res.data;
            const data = res.data
            if( res.ret && data ){
                // this.city = data.city
                this.swiperList = data.swiperList
                this.IconList = data.IconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            };
        }
    },
    mounted () {
        this.getHomeInfo();
    }
}
</script>

<style>

</style>

