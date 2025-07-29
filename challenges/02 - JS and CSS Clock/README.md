# 02 - JS and CSS Clock

![](js-css-clock.mov)

**Date**: 2025/07/28

## Overview

An animated analog clock that updates in real time by calculating rotation angles for hour, minute, and second hands based on the current time.

## Notes

-   Retrieve current time elements using **New Date** constructor and **getSeconds()**, **getMinutes()**, **getHours()**
-   Offset each rotation by 90° to align with initial CSS setup:
    ```js
    ex.secondHand.style.transform = `rotate(${secDeg + 90}deg)`;
    ```
-   Alternative approach for calculating the degrees:

    ```js
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    ```

-   Prevent animation glitch when second hand resets to 0 using if statement:
    ```js
    if (seconds === 0) {
        hands.forEach((hand) => (hand.style.transition = "none"));
    } else {
        hands.forEach(
            (hand) => (hand.style.transition = "all 0.05s ease-in-out")
        );
    }
    ```
