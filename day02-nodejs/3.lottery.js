// 3.lottery.js
var _ = require('lodash')
var numbers = _.range(1, 46);
// console.log(numbers)

var picks = _.sampleSize(numbers, 6)
console.log(`행운의 번호는 ${picks}`)
// 행운의 번호는 17,29,36,18,39,22

