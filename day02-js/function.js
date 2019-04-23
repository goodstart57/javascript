// 1. function 키워드를 통해 함수를 정의 (호이스팅; 이 파일을 읽을 때 정의)
function sum1(a, b) {
    return a + b
}

// 2. 익명함수를 선언, 변수에 할당 (JS에서 선호)
let sum2 = function(a, b) {
    return a + b
}

// 1, 2 두가지 모두 사용 방식은 똑같다.

// 3. ES6 Arrow Function
// JS에서 =>는 function을 뜻한다.
let sum3 = (a, b) => {
    return a + b
}

let sum4 = (a, b) => a + b

let sum5 = a => a + 2


let menu = ["짜장면", "짬뽕", "쌈밥", "김밥"]

console.log("forLoop")
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i])
}

console.log("forEach")
menu.forEach(function(food) { console.log(food) })

console.log("forEach with Anonymous Function")
menu.forEach(food => console.log(food))
