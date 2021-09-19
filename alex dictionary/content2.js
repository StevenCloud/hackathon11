console.log('ready to go!');

window.addEventListener('mouseup', function mou_up() {
    console.log('test1');
    let selected_text = window.getSelection().toString().trim();
    console.log(selected_text);
    if (selected_text.length > 0) {
        let msg = {
            text: selected_text
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