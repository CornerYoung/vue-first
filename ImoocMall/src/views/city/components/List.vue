<template>
    <div class="list" ref="wrapper">
        <div class="wrapper">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <!-- 
                            这里使用 {{hotcities[5].name}} 会报错
                            <div class="button">{{hotcities[5].name}}</div> 
                        -->
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <ul class="button-list">
                    <li class="button-wrapper" v-for="item of hotcities" :key="item.id">
                        <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" 
                v-for="(city,key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li 
                        class="item border-bottom" 
                        v-for="innerItem of city" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hotcities: Array,
        cities: Object,
        letter: String
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    methods:{
        handleCityClick (city) {
            // this.$store.dispatch('changeCity',city)
            this.$store.commit('changeCity',city)
        }
    },
    watch:{
        //监听 letter 的变化，一旦 letter 发生改变，城市列表跳到相应的区域
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl'
    .border-bottom
        border-bottom 1px solid #ccc
    // .border-topbottom
    //     border-bottom 1px solid #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    .title
        line-height 0.54rem
        background-color #eeeeee
        padding-left 0.2rem
        color #666
        font-size 0.26rem
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wrapper
            width 33.33%
            float left
            .button
                padding 0.1rem 0
                text-align center
                margin 0.1rem
                border 0.02rem solid #ccc
                border-radius 0.06rem
    .item-list
        .item
         line-height 0.76rem
         padding-left 0.2rem
</style>
