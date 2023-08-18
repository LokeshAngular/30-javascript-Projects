const accessKey = "Xysgyj192SNMMGVv6UPGc4WR-O6i6dWb81PC0BGwZBE";
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

// Xysgyj192SNMMGVv6UPGc4WR-O6i6dWb81PC0BGwZBE
// yiq313xrtkAUvlWQETreKoVF5geDqfhgN_N8eQ2anTg
//https://api.unsplash.com/search/photos?page=1&query=office&client_id=Xysgyj192SNMMGVv6UPGc4WR-O6i6dWb81PC0BGwZBE
let keyword = "";
let page = 1;
async function searchImages() {
    keyword = searchBox.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    //previous was cleard from browser
    if(page === 1){
        searchResult.innerHTML = "";
    }
    console.log(data);
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
//showmore
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})