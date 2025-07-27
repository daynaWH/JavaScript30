// When a key is pressed, play the corresponding audio and add a "playing" class to the key element
window.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    // If the audio element does not exist, return
    if (!audio) return;

    keyElement.classList.add("playing");
    audio.currentTime = 0; // Rewind to the start
    audio.play();
});

// When the key is released, remove the "playing" class from the key element

//--- Initial Solution:
// window.addEventListener("keyup", function (e) {
//     const keyCode = e.keyCode;
//     const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

//     keyElement.classList.remove("playing");
// });

//--- Alternative Solution:
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", function (e) {
        // If the transitioned property is not "transform", return
        if (e.propertyName !== "transform") return;

        // Remove the "playing" class from the key element
        this.classList.remove("playing");
    });
});
