<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list: [
                {
                    title: '成人票',
                    children:[
                        {
                            title:'成人三馆联票',
                            children:[
                                {
                                    title:'成人三馆联票-连锁店销售'
                                }
                            ]
                        },{
                            title:'成人五馆联票'
                        }
                    ]
                },{
                    title: '学生票'
                },{
                    title: '儿童票'
                },{
                    title: '特惠票'
                }
            ]
        }
    },
    methods: {
        handleGetDetail () {
            axios.get('/api/detail.json',{
                params : {
                    id : this.$router.params
                }
            }).then(function(res){
                console.log(res)
            })
        }
    },
    mounted () {
        this.handleGetDetail();
    }
}
</script>

<style lang="stylus" scoped>
.content
    height 50rem
</style>
