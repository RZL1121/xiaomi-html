<template>
    <div class="item" @click="clickItem">
        <!-- sloat插槽口 对应的图片插入 -->
             <span v-if="!flag"><slot name="normalImg"></slot></span>
              <span v-else><slot name="activeImg"></slot></span>
              <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
       props:["txt","mark","sel"],// 接收文字
        computed:{         // 监听点击的
            flag(){
                if(this.mark === this.sel){
                    return true
                }
                return false
            }
        },
       methods:{
           clickItem(){
               this.$router.push("/"+this.mark)
           }
       }
}
</script>

<style lang="scss"> // lang 声明当前为scss编译 
    .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:40px;
            height:40px;
        }
          .active{
            color:#2aaa51;
        }
    }
</style>