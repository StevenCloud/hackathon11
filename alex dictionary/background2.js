console.log('background ok');


chrome.runtime.onMessage.addListener(message);
window.definition = "test";
window.word = "test"
function message(request, sender, response) {
    if (request.id === 'selected_word') {
        console.log(request);
        window.word = request.text;
    }
    if (request.id === 'dictionary_raw_info') {
        console.log(request);
        console.log(request.text);
        console.log(request.text[0]);


    }
}

