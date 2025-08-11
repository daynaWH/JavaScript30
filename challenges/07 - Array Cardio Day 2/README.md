# 07 - Array Cardio Day 2

**Date**: 2025/08/10

## Overview

A series of JavaScript exercises focused on practicing the following array methods: .some(), .every(), .find(), and .findIndex().

## Notes

-   **some()** and **every()**

    -   Used to determine whether at least one person or everyone in the people array is 19 or older:

    ```js
    const currentYear = new Date().getFullYear();
    const ages = people.map((person) => currentYear - person.year);
    const isOlderThan19 = (age) => age >= 19;

    ages.some(isOlderThan19);
    ages.every(isOlderThan19);
    ```

    -   Alternative, more concise approach:

        ```js
        const isOlderThan19 = people.some((person) => {
            const currentYear = new Date().getFullYear();
            return currentYear - person.year >= 19;
        });
        ```

-   **find()** and **findIndex()**

    -   Used to search for a specific element in an array and its index:

    ```js
    const targetComment = comments.find((comment) => comment.id === 823423); // the target comment object

    const targetIndex = comments.findIndex((comment) => comment.id === 823423); // the target comment index
    ```

-   Removing the target item from the array using targetIndex:

    1. Use `.splice()`:

    ```js
    comments.splice(targetIndex, 1);
    ```

    2. Or, create a new array using `.slice()`:

    ```js
    const newComments = [
        ...comments.slice(0, targetIndex),
        ...comments.slice(targetIndex + 1),
    ];
    ```
