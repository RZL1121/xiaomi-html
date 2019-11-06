import {Ran_Num} from "./const"

export default {
        getNumRan(ctxs){
            let getrannum = Math.floor(Math.random()*100)

            //获取到的数据提交给mutations 在这里对state状态进行修改

            //提交方式 那边对应的函数名， 传过去的数据
            ctxs.commit(Ran_Num,getrannum)
        }
}