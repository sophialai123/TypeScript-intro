"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "fanny pack";
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '575 Broadway, New York City, New York';
//find a product inside products that matches the
// string stored in the productName variable.
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
console.log(product);
//if the .preOrder property is true on the product
if (product.preOrder === "true") {
    console.log("The order is on the way");
}
//free shipping over $25
if (Number(product.price) > 25) {
    shipping = 0;
    console.log("Free shipping");
}
else {
    shipping = 5;
    console.log("Your shipping price is $5!");
}
//pay extra tax outside of New York
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.5;
}
// calculate the total
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
