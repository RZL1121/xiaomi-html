<template>
    <div class="tabbar">
              <TabItem txt="首页" mark="home" :sel="selected"> <!-- 父子组件传递文字 子组件通过props 接收-->
    <!-- 利用插槽方式传递图片 -->
                  <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
                  <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
             </TabItem>
            <TabItem txt="书影音" mark="audio" :sel="selected">
                <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
                <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
            </TabItem>
            <TabItem txt="广播" mark="broadcast" :sel="selected">
                <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
                <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
            </TabItem>
            <TabItem txt="分组" mark="group" :sel="selected">
                <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
                <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
            </TabItem>
            <TabItem txt="我的" mark="mine" :sel="selected">
                <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
                <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
            </TabItem>

    </div>
</template>

<script>
import TabItem from "./Item"     //引入子组件
export default {
    data(){
        return{
            selected:this.$route.name  //  在注册路由时起的name名
        }
    },
       components:{           // 注册组件
        TabItem
    }
}
</script>



<style>
    .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        display: flex;
        border-top:1px solid #ccc;
        background:#ccc;
     
    }
</style>
