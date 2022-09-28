const { assertEquals } = require("../testing-framework");
const Basket = require("../src/basket");
const Item = require("../src/basket");

let expected;
let actual;
let result;
let basket;
let item;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - add puts something into the basket`);
console.log(`Test 2 - checkID of added item in basket`);

// Arrange
basket = new Basket();
item = new Item("item1");
expected = item;

// Act
basket.add("item1");

actual = Basket.basketItems.find(basketItemsElement);
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Item ID in basket: ${result}`);

// Clean up
// basket = null;
// item = null;
// expected = undefined;
// actual = undefined;
// result = undefined;

const basket1 = new Basket();
const item1 = new Item();
// const basket2 = new Basket();

// basket1.add({ id: `item 2 in basket 1` });

// console.log(basket1.basketItems);

// basket2.add({ id: `item 1 in basket 2`});
