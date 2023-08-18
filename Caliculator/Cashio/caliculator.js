// IIFE(Immediatly Invoked Function Expression)
// (function () {
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let equal = document.querySelector('.btn-equal');
//     let deleteno = document.querySelector('.btn-delete');
//     let clear = document.querySelector('.btn-clear');

//     buttons.forEach(function(button) {
//         debugger;
//         button.addEventListener('click', function (e) {
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click',function(e){
//         if(screen.value === ''){
//            screen.value = "";
//         }else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     });

//   clear.addEventListener('click',function(e){
//     screen.value = '';
//   })

// })();

//--------------------------------------------------- caliculator2---------------------------//
// let buttons = document.getElementsByTagName('button');
// console.log(buttons);
// let result = document.getElementById('result');

// for (i = 0; i = buttons.length; i++) {
//     buttons[i].onclick = ((function () {
//         let input = result.innerText;
//         updateDisplay(input);
//     }))();
// }


// function updateDisplay(input) {
//     let currentDiaplay = result.innerText;
//     if (currentDiaplay == "0") {
//         if (input != "C" && input != "DEL" && input != "=") {
//              result.innerText="";
//              result.innerText += input;
//         }
//     }else{
//         if(input == "DEL"){
//             result.innerText = currentDiaplay.substring(0,currentDiaplay);
//             if(result.innerText == ""){
//                 result.innerText = "0";
//             }
//         }
//         if(input == "C"){
//             result.innerText = "0";
//         }
//         if(input != "C" && input != "DEL" && input != "="){
//             result.innerText += input;
//         }
//         if(input == "="){
//             let display = result.innerText
//             result.innerText = eval(display);
//         }
//     }
// }

let display = document.getElementById('result');
let buttons = Array.from(document.getElementsByTagName('button'));
console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'Del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})