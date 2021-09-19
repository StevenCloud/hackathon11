console.log('please work');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("click-this").addEventListener("mouseover", setup);
    
});
/*
function handler(){
    alert('work2?');
}
*/

function setup(){

    let backpage = chrome.extension.getBackgroundPage();
    let word = backpage.word;

    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    url += word
   
    var request1 = new XMLHttpRequest();
    request1.addEventListener("load",reqListener);
    request1.open("GET", url);
    request1.send();
    
    function reqListener(){
        alert(request1.responseText);
    }
    
}