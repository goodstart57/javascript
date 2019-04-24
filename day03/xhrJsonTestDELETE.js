// axios (javascript version of python requests)

const URL = 'https://jsonplaceholder.typicode.com/'
const XHR = new XMLHttpRequest()

// 요청 준비하기
// XHR.open(<어떤 HTTP Method를 쓸지>, <URL>)
XHR.open('DELETE', URL+'posts/1')

// POST 요청을 위한 Header 작성
// XHR.setRequestHeader(<key>, <value>)
XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

// 요청 보내기 send (data 전송)
// XHR.send(json)
// XHR.send(JSON.stringify(object))
XHR.send()

// 예외사항등을 이벤트 리스너로 처리하기
XHR.addEventListener('load', e => {
    // e.target.response : response가 저장되어있는 위치
    const result = e.target.response
    console.log(result)

    const jsObject = JSON.parse(result)
    console.log(jsObject)
    // {id: 1, userId: 1, title: "타이틀", body: "내용"}
})
