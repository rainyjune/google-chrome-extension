const playButtons = document.querySelectorAll(".daud");

playButtons.forEach((button) => {

  button.addEventListener("mouseenter", (event) => {
    const target = event.target;
    const audio = target.querySelector("audio");
    console.log("mouseenter", target);
    target.playtimer = setTimeout(() => {
      if (audio) {
        audio.load();
        const promise = audio.play();
        if (promise !== undefined) {
          promise.then(_ => {
            // played
          }).catch(error => {
            console.warn("Exception detected why trying to play the audio");
          });
        }
      }
    }, 500);
  });

  button.addEventListener("mouseleave", (event) => {
    const target = event.target;
    console.log("mouseleave,", target)
    if (target.playtimer) {
      clearTimeout(target.playtimer);
      target.playtimer = null;
    }
  });

});