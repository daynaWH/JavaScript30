# 05 - Flex Panel Gallery

**Date**: 2025/08/06

## Overview

An interactive image gallery using Flexbox and JavaScript transitions. Clicking on a panel expands it using smooth flex-based animations and reveals its inner text.

## Notes

-   Apply `flex: 5` instead of `flex: auto` on `.panel.open` for an enhanced animation by taking up more space.
-   Add `transitionend` event to only trigger class changes (.toggled) after flex-grow finishes animating:

    ```js
    panel.addEventListener("transitionend", function (e) {
        if (e.propertyName !== "flex-grow") return;
        this.classList.toggle("toggled");
    });
    ```

    Alternatively, for example:

    ```js
    function addToggle(e) {
        if (e.propertyName !== "flex") return;
        this.classList.toggle("toggled");
    }

    panel.addEventListener("transitionend", addToggle);
    ```

    -   Without `transitionend`, text would animate immediately on click, resulting in less polished transitions. Demo:
        without transitionend, only click event:

        with transitionend:
