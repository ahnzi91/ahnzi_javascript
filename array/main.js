"use strict";

// Array

// 1. Declarartion
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits); // ["🍎", "🍌"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined

// 배열의 제일 마지막에 있는 아이템을 찾을 때
console.log(fruits[fruits.length - 1]); // 총 길이의 -1을 하게 되면 마지막 인덱스를 가져올 수 있다.

console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit); // 🍎, 🍌
}

console.clear();

// c. forEach
// forEach는 callback 함수를 받아온다.
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index);
});

// 이름이 없는 함수, 즉 anonymous function은 화살표 함수(arrow function)로 사용 가능
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

console.clear();

// 그리고 한 줄만 있는 경우에는 arrow function에서는 괄호도 생략 가능.
fruits.forEach((fruit) => console.log(fruit));

console.clear();

// 4. Add, Delete, Copy
// a. Add an item to the end : push()
fruits.push("🍓", "🍑");
console.log(fruits); // ['🍎', '🍌', '🍓', '🍑']

// b. Remove an item from the end : pop()
fruits.pop();
console.log(fruits); // ['🍎', '🍌', '🍓']

fruits.pop();
console.log(fruits); // ['🍎', '🍌']

// c. Add an item to the beginning : unshift()
fruits.unshift("🍓", "🍋");
console.log(fruits); // ['🍓', '🍋', '🍎', '🍌']

// d. Remove an item from the beginning : shift()
fruits.shift();
console.log(fruits); // ['🍋', '🍎', '🍌']

fruits.shift();
console.log(fruits); //  ['🍎', '🍌']

// ! Note!
// ! shift와 unshift는 pop과 push보다 느리다.
// ! 배열에 아이템들이 들어 있을 때, 뒤에서부터 push하고 pop하는 것은 빈 공간에 데이터를 추가했다가 삭제했다가 하는 것이기 때문에
// ! 기존 데이터는 변경이 없어서 빠른 operation을 진행할 수 있다.

// ! shift는 첫 번째 데이터를 두 번째로 옮기고 두 번째 데이터를 세 번째로 옮긴 후 첫 번째 배열을 비워놓은 상태로 새로운 데이터를 추가해야 한다.
// ! unshift는 첫 번째 데이터를 지우고 두 번째 데이터를 첫 번재로 옮기고 세 번째 데이터를 두 번째로 옮기는 작업을 해야한다.
// ! 그래서 배열의 길이가 길면 길수록 위의 일들을 반복적으로 수행해야 하기 때문에 pop과 push에 비해 매우 느린 동작이다.

console.clear();

// e. Remove an item by index position : splice()
// 지정된 위치에서 element를 삭제할 수 있다.
fruits.push("🍓", "🍑", "🍋");
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑", "🍋"];

// 인덱스 1부터 나머지 뒤의 모든 데이터를 지워버린다.
// fruits.splice(1);
// console.log(fruits); // ['🍎']

// 인덱스 1만 지운다.
fruits.splice(1, 1);
console.log(fruits); // ['🍎', '🍓', '🍑', '🍋']

// 원하는 데이터를 추가할 수 있다.
// 인덱스 1의 데이터('🍓')를 지우고 그 자리에 "🍏", "🍉" 추가
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits); // ['🍎', '🍏', '🍉', '🍑', '🍋']

console.clear();

// f. Combine two arrays
// concat() 함수를 사용하여 두 array를 합치게 되면 새로운 array를 리턴해준다.
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['🍎', '🍏', '🍉', '🍑', '🍋', '🍐', '🥥']

console.clear();

// 5. Searching
// indexOf : find the index
console.log(fruits); // ['🍎', '🍏', '🍉', '🍑', '🍋']
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.indexOf("🍉")); // 2
console.log(fruits.indexOf("🥥")); // -1 : 배열 안에 해당하는 값이 없으면 -1 출력

// includes
console.log(fruits.includes("🍉")); // true
console.log(fruits.includes("🥥")); // false

console.clear();

// lastIndexOf
console.log(fruits); // ['🍎', '🍏', '🍉', '🍑', '🍋']
fruits.push("🍎");
console.log(fruits); // ['🍎', '🍏', '🍉', '🍑', '🍋', '🍎']
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.lastIndexOf("🍎")); // 5
