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
        <div class="search-detaile">
            <ul>
                <li class="city-item">{{city}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
    props:{
        citys : Object,
        cityList : []
    },
    data () {
        return {
            city:''
        }
    },
    watch:{
        city () {
            this.city
        }
    },
    mounted () {
        console.log(this.citys)
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
    width 100%
    height 100%
    background-color #eee
    position absolute
    z-index 1
    top 1.58rem
    bottom 0
    left 0
    right 0
    .city-item
        line-height 0.5rem
        padding-left 0.1rem
</style>

