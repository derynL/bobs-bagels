"use strict";

const { assertEquals } = require("../testing-framework");

console.log(assertEquals(["sausage"], ["sausage"])); // false, because the arrays are stored at different address memories
