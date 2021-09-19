let speech = new SpeechSynthesisUtterance();
speech.lang = "en";


voices = window.speechSynthesis.getVoices();
speech.voice = voices[0];
var test = 'easy game'

document.addEventListener("click", () => {
    speech.text = test;
    window.speechSynthesis.speak(speech);
  });