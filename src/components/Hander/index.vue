<template>
    <div class="hander" v-if="flag">
        <div class="left">
            <i :class="['fa','fa-'+icon]"></i>
            <span>{{title}}</span>
        </div>
        <div class="right">
            <span>城市</span>
        </div>
    </div>
</template>

<script>
import router from "@/router"
export default {
    data(){
        return{
            icon:"home",
            title:"豆瓣首页",
            flag:true
        }
    },
    created(){
        //全局前置路由钩子
        router.beforeEach((to,form,next)=>{
            switch (to.name){  //to.name 当前加载的组件
                case "home":
                     this.title = "豆瓣首页"
                     this.icon = "home"
                     this.flag = true
                     break;
               case "audio":
                    this.title = "豆瓣影音"
                    this.icon = "audio-description"
                    this.flag = true
                    break;
                case "broadcast":
                    this.title = "豆瓣广播"
                    this.icon = "volume-up"
                    this.flag = true
                    break;
                case "group":
                    this.title = "豆瓣分组"
                    this.icon = "users"
                    this.flag = true
                    break;
                case "mine":
                    this.title = "豆瓣我的"
                    this.icon = "user-o"
                    this.flag = true
                    break;
                default:
                    this.flag = false
                    break;

            }

            next();
        })
    }
}
</script>

<style lang="scss">
    .hander{
        width:3.75rem;
        height:50px;
        background: rgba(0,0,0,0.6);
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        padding:0 .2rem;
        color:#fff;
        position: fixed;
        z-index: 10
        i{
            padding-right:10px;
        }
    }
</style>