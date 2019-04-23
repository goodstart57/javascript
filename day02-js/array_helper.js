// const posts = [
//     {id: 1, title: "안녕"},
//     {id: 2, title: "자바스크립트"},
//     {id: 3, title: "브라우저 조작"}, // trailing comma
// ]

// // forEach를 통해 순회를 하여 id가 2번인 post를 찾으세요
// posts.forEach(post => {
//     if (post.id === 2) {
//         console.log(post);
//     };
// });
// // {id: 2, title: "자바스크립트"}


// const images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 50, width: 40 },
// ];

// // images에 들어가 있는 이미지들의 넓이를 구해 area에 넣으세요
// const area = [];

// images.forEach(image => area.push(image.height * image.width));
// console.log(area)

// /* 1. squaredNumbers를 numbers의 요소들을
//  * 제곱을 한 숫자들의 배열로 만든다.
//  * (for를 사용) */
// let numbers = [0, 1, 2, 3, 4, 5, 6];
// let squaredNumbers1 = [];

// numbers.forEach(number => squaredNumbers1.push(number * number));
// console.log(squaredNumbers1)

// /* 2. map() */
// let squaredNumbers2 = [];
// squaredNumbers2 = numbers.map(number => number * number);
// console.log(squaredNumbers2)


// find, filter
let users = [
    {id: 1, username: 'tony'},
    {id: 2, username: 'steve'},
    {id: 3, username: 'thor'},
    {id: 4, username: 'tony'},
]

const tony = users.find(user => user.username === 'tony');
const tonys = users.filter(user => user.username === 'tony');

console.log(tony);
// {id: 1, username: "tony"}
console.log(tonys);
// (2) [{…}, {…}]

// reject
const reject = function(array, func) {
    /**
     * function:: reject(array, func)
     * array의 원소 중 func의 조건식에 해당하지 않는 원소를 반환
     */
    return array.filter(user => !func(user))
};

const notTonys = reject(users, function(user){
    return user.username === 'tony'
});
console.log(notTonys)
// (2) [{…}, {…}]


// every
const everyTony = users.every(user => user.username === 'tony')
console.log(everyTony)
// false

const under5 = users.every(user => user.id < 5)
console.log(under5)
// true


// some
const someTony = users.some(user => user.username === 'tony');
console.log(someTony)
//true

const someMark = users.some(user => user.username === 'mark');
console.log(someMark)
// false
