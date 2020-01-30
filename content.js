let addControls = function() {
  var vids = document.getElementsByTagName("video");
  if(typeof vids !== 'undefined') {
    for (let v of vids) {
      v.setAttribute("controls", true);
      //
      // since everything is draggable on the page 
      // the video slider can't be use properly
      // however I didn't find a way to fix this
      //
      //v.setAttribute("draggable", false)
      //v.addEventListener('mousedown', function() { this.parentNode.parentNode.setAttribute("draggable", false); });
      //v.addEventListener('mouseup', function() { this.parentNode.parentNode.setAttribute("draggable", true); });
      //v.setAttribute("ondragstart", "return false;")//=function(){return false}
    }
  }
};

let removeSoundControl = function(){
 // there is already a sound control on the default html5 controls so no point in having two
 var sounds = document.querySelectorAll(".sound-toggle");
  if(typeof sounds !== 'undefined'){
    for (let s of sounds) {
      s.setAttribute("hidden", true);
    }
  }
}

let removeVideoTimeTag = function(){
  // there is already a time display on the default html5 controls so no point in having two
  var elems = document.querySelectorAll(".length");
   if(typeof elems !== 'undefined'){
     for (let e of elems) {
       e.setAttribute("hidden", true);
     }
   }
 }

document.addEventListener("scroll", function(event) {
  addControls();
  removeSoundControl();
  removeVideoTimeTag();
});
