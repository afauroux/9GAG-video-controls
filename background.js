// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action"
    });
  });
});

chrome.tabs.onUpdated.addListener(function(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    if(activeTab.url.includes('9gag')){
      startBackTimer()
    }else{
      stopBackTimer()
    }
  });
})
let timer
let startBackTimer = function(){
  if(typeof timer !== 'undefined')return
  timer = setInterval(()=>{
    chrome.storage.sync.get(['time'], function(result) {
      let time=0
      if(typeof result.time !== 'undefined'){
          time=result.time
      } 
      time++
      chrome.storage.sync.set({'time': time}, function() {})
    })
  }, 1000)
}
let stopBackTimer = function(){
  if(timer){
    clearInterval(timer)
    timer=undefined
  }
}