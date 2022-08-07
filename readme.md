# TypeScript Getting Started

## Installing

`npm install -g typescript`


## [Configuring the compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

`npx tsc`

You can have TypeScript create tsconfig.json with the recommended settings with:

`npx tsc --init`

---
## Type Inferences

TypeScript recognizes JavaScript’s built-in “primitive” data types:
- boolean
- number
- null
- string
- undefined
  
```

 let aged = true;
 let realAge = 0;

 if (aged) {
  realAge = 4 ;
 }

  let dogAge = realAge * 7;
 console.log(`${dogAge} years`);
```
---
## Type Shapes

Because TypeScript knows what types our objects are, it also knows what shapes our objects adhere to. An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

The built-in types in JavaScript each have known properties and methods that always exist. All strings, for example, are known to have a .length property and .toLowerCase() method.

---
## Any
Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.

```
let onOrOff;
 
onOrOff = 1;
onOrOff = false;
```
---
## Variable Type Annotations

Variables can have type annotations (also known as type declarations) added just after their names. We provide a type annotation by appending a variable with a colon (:) and the type (e.g., number, string, or any).

```
let mustBeAString : string;
mustBeAString = 'Catdog';
 
mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
```