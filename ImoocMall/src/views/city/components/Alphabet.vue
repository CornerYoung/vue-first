<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @click="handleLiClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        cities: Object
    },
    data () {
        return {
            touchFlag : false,
            startTop : 0
        }
    },
    updated () {
        this.startTop = this.$refs['A'][0].offsetTop;
    },
    computed:{
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLiClick (ev) {
            this.$emit('change',ev.target.innerText)
        },
        handleTouchStart () {
            this.touchFlag = true
        },
        handleTouchMove (ev) {
            if(this.touchFlag){

                //每次滑动的时候都会计算一遍 startTop 性能比较低
                //const startTop = this.$refs['A'][0].offsetTop

                //const touchY = this.$refs[item][0].clientY
                const touchY = ev.touches[0].clientY - 79
                //const index = Math.floor((touchY-startTop)/20)
                const index = Math.floor((touchY-this.startTop)/20)

                // this.$emit('touch',index)
                if(index >= 0 && index < this.letters.length){
                    this.$emit('change',this.letters[index])
                }
            }
        },
        handleTouchEnd () {
            this.touchFlag = false
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

