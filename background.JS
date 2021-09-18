let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

//chrome.browserAction.onClicked.addListener(function(tab) {
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)){
//            var activeTab = tabs[0];
//            chrome.tbs.sendMessage(activeTab.id, {'message': 'clicked_browser'})
//    });
//    
//    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//    
//    });    