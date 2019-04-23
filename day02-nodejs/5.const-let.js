// 5.const-let.js
// let => 재할당이 가능한, 변경 가능한 함수
// const => 재할당이 불가능한, 변경 불가능한 함수

/**
 * scope
 * 
 * let, const : 블럭 단위
 * var : 함수 단위
 */
let count = 0
count = count + 1

const name = 'jason'
console.log(name)
// jason

// name = 'jesse'
// console.log(name)
// TypeError: Assignment to constant variable.

if (ture) {
    let testLet = true;
    var testVar = true;
}
console.log(testVar)
// true
console.log(testLet)
// ReferenceError: ture is not defined