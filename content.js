//alert("Hello from your Chrome extension!");

let addControls = function() {
  var vids = document.getElementsByTagName("video");
  console.log(vids);
  if (vids != undefined) {
    //console.log(vids);
    for (let v of vids) {
      v.setAttribute("controls", true);
      //console.log(vids.item(i).src);
    }
  }
};

// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    addControls();
  }
});

document.addEventListener("scroll", function(event) {
  addControls();
});
