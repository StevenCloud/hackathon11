
setup(); // initializes function

function setup(){
    // This function creates the url to search for the highlighted word, sends the request to dictionaryapi.dev, 
    // and receives information related to the word as a string. It then sends the word information as
    // an object to the backend.

    console.log('setup ok');

    let backpage = chrome.extension.getBackgroundPage();
    let word = backpage.word; // grabs selected word from background2.js

    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    url += word
   
    var servertext = ''
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // checks to see if information has been received
            servertxt = xhttp.responseText;
            message = {
                text:  xhttp.responseText,
                id: "dictionary_raw_info", // tags message with useful identifier
            }
            chrome.runtime.sendMessage(message) // sends message to backend 
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send(); // sends request to dictionaryapi.dev
    
}

chrome.runtime.onMessage.addListener(messagefinal); // activates when raw dictionary api info is parsed

function messagefinal(request, sender, response) { // this sets up the word, definition, and audio on our popup
    if (request.id = 'def_ready') {
        document.getElementById('edit_this').innerHTML = request.text;
        document.getElementById('Word_edit').innerHTML = request.word;
        console.log(request.text);
        
        document.getElementById('button').addEventListener('click',play_audio);
        function play_audio() {
            var audio = new Audio(request.audio);
            audio.play();
        }
    }
}
