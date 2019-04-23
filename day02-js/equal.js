// 성인 판독기

const age = prompt("나이를 말해줘")

if (age > 30) {
    alert12("외식먹네")
} else if (age > 20) {
    alert("학식먹네")
} else if (age > 8) {
    alert("급식먹네")
} else {
    alert("이유식이네")
}



/* 
 * type coercion == implicit coercion == implicit type casting
 * 알아서 형변환시켜서 비교한다.
 * 이런 일이 등호 비교할 때에도 일어난다 (==)
 * https://dorey.github.io/JavaScript-Equality-Table/
 * '=='에 비해 '==='은 정확히 같은 것만 true를 반환하기 때문에
 * edge case가 일어나지 않는다.
 */