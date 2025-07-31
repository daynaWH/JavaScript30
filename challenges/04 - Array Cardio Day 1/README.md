# 03 - Array Cardio Day 1

**Date**: 2025/07/31

## Overview

A series of JavaScript exercises focused on practicing the following array methods: .filter(), .map(), .sort(), and .reduce().

## Notes

-   **sort()**

    -   Used to sort the inventors object array by years lived:

    ```js
    const yearsLived = inventors.sort(
        (a, b) => b.passed - b.year - (a.passed - a.year)
    );
    ```
    - Alternative approach for better readability
        ```js
        inventors.sort((a, b) => {
            const lastInventor = a.passed - a.year;
            const nextInventor = b.passed - b.year;
            return lastInventor > nextInventor ? -1 : 1;
        });
        ```

    -   Sorting people alphabetically by last name - initial solution:

    ```js
    const lastNameOrder = people.sort((a, b) => (a > b ? 1 : -1));
    ```
    - Issues:
      - Doesn’t actually parse the last names
      - Doesn't account for extra spaces, case sensitivity, sorting by first name when last names are identical
    - A better alternative solution:
        ```js
        const alpha = people.sort((lastOne, nextOne) => {
            const [aLast, aFirst] = lastOne.split(", ");
            const [bLast, bFirst] = nextOne.split(", ");
            return aLast > bLast ? 1 : -1;
        });
        ```

-   **reduce()**
    -   Used to count instances of each item in an array of strings:
    ```js
    const transportation = data.reduce((object, item) => {
        if (!object[item]) {
            object[item] = 0; // If the item doesn't exist, initializit to 0
        }
        object[item]++;
        return object;
    }, {});
    ```
-   DOM + filter

    -   Extract boulevard names from the [Wikipedia category page](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) that contain 'de' anywhere in the name.
    -   The code is meant to be run directly in the browser console, as querySelector and querySelectorAll extract elements directly from the DOM:

    ```js
    const category = document.querySelector(".mw-category");
    const blvds = category.querySelectorAll("a");

    // Convert NodeList to Array
    const blvdsArray = Array.from(blvds);

    const blvdsTarget = blvdsArray
        .map((blvd) => blvd.textContent)
        .filter((blvdName) => blvdName.includes("de"));
    console.log(blvdsTarget);
    ```
