// 3.async-await.js
const orderCoffee = (order) => new Promise((resolve, reject) => {
    /**
     * order가 제대로 들어왔는지 확인
     * 비동기적인 작업
     * resolve : 작업 성공 시
     * reject : 작업 실패 시
     */
    if (order === undefined) {
        // 실패
        reject('손님 주문해주시겠어요?')
    }

    let coffee
    setTimeout(() => {
        // 성공
        coffee = order
        resolve(coffee)
    }, 50)
});

const getCoffee = (order) => {
    const coffee = orderCoffee(order)
    console.log(coffee)
}

getCoffee('따아')