/** You are given an array of objects representing products

```js
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 75000, rating: 4.5 },
  { id: 2, name: "Phone", category: "Electronics", price: 40000, rating: 4.2 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1500, rating: 3.9 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500, rating: 4.1 },
  { id: 5, name: "Book", category: "Education", price: 600, rating: 4.8 },
  { id: 6, name: "Tablet", category: "Electronics", price: 30000, rating: 4.0 }
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
*/

function solve(products) {
  // grouping

  const groups = {};

  products.forEach((p) => {
    if (!groups[p.category]) {
      groups[p.category] = [];
    }
    groups[p.category].push(p);
  });

  // console.log(groups);

  const result = {};

  for (const category in groups) {
    const items = groups[category];

    const total = items.reduce((sum, it) => sum + it.price, 0);
    const average = Number((total / items.length).toFixed(2));
    const topRated = items.reduce((prev, curr) =>
      prev.rating >= curr.rating ? prev : curr
    );
    const productNamesSortedByPrice = items
      .sort((a, b) => a.price - b.price)
      .map((it) => it.name);

    result[category] = {
      total,
      average,
      topRated: { name: topRated.name, rating: topRated.rating },
      product: productNamesSortedByPrice,
    };
  }

  return result;
}

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 75000, rating: 4.5 },
  { id: 2, name: "Phone", category: "Electronics", price: 40000, rating: 4.2 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1500, rating: 3.9 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500, rating: 4.1 },
  { id: 5, name: "Book", category: "Education", price: 600, rating: 4.8 },
  { id: 6, name: "Tablet", category: "Electronics", price: 30000, rating: 4.0 },
];

console.log(solve(products));
