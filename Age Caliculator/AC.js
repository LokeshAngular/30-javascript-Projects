const userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById('result');

// function caliculator() {
//     // date of birth user given
//     const birthDate = new Date(userInput.value);
//     const d1 = birthDate.getDate();
//     const m1= birthDate.getMonth() + 1;
//     const y1 = birthDate.getFullYear();

//     // today date
//     const todayDate = new Date();
//     const d2 = todayDate.getDate();
//     const m2 = todayDate.getMonth();
//     const y2 = todayDate.getFullYear();

//    // for result storing days months years 
//     let d3,m3,y3;
//     y3 = y2-y1
    
//     if(m2 >= m1){
//         m3 = m2-m1
//     }
//     else{
//         y3--;
//         m3 = 12 + m2-m1;
//     }

//     if(d2 >= d1){
//         d3 = d2-d1
//     }else{
//         m3--;
//         d3 = getDaysInMontnth(y1,m1);
//     }

//     if(m3 < 0){
//         m3 = 11;
//         y3--;
//     }
//     console.log(y3+"years"+ m3 +"months"+d3 +"days");
//     result.innerHTML = `You are <span>${y3}</span> Years <span>${m3}</span> Months <span>${d3}</span> Days` 
 
// }
// function getDaysInMontnth(year,month){
//     return new Date(year,month,0).getDate();
// }

//=====================another type===========//
function caliculator(){
    const birthDate = new Date(userInput.value);
    const currentDate = new Date();
    const newDate = new Date(currentDate - birthDate);

    const years = newDate.getFullYear()-1970;
    const months = newDate.getMonth();
    const days = newDate.getDate()-1;

    result.innerHTML = `You are <span>${years}</span> Years <span>${months}</span> Months <span>${days}</span> Days`
}

