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

chrome.tabs.onActivated.addListener(function(){
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
  //alert('start timer')
  timer = setInterval(()=>{
    chrome.storage.sync.get(['time'], function(result) {
      let time=0
      if(typeof result.time !== 'undefined'){
          time=result.time
      } 
      console.log('time is ' + time);
      time++
      chrome.storage.sync.set({'time': time}, function() {
        console.log('time is set to ' + time);
      })
    })
  }, 1000)
}
let stopBackTimer = function(){
  if(timer){
    clearInterval(timer)
    timer=undefined
  }
}