

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("click-this").addEventListener("mouseover", setup);
    
});

function setup(){
    console.log('setup ok');
    let backpage = chrome.extension.getBackgroundPage();
    let word = backpage.word;

    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    url += word
   
    var servertext = ''
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            servertxt = xhttp.responseText;
            message = {
                text:  xhttp.responseText,
                id: "dictionary_raw_info",
            }
            chrome.runtime.sendMessage(message)
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
/*
    var request1 = new XMLHttpRequest();
    request1.addEventListener("load",reqListener);
    request1.open("GET", url);
    request1.send();
    
    window.definition = request1;
    console.log(window.definition);
    function reqListener(){
        alert(request1.responseText);
    }
    */

    
}
