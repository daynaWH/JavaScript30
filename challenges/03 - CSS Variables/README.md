# 03 - CSS Variables

https://github.com/user-attachments/assets/e0094123-0fa2-49f1-9118-fde476448894

**Date**: 2025/07/29

## Overview

An interactive UI that updates CSS variables in real time based on user input. Users can adjust image spacing, blur, and background/font color using range and color input elements. Used JavaScript to retrieve input changes and update CSS variables accordingly.

## Notes

-   Define CSS variables on :root for global access:

    ```css
    :root {
        --base: #ffc600;
        --spacing: 10px;
        --blur: 10px;
    }
    img {
        width: 800px;
        padding: var(--spacing);
        background-color: var(--base);
        filter: blur(var(--blur));
    }
    ```

-   Dynamically retrieve unit suffix from the data attribute **(data-sizing="px")** instead of harcoding it:

    ```js
    const suffix = this.dataset.sizing || "";
    root.style.setProperty(`--${this.name}`, this.value + suffix);
    ```

    is a more DRY approach than:

    ```js
    if (input.name === "spacing" || input.name === "blur") {
        root.style.setProperty(`--${input.name}`, `${input.value}px`);
    } else if (input.name === "base") {
        root.style.setProperty("--base", `${input.value}`);
    }
    ```
