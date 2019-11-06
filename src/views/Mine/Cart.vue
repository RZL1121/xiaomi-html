<template>
    <div class="cart">
          <div v-if="cars.length===0">
            没有商品了
            <router-link to="/mine/list">购买！</router-link>
        </div>
        <div v-else> 
                <ul>
                    <li class="son"
                        v-for="car in cars"
                        :key="car.CommodityId"
                    >
                    <img :src="car.SmallPic" alt="">
                    <p>{{car.CommodityName}}</p> 
                    <mt-button @click=" addIncart(car)" type="danger" size="small">+</mt-button>
                        <mt-button @click='reduceIncart(car)' type="danger" size="small">-</mt-button>
                    </li>
  
              </ul>
        </div>
 
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
             ...mapState({
                cars:state=>state.myCart.cars //从vuex仓库中拿数据
            }),
         ...mapGetters(["computedToal"])
    },
    methods:{
                ...mapActions(["addIncart","reduceIncart"])
    }

  
}
</script>

<style lang='scss'>
            .son{
                width:100%;
                height:200px;
                    img{
                        height:150px;
                        width:150px;
                        float:left;
                    }
                    p{
                        
                        
                    }
            }
</style>