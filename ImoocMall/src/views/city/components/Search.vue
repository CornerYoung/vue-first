<template>
    <div class="search-wrapper">
        <div class="search">
            <input 
                class="search-input" 
                type="text" 
                name="" 
                id="" 
                placeholder="输入城市名或拼音"
                v-model="city"
            >
        </div>
        <div class="search-detaile" v-show="city" ref="search">
            <ul>
                <li 
                    class="city-item" 
                    v-for="(item,index) of cityList" 
                    :key="index"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="city-item-none" v-show="hasNoData">您搜索的内容不存在！</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props:{
        citys : Object
    },
    data () {
        return {
            city:'',
            cityList : [],
            timer : null
        }
    },
    methods: {
        handleCityClick () {
            this.$store.commit('changeCity',city)
        }
    },
    watch:{
        //监听器 监听city的改变
        city () {
            //设置节流函数
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.city){
                this.cityList = []
                return
            }
            //当监听到city发生变化时，隔100毫秒，箭头函数将被执行
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.citys){
                    this.citys[i].forEach((value)=>{
                        if( value.spell.indexOf(this.city)>-1 || value.name.indexOf(this.city)>-1 ){
                            result.push(value)
                        }
                    })
                }
                this.cityList = result
            },100)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    },
    computed:{
        hasNoData () {
            return !this.cityList.length
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
.search
    height 0.72rem
    padding 0 0.1rem
    background-color $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height 0.62rem
        padding 0 0.1rem
        line-height 0.62rem
        text-align center
        border-radius 0.06rem
        color #666
.search-detaile
    background-color #eee
    position absolute
    z-index 1
    top 1.58rem
    bottom 0
    left 0
    right 0
    overflow hidden
    .city-item
        line-height 0.6rem
        padding-left 0.2rem
        background-color  #fff
        border-bottom 1px solid #eee
    .city-item-none
        font-size 0.38rem
        background-color #ffffff
        line-height 0.8rem
        text-align center
</style>

