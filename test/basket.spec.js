const { assertEquals } = require('../testing-framework');
const Basket = require('../src/basket');
// const Item = require("../src/basket");

let expected;
let actual;
let result;
let basket;
let item;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - checkID of added item in basket`);

// Arrange
basket = new Basket();

item = { id: `item1` };
expected = true;

// Act
basket.add(item);
actual = basket.basketItems.includes(item);
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Item ID in basket: ${result}`);

// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - is it working in a new basket?
console.log(`============================`);
console.log(`Test 2 - checkID of added item in new basket`);

// Arrange
const basket1 = new Basket();

item = { id: `item2` };
expected = true;

// Act
basket1.add(item);
actual = basket1.basketItems.includes(item);
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Item ID in basket: ${result}`);

console.log(basket1.basketItems);


// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 - was removed from the basket?
console.log(`============================`);
console.log(`Test 3 - confirm item removed`);

// Arrange
basket = new Basket();

item = { id: `item3` };
expected = 0;

// Act
basket.add(item);
basket.removeItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: removed item from basket: ${result}`);
console.log(basket.basketItems);


