
console.log('content go')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}

var t_links = document.getElementsByTagName('a');

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    //e.target.title = "X is "+x+" and Y is " +y;
    elementMouseIsOver = document.elementFromPoint(x,y);

//console.log(elementMouseIsOver);
};





document.addEventListener('mouseover', function(event) {
    var hoveredl = event.target; // hovered element
    if (hoveredl.tagName !== 'A') { return; } // ignore non links
    console.log(hoveredl.href); 
});





