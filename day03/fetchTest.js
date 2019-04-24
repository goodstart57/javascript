const URL = "https://jsonplaceholder.typicode.com/"

// fetch(<URL>)
// const response = fetch(URL+'posts/1')
// console.log(response)
// Promise

const res = fetch(URL+'posts/1').then(response => {
    // console.log(res)
    // Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts/1", redirected: false, status: 200, ok: true, …}
    return response.json()
})

res.then(obj => {
    console.log(obj)
})

// 위 두 줄을 줄이면

fetch(URL+'posts/1')
    .then(response => response.json())
    .then(obj => console.log(obj))


