# 01 - JavaScript Drum Kit

![](images/javascript-drum-kit.jpg)

**Date**: 2025/07/26

## Notes

-   If the audio element does not exist, return early to avoid errors:
    -   ```
        if (!audio) return;
        ```
-   Use **currentTime property** to rewind the audio to the start before playing & prevent audio from not playing when pressed multiple times:
    -   ```
        audio.currentTime = 0;
        ```
-   Use the **transitionend** event to automatically remove the "playing" class once the CSS transition ends, instead of `keyup`:
    -   ```
        keys.forEach((key) => {
            key.addEventListener("transitionend", function (e) {
                if (e.propertyName !== "transform") return;
                this.classList.remove("playing");
            });
        });
        ```
