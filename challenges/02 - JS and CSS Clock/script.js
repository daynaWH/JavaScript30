const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

function getTime() {
    // Retrieve the current time
    const currentDate = new Date();
    const sec = currentDate.getSeconds();
    const min = currentDate.getMinutes();
    const hr = currentDate.getHours();

    // Convert current time into degrees
    // 0sec = 0deg, 60sec = 360deg
    // 0min = 0deg, 60min = 360deg + Add a fraction of the second
    // 0hr = 0deg, 12hr = 360deg + Add a fraction of the minute
    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg = hr * 30 + min * 0.5;

    // Apply the degrees to the hands
    // Add 90 degrees to compensate for the initial position
    secondHand.style.transform = `rotate(${secDeg + 90}deg)`;
    minHand.style.transform = `rotate(${minDeg + 90}deg)`;
    hourHand.style.transform = `rotate(${hrDeg + 90}deg)`;

    // Remove transition for the second hand at 0 seconds to prevent jumps
    if (sec === 0) {
        hands.forEach((hand) => {
            hand.style.transition = "none";
        });
    } else {
        hands.forEach((hand) => {
            hand.style.transition = "all 0.05s ease-in-out";
        });
    }
}

setInterval(getTime, 1000);
