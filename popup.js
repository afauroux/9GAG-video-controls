document.getElementById('btn-restart').addEventListener('click', function(){
    restartTimer()
})
document.getElementById('link9gag').addEventListener('click', function(){
    goTo9gag();
})

let updateTimeDisplay = function(time){
    let counter=document.querySelector('#timecounter')
    if(typeof counter !== 'undefined') counter.textContent = time
}
let checkTimerState=function(){
    chrome.storage.sync.get(['time'],(result)=>{
        console.log('time is ', result.time)
        if(typeof result.time !== 'undefined'){
            updateTimeDisplay(result.time)
        }
    })
}
let restartTimer=function(){
    chrome.storage.sync.set({'time':0},()=>{
        console.log('reset timer')
    })
}
let goTo9gag = function(){
    chrome.tabs.query({url:["*://*.9gag.com/", "*://*.9gag.com/*"], windowId:chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
      console.log(tabs)
      if(tabs.length == 0){
        chrome.tabs.create({url:"https://9gag.com"},function(){})
      }else{
        chrome.tabs.highlight({tabs:tabs.map(t=>t.index)}, function(){})
      }
    })
}
setInterval(checkTimerState, 1000);

    







  