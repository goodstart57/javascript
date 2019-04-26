// 1.callback.js

const orderCoffee = (order, callBack) => {
    setTimeout(() =>{
        callBack(order)
    }, 1000);
}

orderCoffee('아아', (coffee) => {
    console.log(coffee)
});