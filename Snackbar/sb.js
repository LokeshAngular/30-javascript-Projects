const toastbox = document.getElementById('toastBox')
let success = `<i class="fa-solid fa-circle-check"></i> Sucessfully submitted`;
let error = `<i class="fa-solid fa-circle-xmark"></i> pleasefix the error!`;
let invalid = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input check again`;

function showSnackbar(msg) {
    const toast = document.createElement('div');
    toast.innerHTML = msg
    toast.classList.add('toast');
    toastbox.appendChild(toast);
    if (msg.includes('error')) {
        toast.classList.add('error');
    } 
     if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}