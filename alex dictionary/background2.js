console.log('background ok');

chrome.runtime.onMessage.addListener(message);

window.word = "test"
function message(request, sender, response) {
    console.log(request);
    window.word = request.text;
}