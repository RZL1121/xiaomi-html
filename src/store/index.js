import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import state from "./state"        //这里的注册名字是固定的
// import mutations from "./mutations"
// import getters from "./getter"
// import actions from "./actions"

import rannumber from "./rannumber"
import myCart from "./myCart"
export default new Vuex.Store({
  //    state,
  //    getters,
  // mutations,
  // actions
   modules:{
    rannumber,
    myCart
   }
})
