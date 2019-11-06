import {SYNC_UPDATE} from "./const"

export default {
    initCars(ctx){
        //获取购物车
        let cars = getCar()
        ctx.commit(SYNC_UPDATE,cars)
    },
    addIncart(ctx,good){
        
            //获取后台返回来的购物车数据
            let cars = getCar()
            let isHas = cars.some(item=>{
                if(item.CommodityId === good.CommodityId){
                    item.num++
                    return true
                }
            })
               if(!isHas){
                   //代表原来购物车内不存在
                   good.num = 1
                   cars.push(good)
               }

               //通知后台更改cars
               localStorage.cars = JSON.stringify(cars)
               //前段需要通过mutations具体的方法来去更改state里面的cars
               ctx.commit(SYNC_UPDATE,cars)

      
    },
    reduceIncart(ctx,good){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.CommodityId === good.CommodityId){
                item.num--
                if(item.num<0){
                    return false //返回false直接将此商品从数组里面删除
                }
               
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit(SYNC_UPDATE,cars)

    }
}


//使用本地存储作为后台进行模拟   从数据库里返回购物车信息
//如果有就拿出来，没有就先建一个空数组作为存储
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}