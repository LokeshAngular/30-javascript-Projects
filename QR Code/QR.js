let qrtext = document.getElementById('qrtext');
let qrimg = document.getElementById('qrimg');
let imgbox = document.getElementById('imgBox');
//---------------------------way1(through function)----------------------------//
//create qrcode;
function generateQR() {
    if (qrtext.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    } else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000)
    }
}
//download qrcode
async function downloadQR(){
    const  resonce = await fetch(qrimg.src);
    const blob = await resonce.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
}

//---------2)anotherway(through Element)----------//
// const downbtn = document.getElementById('Download');
// downbtn.addEventListener("click",async()=>{
//     console.log("hii");
//    const resonce = await fetch(qrimg.src);
//    const blob = await resonce.blob();
//    const downloadLink = document.createElement('a');
//    downloadLink.href = URL.createObjectURL(blob);
//    downloadLink.download = "qrcode.jpg"
//    downloadLink.click()
// })