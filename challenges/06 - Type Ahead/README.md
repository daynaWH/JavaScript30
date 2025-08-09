# 06 - Type Ahead


https://github.com/user-attachments/assets/2ae4d3e0-2f13-4aa2-be1b-5d1381d4f394


**Date**: 2025/08/08

## Overview

A dynamic, real-time search feature that filters and displays city and state matches as the user types. Utilizes the Fetch API to retrieve a list of U.S. cities and states, then filters/displays suggestions.

## Notes

-   Fetch data from a remote `.json` endpoint containing city and state information:

    ```js
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => cities.push(...data));
    ```

    -   `fetch()` returns a Promise that resolves to a Response object.
    -   `.json()` parses the response into a JavaScript array of objects.

-   Use `.filter()` + dynamic RegExp to match input with city or state names (case-insensitive):

    ```js
    function findMatches(wordToMatch, cities) {
        return cities.filter((place) => {
            const regex = new RegExp(wordToMatch, "gi");
            return place.city.match(regex) || place.state.match(regex);
        });
    }
    ```

-   `change` event only fires upon clicking outside => add an additional `keyup` event for instant feedback as the user types:

    ```js
    searchInput.addEventListener("change", displayMatches);
    searchInput.addEventListener("keyup", displayMatches);
    ```
