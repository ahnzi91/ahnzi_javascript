"use strict";

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// ! 중요 포인트
// ! Object는 Key와 Value의 집합체이다.
// ! object = { key: value };

// ? 1. Literals and properties
// 아래 코드의 단점
// 1. 인자가 많아지게 되면 추가해야 되는 것들이 굉장히 많아진다.
// 2. 관리 포인트가 늘어나게 된다.
// const name = "ellie";
// const age = 4;
// print(name, age);
// function print(name, age) {
//   console.log(name); // ellie
//   console.log(age); // 4
// }

// 위의 단점들을 개선하고자 우리는 Object를 사용한다.
const ellie = {
  name: "ellie",
  age: 20,
};

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(ellie); // eliie, 20

// Object를 만드는 방법 2 가지
const obj1 = {}; // "object literal" syntax
const obj2 = new Object(); // "object constructor" syntax

// Javascript는 Runtime(프로그램이 동작하고 있을 때) 때 타입이 결정되는 언어
ellie.hasJob = true;
console.log(ellie.hasJob); // true

// 삭제도 가능하다.
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// ? 2. Computed properties
// object 안의 있는 데이터에 접근할 때 우리는 .(점 연산자)를 이용하여 접근했다.
console.log(ellie.name); // ellie

// 다른 방법도 존재한다.
// ! key shoud be always string
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob); // true
console.log(ellie["hasJob"]); // true

// computed properties를 사용할 때에는 우리가 정확하게 어떤 key가 필요한지 모를 때
// 즉, Runtime에서 결정 될 때 computed properties를 사용하게 된다.
// 실시간으로 원하는 값을 받아오고 싶을 때 computed properties를 많이 사용한다.

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name"); // ellie
printValue(ellie, "age"); // 20

// ? 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
function makePerson(name, age) {
  return {
    // JavaScript에는 "property value shorthand"라는 기능이 있어서
    // key와 value의 이름이 동일하다면 생략이 가능하다.
    name,
    age,
  };
}
console.log(person4); // { name: 'ellie', age: 30 }

// 4. Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person5 = new Person("dkswlgns", 6);
console.log(person5);

// ? 5. in opertor: property existence check (key in obj)
// obj 안에 key가 있는지 없는지 확인
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("baseball" in ellie); // false
console.log(ellie.baseball); // undefined

// ? 6. for..in vs for..of
// for in
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key); // name age hasJob
}

// for of
// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value); // 1 2 4 5
}

// ? 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
console.clear();
const user = { name: "ellie", age: 20 };
const user2 = user;
// user2.name = "coding";
// console.log(user); // { name: 'coding', age: 20 }

// old way
const user3 = {};
for (let key in user) {
  // 첫 번째 - user3[name] = user["name"] 즉 ellie
  // 두 번째 - user3[age] = user["age"] 즉 20
  user3[key] = user[key];
}
console.clear();
console.log(user3); // { name: 'ellie', age: 20 }

// new way
const user4 = {};
Object.assign(user4, user);
console.log("user4 : ", user4); // user4 :  { name: 'ellie', age: 20 }

// or
const user5 = Object.assign({}, user);
console.log("user5 : ", user5); // user5 :  { name: 'ellie', age: 20 }

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log("mixed : ", mixed); // mixed :  { color: 'blue', size: 'big' }
console.log("color : ", mixed.color); // color : blue
console.log("size : ", mixed.size); // color : big
