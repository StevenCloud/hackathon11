console.log('ready to go!');

window.addEventListener('mouseup', function mou_up() { //Creates listener that assigns highlighed text to an id when mouse is released
    let selected_text = window.getSelection().toString().trim();
    if (selected_text.length > 0) {
        let msg = {
            text: selected_text,
            id: 'selected_word'
        };
        chrome.runtime.sendMessage(msg)
    };
});
