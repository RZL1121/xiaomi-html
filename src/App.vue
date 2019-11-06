<template>
  <div id="app">
    <Hander></Hander>
      <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
 
  </div>
</template>

<style lang="scss">

</style>

<script>
import Hander from "@/components/Hander"

export default {
  components:{
    Hander

  },
    created(){
    //刷新url地址栏，直接回到首页
    this.$router.push("/")
      //调用actions里面的initCars
    this.$store.dispatch("initCars")
  }
}
</script>

