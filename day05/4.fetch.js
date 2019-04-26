const URL = 'https://koreanjson.com/posts/1'

fetch(URL)
    .then((response) => response.json())
    .then((post) => console.log(post))
    .catch((error) => console.log(error))


const getPost1 = async (URL) => {
    const response = await fetch(URL)
    const post = response.json()
    console.log(post)
}

getPost1(URL)
// Promise {<resolved>: {…}}

const getPost2 = async (URL) => {
    const response = await fetch(URL)
    const post = await response.json()
    console.log(post)
}

getPost2(URL)
// object




// const URL = 'https://koreanjson.com/posts/1'

// // fetch(URL)
// //     .then((response) => response.json())
// //     .then((post) => console.log(post))
// //     .catch((error) => console.log(error))


// const getPosts = async () => {
//     const response = await new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('hihihihihihi')
//             resolve('resolved')
//     }, 5000)
//     })
//     console.log(response)

//     const hello = "hello"
//     console.log(hello)
// }

// getPosts()

// /**
//  * resolve를 안쓰고 하니까 hello가 출력되지 않았습니다.
//  * resolve를 만나지 않으면 에러가 발생하나요
//  * 
//  * +
//  * 
//  * 
//  * 
//  */