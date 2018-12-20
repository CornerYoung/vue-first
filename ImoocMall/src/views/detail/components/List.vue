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
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //子组件也可以自己调用自己，所以就使用到了 name 属性
    name : 'DetailList',
    props : {
        list : Array
    }
}
</script>

<style lang="stylus" scoped>
.item-title-icon {
    display: inline-block
    position: relative
    width: .36rem
    height: .36rem
    top: .06rem
    left: .06rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
}
.item-title
    line-height 0.8rem
    font-size 0.32rem
    padding 0 0.2rem
    border-bottom 1px solid #ccc
.item-children
    padding 0 0.2rem
</style>
