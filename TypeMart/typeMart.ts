import products from './products';

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '575 Broadway, New York City, New York';

//find a product inside products that matches the
// string stored in the productName variable.
const product = products.filter(product => product.name === productName)[0];
console.log(product)

//if the .preOrder property is true on the product

if (product.preOrder === "true") {
  console.log("The order is on the way")
}

//free shipping over $25
if (Number(product.price) > 25) {
  shipping = 0;
  console.log("Free shipping")
} else {
  shipping = 5;
  console.log("Your shipping price is $5!")
}


//pay extra tax outside of New York
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.5;
}

// calculate the total
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;


console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);