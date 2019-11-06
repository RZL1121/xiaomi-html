export default {
    computedToal(state){
        let cars = state.cars;
        let total = {price:0,num:0}

        cars.forEach(item => {
            total.price += item.OriginalPrice * item
            total.num += item.num
        })
        total.price = total.price.toFixed(2)
        return total
    }
}