# 05 - Flex Panel Gallery

https://github.com/user-attachments/assets/cb43d9b5-0d58-48c8-8245-6d4d0502ea7b

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
        - without transitionend (only click event) and with transitionend, respecitvely:

https://github.com/user-attachments/assets/e42fa11d-e229-4be2-ac23-d373d9492579


        
https://github.com/user-attachments/assets/556b5911-a32e-4d52-8ae1-e9d7317313e0

