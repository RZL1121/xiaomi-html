<template>
    <div class="home">
        <div style="padding-top:60px">
            <Banner></Banner>
        </div>
        <div class="navbar" :class="{fixtop:fixFlag}">
            <span
            v-for="nav in navs"
            :key="nav.id"
          :class="{active:type === nav.type}" 
          @click="type=nav.type"  
            >{{nav.title}}</span>
           
        </div>
        <div :class="{fixbox:fixFlag}">  
            <Movebox :type="type"></Movebox>
        </div>
      <BackTop></BackTop>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import Movebox from "./Movebox"
import BackTop from "./BackTop"
export default {
    name:"home",
    data(){
        return{
            type:"in_theaters",
            navs:[
                    {id:1,title:"正在热映",type:"in_theaters"},
                    {id:2,title:"即将上映",type:"coming_soon"}
                 
                 ],
            fixFlag:false
        }
      
    },
    methods:{
        scrollHandler(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
             if(sTop>=320 && !this.fixFlag ){
                 this.fixFlag = true;
             }else if(sTop < 320 && this.fixFlag){
                    this.fixFlag = false;
             }
        }
    },
    components:{
        Tabbar,
        Banner,
        Movebox,
        BackTop


    },
    // 如果想要实行缓存机制 在主页面app.vue  给动态组件 <router-view> 添加一个父标签  <keep-alive include="home"> 
    // include 里边 是要进行缓存的页面，不写默认全部， 给home 页面起一个name：home
    // 缓存 自带两个钩子函数activated(), deactivate() 代替下边两个， 因为是缓存所以不会被销毁，销毁函数不会触发
    
    // created(){
    //     window.addEventListener("scroll",  this.scrollHandler)
    // },
    // beforeDestroy(){
    //     window.removeEventListener("scroll",this.scrollHandler)
    // }
        activated(){
        window.addEventListener("scroll",  this.scrollHandler)
        window.scrollTo(0,this.homeTop)
    },
    deactivated(){
        window.removeEventListener("scroll",this.scrollHandler)
        this.fixFlag = false;
    },
       //组件内的路由守卫    来记录离开时的滚动高度实现离开 返回后还是原网页
    beforeRouteLeave(to,from,next){
        this.homeTop =  document.body.scrollTop || document.documentElement.scrollTop
        next()
    }
}
</script>

<style lang="scss">
  .home{
        padding-bottom: 60px;
        .fixbox{
            margin-top:0.9rem;
        }
        .navbar{
            margin-top:0.1rem;
            display:flex;
            height:0.5rem;
            background:hotpink;
           justify-content: space-around;
            align-items: center;
             &.fixtop{
                position: fixed;
                left:0;
                top:0;
                width:100%;
                margin-top:0;
            }
             span{
                position: relative;
                &:after{
                    content:"";
                    width:40px;
                    height:3px;
                    background: transparent;
                    position: absolute;
                    left:50%;
                    margin-left:-20px;
                    bottom:-10px;
                 
                }
            }
            .active{
                color:orange;
                &::after{
                    content:"";
                    background: orange;
                }
            }
        }
    }
</style>