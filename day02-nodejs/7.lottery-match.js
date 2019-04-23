/**
 * 7.lottery-match.js
 * 
 * 랜덤으로 생성한 6개의 숫자가
 * luckyNumbers와 얼마나 매칭하는지 카운트를 반환하는 함수
 */

var _ = require('lodash')

const luckNumbers = [29, 32, 44, 24, 2, 41];
const numbers = _.range(1, 46);
const myNumbers = _.sampleSize(numbers, 6);
const match = () => {
    let matchedNumbers = [];
    for (luckNumber of luckNumbers) {
        if (myNumbers.includes(luckNumber)) {
            matchedNumbers.push(luckNumber)
        }
    }
    return matchedNumbers
}

const matchedNumbers = match()
console.log(`${matchedNumbers.length}/${luckNumbers.length}`)
