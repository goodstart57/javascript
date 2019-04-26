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

// async : 함수 정의하는 구문 앞
// await : 비동기 적으로 작동하고 싶은 동작 앞
// 두가지 함수를 이용하여 정의하는 함수를 비동기적으로 동작하도록 정의
const getCoffee = async (order) => {
    try {
        const coffee = await orderCoffee(order)
        console.log(coffee)

        const coffee2 = await orderCoffee('아아')
        console.log(coffee2)
    } catch (error) {
        console.log(error)
    }
}

getCoffee('따아')

