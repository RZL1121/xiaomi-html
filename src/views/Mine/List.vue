<template>
    <div class="list">
         <mt-cell :title="good.CommodityName"  
     
          v-for="good in goods"
            :key="good.CommodityId"
         >
             
             <img slot="icon" :src="good.SmallPic" width="24" height="24">
           <span> ￥{{good.OriginalPrice}}/克  </span>    
             <mt-button type="danger" size="small" @click=" addIncart(good)">添加购物车</mt-button>
        </mt-cell>

    </div>
</template>

<script>
// 引入一个辅助函数，在使用多个state数据时 减少代码
//  computed 监控 state里 数据变化
import {mapActions} from "vuex"
 
export default {
       data(){
           return {
               goods:[]
           }
       },
       methods:{
           getGoods(){
               this.$http.get("/api/fruit.json").then(res=>{
                     this.goods = res.data.CommodityList
                   
                        console.log(this.goods)
               })
           },
            ...mapActions(["addIncart"])
       },
       created(){
           this.getGoods()
        
       }
}
</script>

<style lang="scss">
    .mint-cell-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width:150px;
        img{
            width:50px;
            height:50px;
            float:left;
        }
     
    }
    .mint-cell-value{
           span{
            margin-right:20px;
            font-size:12px;
            color:pink;
        }
    }
</style>