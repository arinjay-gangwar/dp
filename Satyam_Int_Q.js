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
  // Group by Category

  const groups = {};

  products.forEach((p) => {
    // console.log(p);
    if (!groups[p.category]) {
      groups[p.category] = [];
    }
    groups[p.category].push(p);
  });

  // console.log(groups);

  const result = {};

  for (const category in groups) {
    const items = groups[category];
    console.log(items);
    const total = items.reduce((sum, i) => sum + i.price, 0);
    // console.log(total);
    const average = Number((total / items.length).toFixed(2));
    // console.log(average);
    const topRated = items.reduce((prev, cur) =>
      prev.rating >= cur.rating ? prev : cur
    );
    // console.log(topRated);
    const productNamesSortedByPrice = [...items]
      .sort((a, b) => a.price - b.price)
      .map((i) => i.name);
    // console.log(productNamesSortedByPrice);

    result[category] = {
      total,
      average,
      topRated: { name: topRated.name, rating: topRated.rating },
      products: productNamesSortedByPrice,
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
