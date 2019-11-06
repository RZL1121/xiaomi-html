<template>
    <div>
        <div v-if="!movedetail" class="loading"></div>
        <div v-else class="movie-detail">          
              <mt-header fixed :title="movedetail.title">
                    <router-link to="/" slot="left">
                        <mt-button icon="back">back</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
              </mt-header>
   
          


            
            <div class="imgbox">
                <img :src="getImages(movedetail.images.small)" alt="">
            </div>
            <div class="detail">
                <p>电影《{{movedetail.title}}》</p>
                    <p>类型：{{movedetail.genres}}</p>
            </div>
        
            <p>电影介绍：</p>
            <p>{{movedetail.summary}}</p>
        </div>
    </div>
</template>

<script>
import {getImages} from "@/modules/utils"


export default {
   data(){
        return {
            movedetail:null 
        }
    },
   methods:{
        getImages
    },
    
    created(){
        //因为前边页面传递的id是放在当前对象路由里的
        let moveID = this.$route.params.id
        this.$http.get("/api/db/movie_detail/"+moveID).then(res=>{
            console.log( res.data)
            this.movedetail = res.data;
            
        })
    }
}
</script>

<style lang="scss" >
 
</style>