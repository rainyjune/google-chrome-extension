// Play the audio automatically when hover the mouse on the play button
document.addEventListener('mousemove', function(e) {
  var target = e.target;
  if (target.tagName.toLowerCase() === 'svg') {
    target.parentNode.parentNode.click();
  }
});