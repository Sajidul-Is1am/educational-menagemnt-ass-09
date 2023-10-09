###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
- B: `ReferenceError: greetign is not defined`
<i>Write your explanation here</i>
    Here ReferenceError error will occur.Because the consoled syntax does not match the variable declared with let.The text greetign is not placed in any variable causing the reference error
</p>
</details>


###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
- C: `"12"`
<i>Write your explanation here</i>
    The reason the output is 12 here is because the first one is an integer and the second one is a string.When going to add the integer and the string, the string and the integer concatenation become 12.
</p>
</details>


###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
- A: `['🍕', '🍫', '🥑', '🍔']`
<i>Write your explanation here</i>
There will be no change in the value of food because the value of food is accessed from the following info object by indexing and then it is changed.
</p>
</details>


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
- B: `Hi there, undefined`
<i>Write your explanation here</i>
Here a function is declared and an argument is passed to the function but whenever the function is returned some string is written in the template string and nothing is passed as parameter due to which the string is output and undefined at the end because the parameter is no Nothing passed
</p>
</details>



###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>
- C: 3
#### Answer: ?
The data of the names variable is counted by foreach and stored in a counter variable
<i>Write your explanation here.And the last item in it was 3 and then the looping stopped so the output remained 3</i>

</p>
</details>