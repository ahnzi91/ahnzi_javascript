// 1. Make a string out of an array
// 👉🏻 주어진 Array를 String으로 변환
{
  const fruits = ["apple", "banana", "orange"];
  // join();
  // Adds all the elements of an array separated by the specified separator string.
  // join(separator?: string): string; 👉🏻 separator? : 전달해도 되고 전달하지 않아도 되는 argument
  const result = fruits.join();
  console.log(result); // apple,banana,orange
}

// 2. Make an array out of a string
// 👉🏻 주어진 String을 Array로 변환
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // split();
  // Split a string into substrings using the specified separator and return them as an array.
  // split(separator: string | RegExp, limit?: number): string[];
  const result = fruits.split(",");
  console.log(result); // (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']

  // 만약 두 개의 배열만 전달 받고 싶을 때
  const result2 = fruits.split(",", 2);
  console.log(result2); // (2) ['🍎', ' 🥝']
}

// 3. Make this Array look like this : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]

  // reverse() 함수는 기존 Array 자체의 순서를 바꾸어준다.
  console.log(array); // [5, 4, 3, 2, 1]
}

// 4. Make new Array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice()
  // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  // splice(start: number, deleteCount?: number): T[];
  const result = array.splice(0, 2);
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]

  // splice()는 새로운 배열을 만들지는 않는다. 그러므로 slice()를 사용해야 한다.

  const array2 = [1, 2, 3, 4, 5];
  // slice()
  // Returns a copy of a section of an array.
  // slice(start?: number, end?: number): T[];
  const result2 = array2.slice(2, 5);
  console.log(result2); // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. Find a student with the score 90
{
  // find()
  // Returns the value of the first element in the array where predicate is true, and undefined otherwise
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// 6. Make an Array of enrolled students
{
  // filter()
  // Returns the elements of an array that meet the condition specified in a callback function.
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. Make an Array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{
  // map()
  // Calls a defined callback function on each element of an array, and returns an array that contains the results.
  const result = students.map((student) => student.score);
  console.log(result);
}

console.clear();

// 8. Check if there is a student with the score lower than 50
{
  // some()
  // Determines whether the specified callback function returns true for any element of an array.
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = students.every((student) => student.score < 50);
  console.log(result2); // false
}

console.clear();

// 9. Compute students' average score
{
  // reduce() : 배열의 있는 모든 요소들의 값을 함께 모아놓을 때 사용한다.
  // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length); // 73.8
}

// 10. Make a String containing all the scores
// result should be: "45, 80, 90, 66, 88"
{
  const result = students.map((student) => student.score).join();
  console.log(result); // 45,80,90,66,88

  // 50점 이상인 아이들만 필터링
  const result2 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result2); // 80,90,66,88
}

// Bonus!
// result should be "45, 66, 80, 88, 90"
{
  // sort()
  // Sorts an array in place.
  // This method mutates the array and returns a reference to the same array.
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result); // 45,66,80,88,90
}
