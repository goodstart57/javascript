// Gihpy Search Engine
const input = document.querySelector('#js-userinput')
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')

const tv = document.querySelector('#keyword-tv')

const GKEY = 'I103HRXjcUM17BqOd4yeyxwrOx2R5g86'

// 1. 인풋 안의 값을 잡는다.
input.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        const value = input.value
        searchGifAndPush(value)
    }
})

button.addEventListener('click', e => {
    const value = input.value
    searchGifAndPush(value)
})

// 2. Giphy API로 검색한 데이터를 받아서 가공한다.
const searchGifAndPush = (keyword, limit=10) => {
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GKEY}&limit=${limit}`

    
    const GiphyAJAXCall = new XMLHttpRequest()
    GiphyAJAXCall.open('GET', URL)
    GiphyAJAXCall.send()
    GiphyAJAXCall.addEventListener('load', (e) => {
        const rawData = e.target.response
        const parsedData = JSON.parse(rawData)

        resultArea.innerHTML = ''

        for (const data of parsedData.data) {
            console.log(data)
            pushToDOM(data.images.fixed_height.url)
        }
    })
}

// 3. GIF 파일들을 HTML(DOM)에 밀어넣는다.
const pushToDOM = (data) => {
    // resultArea.innerHTML += `<img src="${data}"/>`
    const gif = document.createElement('img') // <img />
    gif.src = data // <img src="`${img}`" />
    resultArea.appendChild(gif)
    // resultArea.insertBefore(gif, resultArea.firstChild)
}

// 4. main carousel 붙이기
let resultAreaChildInd = 0
setInterval(() => {
    if (resultArea.childElementCount === 0) {
        tv.innerHTML = ''
    } else {
        resultAreaChildInd = (resultAreaChildInd + 1) % resultArea.childElementCount
        tv.innerHTML = resultArea.childNodes[resultAreaChildInd].outerHTML
    }
}, 1500)
