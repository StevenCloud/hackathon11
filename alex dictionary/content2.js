console.log('ready to go!');

window.addEventListener('mouseup', function mou_up() { 
    let selected_text = window.getSelection().toString().trim();
    if (selected_text.length > 0) {
        let msg = {
            text: selected_text,
            id: 'selected_word'
        };
        chrome.runtime.sendMessage(msg)
    };
});
/*
document.addEventListener('mouseover', function(event) {
    var hoveredl = event.target; // hovered element
    if (hoveredl.tagName !== 'A') { return; } // ignore non links
    console.log(hoveredl.href); 
});
*/