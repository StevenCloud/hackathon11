console.log('content go')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}

var t_links = document.getElementsByTagName('a');


/*
function sleep(milliseconds){
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
*/
/*
document.onmousemove = function coordinates(e){
    var x = e.pageX;
    var y = e.pageY;

    var x_change = e.movementX;
    var y_change = e.movementY;
*/
    /*
    if(x_prime == x && y_prime == y)
    {
        e.target.title = "X is"+x+" and Y is " +y;
        elementMouseIsOver = document.elementFromPoint(x,y);
    }
    */

function coordinates(e){
    var x = e.pageX;
}
console.log(x);
//console.log(elementMouseIsOver);
//};



var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

//document.getElementsByTagName("a").addEventListener('focus', onclick1);


