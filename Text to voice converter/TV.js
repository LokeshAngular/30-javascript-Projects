let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
//for getting the voice;
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));
}
//for change the voice;
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})
// convert the text to voice
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})



