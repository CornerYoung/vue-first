<template>
    <div>
        <div 
            class="item"
            v-for="(item,index) of list"
            :key="index"
        >
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'DetailList',
    props : {
        list : Array
    }
}
</script>

<style lang="stylus" scoped>
.item-title-icon {
    display: inline-block;
    position: relative;
    width: .36rem;
    height: .36rem;
    top: .06rem;
    left: .06rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.item-title
    line-height 0.8rem
    font-size 0.32rem
    padding 0 0.2rem
    border-bottom 1px solid #ccc
</style>
