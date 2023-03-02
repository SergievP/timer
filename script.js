const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left =  pos + "px";
        }
    }
}
// //Функция будет запущена через 0,5сек, независимо от того, 
// //успела ли она все отработать
btn.addEventListener('click', myAnimation);

// function logger () {
//     if( i === 3 ) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }
// //Рекурсивная функция. Будет ждать, пока выполнится скрипт, 
// //выждет 0,5сек запустит её еще раз
// const id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

