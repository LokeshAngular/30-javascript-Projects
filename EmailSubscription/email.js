const scriptURL = 'https://script.google.com/macros/s/AKfycbyJ7E3ZstdAE2ug_9RYBcEr4IhK41H9Q4ULv9nFcadzyBNW1gKTs-YrqEjboS0iO8tcHA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
 form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success', response);
            msg.innerHTML = "Thank You For Subscribing";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message))
 })

