
const apiUrl = "https://api.quotable.io/random";
const new_Quote = document.getElementById('newquote');
const author = document.getElementById('author');


async function quoteGenerate(url){
    const response = await fetch(url);
    var data = await response.json();
    new_Quote.innerHTML = data.content;
    author.innerHTML = data.content;
    console.log(data);
}
// quoteGenerate(apiUrl)
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ new_Quote.innerHTML+"----by" + author.innerHTML,"Tweet window","width=600, height=300");
}