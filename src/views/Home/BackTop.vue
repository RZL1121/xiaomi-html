<template>
    <div class="back-top-box" @click="gotop()" v-show="isshow">
        <div class="back-top">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isshow:false
        }
    },
    methods:{
            gotop(){
                window.scrollTo(0,0)
               
            },
               scrollHandler(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=200 && !this.isshow){
                this.isshow = true;
            }else if(sTop<200 && this.isshow){
                this.isshow = false;
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.scrollHandler)
    },
      deactivated(){
        window.removeEventListener("scroll",this.scrollHandler)
    }
}
</script>

<style lang="scss">
     .back-top-box{
         position: fixed;
         right:20px;
         bottom: 80px;
         width:0.4rem;
         height:0.4rem;
         background: #999;
         border-radius: 50%;
         .back-top{
             font-size:0.3rem;
             text-align: center;
             line-height: 0.4rem;
         }
     }
</style>