const dooly = document.querySelector('#dooly')
// console.log(dooly)

dooly.addEventListener("click", (e) => {
    console.log(e)
});

document.addEventListener('keydown', function(e){
    /**
     * event의 code보다 key를 써서 전세계 키보드에 맞출 수 있다.
     * http://keycode.info/
     */
    console.log(e.key) 
    if (e.key === "Space") {
        dooly.style.marginBottom = "300%";
    } else if (e.key === "ArrowUp") {
        dooly.style.marginBottom = "100%";
    } else if (e.key === "ArrowDown") {
        dooly.style.marginBottom = "0";
    }
});