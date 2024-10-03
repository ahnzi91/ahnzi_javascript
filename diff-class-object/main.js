"use strict";

// Object-oriented programming
// Class : template
// Object : instance of a Class - 클래스에 실제로 데이터를 넣어서 만드는 것이 object
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype=based inheritance

// 1. Class Declarations - 클래스 선언
class Person {
  // constructor (생성자) - 나중에 object를 만들 때 필요한 데이터를 전달한다.
  constructor(name, age) {
    // fields - 전달된 데이터 : name, age
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// Create Object
const ahnzi = new Person("안지훈", 34);
console.log(ahnzi.name); // 안지훈
console.log(ahnzi.age); // 34
ahnzi.speak(); // 안지훈: hello!

// 2. Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get 키워드를 이용해서 값을 return 합니다.
  //
  get age() {
    return this._age;
  }

  // set 키워드를 이용해서 값을 설정합니다.
  // set은 값을 설정하기 때문에 매개변수로 값을 받아와야 합니다.
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // -1

// 3. Fields (public, private)
class Experiment {
  publicField = 2; // 외부에서 접근이 가능
  #privateField = 0; // 클래스 내부에서만 접근 가능. 클래스 외부에서 접근 불가능.
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(article2.publisher); // undefined
// static은 object마다 할당되어지는 것이 아니라 클래스 자체에서 선언해주어야 한다.
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends 라는 키워드를 이용해서 Shape을 연장한다.
// Retangle 클래스에서 Shape에서 정의한 Fields와 metho를 사용할 수 있다.
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

class Triangle extends Shape {
  // 오버라이딩
  // 부모 클래스에서 필요한 필드 혹은 메소드를 재정의해서 사용할 수 있습니다.
  draw() {
    super.draw();
    console.log("🔺");
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(20, 20, "red");
triangle.draw(); // drawing red color of, 🔺
console.log(triangle.getArea()); // 200

// 6. Class checking : instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 확인하는 키워드
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
