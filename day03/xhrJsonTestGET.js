// axios (javascript version of python requests)

const URL = 'https://jsonplaceholder.typicode.com/'
const XHR = new XMLHttpRequest()

// 요청 준비하기
// XHR.open(<어떤 HTTP Method를 쓸지>, <URL>)
XHR.open('GET', URL + 'posts')

// 요청 보내기 send
XHR.send()

// 예외사항등을 이벤트 리스너로 처리하기
XHR.addEventListener('load', function(e){
    // e.target.response : response가 저장되어있는 위치
    const result = e.target.response
    console.log(result)

    const jsObject = JSON.parse(result)
    console.log(jsObject)

    const jsString = JSON.stringify(jsObject)
    console.log(jsString)
})

/**
 * 1. JSON : string (js object 형태와 유사한)
 *      -> object로 변환 (JSON.parse(jsString))
 * 2. Javascript Object : object
 *      -> JSON 파일 (string) (JSON.stringify(jsObject))
 */