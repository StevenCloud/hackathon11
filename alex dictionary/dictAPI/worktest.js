
setup();

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
    
}

chrome.runtime.onMessage.addListener(messagefinal);

function messagefinal(request, sender, response) {
    if (request.id = 'def_ready') {
        document.getElementById('edit_this').innerHTML = request.text;
        document.getElementById('Word_edit').innerHTML = request.word;
        console.log(request.text);
    }
}
