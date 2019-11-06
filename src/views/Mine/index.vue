<template>
    <div class="mine">

        <mt-tabbar fixed>
                    <mt-tab-item  
                    v-for="nav in navs"
                    :key="nav.id"
                    >     
                               <!-- active-class="active"   处于激活状态自动添加  -->
                        <router-link :to="{name:nav.name}" active-class="active">
                            <i :class="['fa','fa-'+nav.icon]"></i>
                         {{nav.tltle}}
                       </router-link>              
                       
                    </mt-tab-item>
                  
        </mt-tabbar>
         <router-view></router-view>
    </div>
   
</template>   
<script>

export default {
    data(){
        return{
              navs:[
               {id:1,name:"list",tltle:"列表",icon:"list"},
               {id:2,name:"cart",tltle:"购物车",icon:"shopping-cart"},
            ]
        }
      
    },
    components:{

    }
}
</script>

<style>
          .active{
        color:orange;
    }
</style>