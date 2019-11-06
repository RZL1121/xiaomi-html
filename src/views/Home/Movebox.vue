<template>
    <div class="movebox"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
    
           
            <Moveitems
                v-for="move in moves"
                :key="move.id"
                :move ="move"
            > 
            </Moveitems>
    </div>
</template>

<script>
import Moveitems from "./Moveitems"
import { Toast } from 'mint-ui';
export default {
    props:["type"], //接收home页面点击的类型
     //监听type的变化调用 getmove()
    watch:{
        type(val){   //val 代指最新变化的type值
            this.moves = [];// 每次切换类型的时候，数组清空
            this.page = 1;  // 每次切换类型的时候，页码从第一页开始
            this.hasMore = true; //默认有更多数据
            this.getmove()
        }
    },
    data(){
        return {
            moves:[],
            limit:6,
            page:1,       // 默认显示第一页
            loading:false,// 默认开启无限滚动
            hasMore:true //  默认有更多的数据
        }
    },
    methods:{
        loadMore() {   // 刚开始， 页面自动执行一次
                if(!this.hasMore){  // 当数据全部加载完后
                   Toast({
                        message: '全部加载完毕',
                        position: 'bottom'
                  
                    });
                     this.loading = true; // 关闭无限滚动  到达底部
                     return false;
                }
                this.getmove()  //向下滑动时请求数据调用这个函数/
        },
        getmove(){

            let {limit,page} = this; // let page = this.page
            let instance = Toast({
                                    message: '正在加载中',
                                           duration:-1,
                                    iconClass: 'fa fa-cog fa-spin' // 图标
                                
                                });
            this.loading = true; // 在请求数据前要暂时关闭无限滚动，请求后开启
                 this.$http.get("/api/db/"+this.type,{
                     params:{
                         limit,     //get 方式传递参数 限制显示条数
                         page       //   页数
                     }
                 }
        
                ).then(res=>{
                    this.moves = this.moves.concat(res.data.object_list) //把新加载请求到的数据组 添加到元数据组上，使其不被覆盖 替换
                this.loading = false;//开启无限滑动
                 instance.close();// 加载完数据后，关闭加载提示
                // 判断数据是否全部加载完成
                if(this.limit*this.page >= res.data.total){
                    this.hasMore = false  // 没有更多的数据了
                    return false;     // page 也不会增加了
                }
                    this.page++
                })
        }
    },
     components:{
         Moveitems
     },
    activated(){
        this.loading = false;//开启无限滑动
    },
    deactivated(){
       this.loading = true;//开启无限滑动
    },
}
</script>
<style lang="scss" >

</style>