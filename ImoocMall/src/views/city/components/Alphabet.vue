<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="(city,key) of cities" 
            :key="key"
            @click="handleLiClick"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        cities: Object
    },
    methods:{
        handleLiClick (ev) {
            this.$emit('change',ev.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width 0.4rem
    .item
        text-align center
        line-height 0.4rem
        color $bgColor
</style>

