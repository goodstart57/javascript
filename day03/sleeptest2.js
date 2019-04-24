// sleeptest2.js
function sleep(sec) {
    let start = Date.now()
    while (Date.now() < start + sec*1000) {}
}

function rest() {
    console.log("쉬는 시간 3초 전")
    sleep(3)
    console.log("쉬는 시간 이에용")
    console.log("쉬는 시간 끝")
}

rest()
console.log("원래대로 된다. 그런데 sleep이 끝날 때 까지 다른 동작을 할 수 없다 ㅠㅠ")