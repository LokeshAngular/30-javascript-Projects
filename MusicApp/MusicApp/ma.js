const allSongs = [
    {
        name: "Maha Bharath",
        path: "./Playlist/srikrishnaDharmam.mp3",
        img: "./images/krishna.jpg",
        singer: "Sri Krishna"
    },
    {
        name: "Maha Bharath",
        path: "./Playlist/gurudrona.mp3",
        img: "./images/guru.jpg",
        singer: "Drona"
    },
    {
        name: "Janatha_Gyarage",
        path: "./Playlist/Pranaamam my ring tone.mp3",
        img: "./images/NTR.jpg",
        singer: "NandaMuriTharakaRamarao"
    },
    {
        name: "Ramaayanam",
        path: "./Playlist/sanatanam.mp3",
        img: "./images/prabash(Srimrama).jpg",
        singer: "Prabhash"
    }
]

const image = document.querySelector('.song-img');
console.log(image);
const title = document.querySelector('.name');
const singerName = document.querySelector('.singer');
const contolIcon = document.querySelector('#ctrlIcon');
const audio = document.querySelector('audio')
const progress = document.querySelector('#progress')

let song_playing = false;
audio.onloadedmetadata = function(){
     progress.max = audio.duration;
     progress.value = audio.currentTime;
}

function playpause(){
     if (contolIcon.classList.contains("fa-pause")) {
        audio.pause();
        contolIcon.classList.remove("fa-pause");
        contolIcon.classList.add("fa-play");
     }else{
        audio.play();
        contolIcon.classList.add("fa-pause");
        contolIcon.classList.remove("fa-play");
     }
}
//playSong
function playSong() {
    song_playing = true;
    audio.play();
}  
 function puseSong() {
    song_playing = false;
    audio.pause();
}

//loadSong
function loadSong(allSongs) {
    title.textContent = allSongs.name;
    audio.src = allSongs.path;
    image.src = allSongs.img;
    singerName.textContent = allSongs.singer;
}
//currentSong
let i = 0;
//onload select first song from allsongs
loadSong(allSongs[i]);

//previous song
function previousSong(){
    i--;
    if(i < 0){
        i = allSongs.length - 1;
    }
    loadSong(allSongs[i]);
    playSong();
}
// previous.addEventListener("click",previousSong);
//next song
function nextSong(){
    i++;
    if(i > allSongs.length - 1){
        i = 0;
    }
    loadSong(allSongs[i]);
    playSong();
}
// forword.addEventListener("click",nextSong);
if(audio.play()){
    setInterval(() => {
        progress.value = audio.currentTime;
    }, 500);
}

//when ever we wil change in the progressbar at that time Song currenttime also need update 
progress.onchange = function () {
    audio.play();
    audio.currentTime = progress.value;
    contolIcon.classList.add("fa-pause");
    contolIcon.classList.remove("fa-play");
}

