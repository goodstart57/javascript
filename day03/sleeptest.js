// 

function rest() {
    console.log("쉬는 시간 3초 전")
    // setTimeout(<function>, <time:millisecond>)
    setTimeout(()=>{console.log("쉬는 시간 이에용")}, 3000)
    console.log("쉬는 시간 끝")
}

rest()
console.log("???")