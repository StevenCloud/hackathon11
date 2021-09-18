console.log('content go')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}

var t_links = document.getElementsByTagName('a');

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    e.target.title = "X is "+x+" and Y is " +y;
};

var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

document.addEventListener('mousemove', function (m) {
    let srcElement = m.srcElement
}

