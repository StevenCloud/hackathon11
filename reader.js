//reader

let speech = new SpeechSynthesisUtterance();
speech.lang = "en";


voices = window.speechSynthesis.getVoices();
speech.voice = voices[0];

document.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  });