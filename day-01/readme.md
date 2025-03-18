# Variables and DataTypes Notes

### 1. **`var`**: Function/global-scoped variable.
```javascript
var age = 30;
age = 35;
```

### 2. **`let`**: Block-scoped variable.
```javascript
let name = "Ajay";
{
  let name = "Raj"; 
}
```

### 3. **`const`**: Block-scoped constant (immutable).
```javascript
const pi = 3.14;
// pi = 3.14159; // Error
```

## **Data Types in JavaScript**

### 1. **Primitive Data Types** (immutable, passed by value)

- **Number**: Integer or float.
```javascript
let count = 42, price = 19.99;
```

- **String**: Text enclosed in quotes.
```javascript
let greeting = "Hello";
```

- **Boolean**: `true` or `false`.
```javascript
let isActive = true;
```

- **Undefined**: Declared but unassigned.
```javascript
let user;
```

- **Null**: No value.
```javascript
let object = null;
```

- **Symbol**: Unique value (ES6).
```javascript
const uniqueId = Symbol('id');
```

- **BigInt**: Large integer value.
```javascript
const bigNumber = 12345678901234567890123456n;
```

### 2. **Non-Primitive Data Types** (mutable, passed by reference)

- **Object**: Key-value pairs.
```javascript
let person = { name: "Alice", greet() { console.log("Hello!"); } };
```

- **Array**: Ordered list of values.
```javascript
let fruits = ["Apple", "Banana"];
```

- **Function**: Reusable code block.
```javascript
function add(a, b) { return a + b; }
```

## **Key Points**
- Variables in JS are dynamically typed.
- Prefer `let` and `const` over `var`.
- Primitives are compared by value; non-primitives by reference.
    - Primitive types (Number, String, Boolean, etc.) are immutable and compared by value.
    - Non-primitive types (Objects, Arrays, Functions) are mutable and compared by reference.






<br><br>

# Operators Notes

### 1. **Types of Operators:**

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`

  ```javascript
  let a = 2, b = 3;
  console.log(a + b); // 5
  ```
  
- **Comparison**: `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`  

  ```javascript
  console.log(a < b); // true
  ```

- **Logical**: `&&`, `||`, `!`  

  ```javascript
  console.log(true && false); // false
  ```

- **Unary**: `++`, `--` (increment, decrement)  

  ```javascript
  console.log(++a); // Increment and log
  ```

- **Assignment**: `=`  

  ```javascript
  let x = 5; // Assigns 5 to x
  ```

- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`  

  ```javascript
  console.log(a & b); // 1 (Bitwise AND)
  ```

### 2. **Operator Precedence & Associativity:**

- Operations are evaluated based on precedence (e.g., `*`, `/` before `+`, `-`).

  ```javascript
  console.log((2 * 4 * 7) / 6 % 2); // 2.66666
  ```

### 3. **Type Conversion & Coercion:**

- **Implicit**: JavaScript auto-converts types (e.g., `1 * "8"`).
  ```javascript
  let demo = 1 * "8"; // 8
  ```

- **Explicit**: Manually convert types using functions like `Number()`.
  ```javascript
  let num1 = "23";
  let realNum1 = Number(num1); // 23
  ```

- **Truthy/Falsy**: Falsy values include `0`, `false`, `""`, `null`, `undefined`, `NaN`.
  ```javascript
  console.log(true + 5); // 6
  ```

### 4. **Special Cases:**

- **NaN**: `NaN == NaN` is `false`.
  ```javascript
  console.log(NaN === NaN); // false
  ```

- **Constructor Functions**: Use `Number()`, `String()`, `Boolean()`, `BigInt()` for explicit conversion.
  ```javascript
  let anotherVariable = Number("1abc");
  console.log(anotherVariable); // NaN
  ```

### **Key Points:**
- **Arithmetic**: Used for basic mathematical operations.
- **Comparison**: For evaluating relational conditions.
- **Logical**: Used to combine boolean conditions.
- **Unary**: Modify a variable's value.
- **Bitwise**: Operate on the binary representation of numbers.
- **Type Conversion**: Implicit or explicit conversion of data types.





<br><br>

# Conditionals Notes

### 1. **Simple If-Else Statement**
A basic `if-else` statement checks a condition and runs different blocks of code based on the result.

```javascript
let age = 22;

if (age >= 18) {
  console.log("You CAN vote!");
} else {
  console.log("You CANNOT vote!");
}
```

### 2. **Ternary Operator**
A shorthand for `if-else`, used for simple conditional assignments.

```javascript
let result = age >= 18 ? "You CAN vote!" : "You CANNOT vote!";
console.log(result);
```

### 3. **If-Else If-Else Statement**
Used for multiple conditions, checking each one sequentially.

```javascript
let weather = "winter";

if (weather === "summer") {
  console.log("You can eat ICE CREAM");
} else if (weather === "winter") {
  console.log("You can have Gulab Jamun");
} else {
  console.log("Better luck next time");
}
```

### 4. **Switch Statement**
Useful for checking one variable against multiple possible values.

```javascript
let rating = 2;

switch (rating) {
  case 1:
    console.log("1 Star Rating");
    break;
  case 2:
    console.log("2 Star Rating");
    break;
  case 3:
    console.log("3 Star Rating");
    break;
  case 4:
    console.log("4 Star Rating");
    break;
  case 5:
    console.log("5 Star Rating");
    break;
  default:
    console.log("You haven't been rated!");
}
```

### Key Points:
- **`if-else`**: For simple conditions.
- **Ternary operator**: A concise, one-line conditional.
- **`else if`**: For multiple conditions.
- **`switch`**: For one variable with multiple possible values.
- **`break`/`return`**: In `switch`, `break` exits a case, and `return` exits a function.





<br><br>

# Iterations Notes

### 1. **For Loop**
```javascript
for (let i = 0; i < 10; i++) { }
```
- **Use**: Executes code a set number of times.

### 2. **While Loop**
```javascript
while (condition) { }
```
- **Use**: Runs while a condition is true.

### 3. **Do-While Loop**
```javascript
do { } while (condition);
```
- **Use**: Executes at least once, then continues while the condition holds.

### 4. **For-In Loop**
```javascript
for (let key in object) { }
```
- **Use**: Loops over object properties (keys).

### 5. **For-Of Loop**
```javascript
for (let value of iterable) { }
```
- **Use**: Loops over iterable values (arrays, strings).

### 6. **forEach Method**
```javascript
array.forEach(item => { })
```
- **Use**: Applies a function to each element of an array.

### Key Differences:
- **For loop**: Best when iterations are known in advance.
- **While loop**: Good for conditional iteration.
- **Do-While loop**: Guarantees at least one iteration.
- **For-In loop**: Iterates over object properties.
- **For-Of loop**: Iterates over iterable objects.
- **forEach loop**: Specifically for arrays, applying functions to each element.