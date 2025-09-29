# Coding Questions

1. **Find Two Sum**

   - Find two distinct elements in an array whose sum equals a target.
   - Return their indices.

2. **Subset Sum**

   - Find a subset of the array whose elements add up to the target.

3. **Check Palindrome (String)**

   - Return `true` if the input string is a palindrome; otherwise, return `false`.

4. **Find Number with Odd Occurrences**

   - Return the number that appears an odd number of times in the array.
   - Assumes exactly one such number; all others appear an even number of times.

5. **Manual String Split**

   - Manually split a string using space as the delimiter (mimics `split(" ")`).

6. **Manual String Reverse**

   - Manually reverse a string (mimics `str.split("").reverse().join("")`).

7. **Maximum Subarray Sum (Size k)**

   - Find the maximum sum of any subarray of size `k` in the array.

8. **Smallest Subarray with Target Sum**

   - Find the length of the smallest subarray with a sum greater than or equal to the target.

9. **Lowest and Second Lowest Distinct Values**

   - Find the lowest and second lowest distinct values from an array of integers.

10. **Longest Word in a Sentence**

    - Find the longest word in a sentence (ignore punctuation).
    - Return the first longest word in case of a tie.

11. **Longest Concatenated String**

    - Find the longest string formed by concatenating `k` consecutive strings from an array.

12. **Longest Substring Without Repeating Characters**

    - Find the length of the longest substring without repeating characters.
    - Optionally, return the actual substring.

13. **Largest and Second Largest Distinct Values**

    - Find the largest and second largest distinct values in an array.

14. **Title Case Conversion**

    - Convert a string to Title Case (capitalize the first letter of each word).
    - Assumes clean input without extra spaces or punctuation.

15. **Check Palindrome (Number)**

    - Return `true` if the number is a palindrome; otherwise, return `false`.

16. **Balanced Index**

    - Return the index where the array is balanced (`left sum == right sum`), or `-1` if not found.
    - The element at the index itself is not included in either sum.

17. **Character Frequency Counter**

    - Return an object containing the count of each character in a string.

18. **Alternate Character Case**

    - Alternate the case of each character in the string (uppercase to lowercase and vice versa).

19. **Check Anagram**

    - Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, accounting for all Unicode characters.

20. **Reverse Word Order**

    - Reverse the order of words in a sentence (not the characters within words).

21. **Remove Duplicates by ID (Objects)**

    - Remove duplicate objects from an array based on their `id` property.

22. **Remove Duplicates from Array**

    - Remove duplicate values from a basic array.

23. **Find 3rd Least Frequent Number**

    - Find the third least frequently occurring number in an array.

24. **Sort Array**

    - Sort an array in both ascending and descending order.
    - Use both built-in and custom sorting logic.

25. **Filter Even Numbers**

    - Return a new array containing only the even numbers.

26. **Find Maximum in Array**

    - Return the maximum value from an array of integers.

27. **Extract Unique Objects**

    - Given an array of objects, return an array of unique objects based on a specified key.
    - Example:
      ```js
      Input: [{ name: "Arinjay" }, { name: "John" }, { name: "Arinjay" }];
      Output: [{ name: "Arinjay" }, { name: "John" }];
      ```

28. **Squared Correspondence**

    - Given two arrays, return `true` if every value in `arr1` has its corresponding squared value in `arr2`.
    - The frequency of values must match.

29. **Merge and Sort Arrays**

    - Merge two sorted arrays and return a single sorted array.

30. **Find Maximum in Deeply Nested Array**

    - Find the maximum number in a deeply nested array.

31. **Check Prime Number**

    - Return `true` if a number is prime; otherwise, return `false`.

32. **Flatten Nested Object**

    - Given a deeply nested object, return a flat object using dot notation for the keys.

33. **Flatten Nested Array**

    - Flatten a nested array into a one-dimensional array.

34. **Fibonacci Series**

    - Return the Fibonacci sequence up to `n` terms in an array.

35. **Factorial of a Number**

    - Find the factorial of a given number.

36. **Unflatten Object**

    - Given a flat object with dot-separated keys, convert it to a nested object.

37. **Max Consecutive 1s**

    - Count the maximum number of consecutive `1`s in a binary array.

38. **Bubble Sort**

    - Implement the Bubble Sort algorithm.

39. **Satyam Interview Question**

    - You are given an array of objects representing products

      ```js
      const products = [
        {
          id: 1,
          name: "Laptop",
          category: "Electronics",
          price: 75000,
          rating: 4.5,
        },
        {
          id: 2,
          name: "Phone",
          category: "Electronics",
          price: 40000,
          rating: 4.2,
        },
        {
          id: 3,
          name: "Shirt",
          category: "Clothing",
          price: 1500,
          rating: 3.9,
        },
        {
          id: 4,
          name: "Shoes",
          category: "Clothing",
          price: 2500,
          rating: 4.1,
        },
        { id: 5, name: "Book", category: "Education", price: 600, rating: 4.8 },
        {
          id: 6,
          name: "Tablet",
          category: "Electronics",
          price: 30000,
          rating: 4.0,
        },
      ];
      ```

      Task:
      Write a function that

      1. Groups products by category.
      2. For each category, calculates:
         - Total price of products
         - Average price
         - Top-rated product (highest rating) with its name and rating
         - Products sorted by price (ascending)
      3. Return the result as an object

      Expected Output:

      ```js
      {
        Electronics: {
        total: 145000,
        average: 48333.33,
        topRated: { name: "Laptop", rating: 4.5 },
        products: ["Tablet", "Phone", "Laptop"]
        },
        Clothing: {
        total: 4000,
        average: 2000,
        topRated: { name: "Shoes", rating: 4.1 },
        products: ["Shirt", "Shoes"]
        },
        Education: {
        total: 600,
        average: 600,
        topRated: { name: "Book", rating: 4.8 },
        products: ["Book"]
        }
      }
      ```
