<template>
 <div class="banner swiper-container" :class="{loading:banners.length===0}">     <!--数据加载前的优化效果  commons.scss里 -->
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                 v-for="banner in banners"
                 :key="banner.id"
            >
               
                <img  width="100%" :src="getImages(banner.images.small)" alt="">
            </div>
        </div>
    <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return{
            banners:[]
        }
    },
        methods:{
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    //异步请求数据
    created(){ //axios        Vue.prototype.$http = axios
              //会出现跨域问题，解决方式 后台配端口，或者反向代理  配置文件中操作！
              
            this.$http.get("/api/db/in_theaters",{
                params:{
                    limit:6   //get请求传递参数 限制显示的结果
                }
            }).then(res=>{
                this.banners = res.data.object_list
                        this.$nextTick(()=>{
                               new Swiper(".banner",{
                                   loop:true,
                                   pagination:{
                                       el:".swiper-pagination"
                                   }
                               })
                        })
             
            })
    }

}
</script>
<style lang="scss">
      .banner{
        height:2.4rem;
        width:100%;
        img{
            height:2.4rem;
            width:100%;
        }
        .swiper-pagination{
            width: auto;
            left: auto;
            right: 10px;
        }
        .swiper-pagination-bullet-active{
            background: #fff;
        }
    }
</style>