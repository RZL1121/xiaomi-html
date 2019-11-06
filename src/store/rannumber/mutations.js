import {Change_Num,Ran_Num} from "./const"
export default {
    [Change_Num](state){
        state.num++
      },
      [Ran_Num](state,getrannum){
        state.rannum = getrannum
      }
}