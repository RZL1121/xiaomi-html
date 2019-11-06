<template>
    <router-link
     class="moveitems"
    tag="div"
     :to="{name:'moviedetail',params:{id:move.id}}"
     >
          <div class="imgbox">
              <img width="100%"  v-lazy=" getImages(move.images.small)" alt="">
          </div>
          <div class="info">
              <div class="info-left">
                  <p class="title">电影《{{move.title}}》</p>
               
                  <p class="count">观看次数：{{move.collect_count}}</p>
              </div>
              <div class="info-rigth">
                  <p class="director">导演：{{move.directors[0].name}}</p>
                  <p class="rating">评分：{{move.rating.average}}</p>
              </div>
          </div>
    </router-link>
</template>

<script>
export default {
    props:{
        move:Object        // 每一个元素的详细信息
    },
   methods:{
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    }
}
</script>

<style lang="scss" >
     .moveitems{
            margin:0.1rem;
            background:#fff;
            height:2.2rem;
            display:flex;
         .imgbox{

            width:1.5rem;
            height:2.2rem;
             float:left;
             img{
                 height:2.2rem;
             }
         }
         .info{
             float:right;
             p{
                 margin:0.1rem;
             }
         }
        

     }
</style>