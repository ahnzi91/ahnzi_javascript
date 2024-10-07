"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fullfilled or rejected
// Producer : 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Promise Object
// Consumer : 원하는 데이터를 소비하는 Promise Object

// 1. Promise 만들기
// new Promise((resolve, reject) => {});
// resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백 함수
// reject : 기능을 수행하다가 중간에 문제가 생기면 호출하게 되는 콜백 함수
// ! 중요 : 새로운 Promise가 만들어 질 때 전달한 executor 콜백 함수(resolve, reject)가 바로 실행됩니다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work - 네트워크에서 데이터 받아오는 일, 파일에서 큰 데이터를 읽어오는 일
  // network, read files
  console.log("doing something...");
  setTimeout(() => {
    resolve("ahnzi"); // 성공적으로 네트워크 통신이 완료되었을 때
    // reject(new Error("No network")); // 네트워크 통신이 실패했을 때, new Error(): JavaScript에서 제공하는 Object 중 하나
  }, 2000);
});

// 2. Promise 사용하기
// Consumer : then, catch, finally를 이용해서 값을 받아올 수 있다.
promise
  .then((value) => {
    console.log(value); // 2초 뒤 "ahnzi" 값이 넘어온다.
  })
  .catch((error) => {
    console.log(error); // 에러 발생 시 위의 new Error("No network") 값이 넘어온다. Error: No network
  })
  .finally(() => {
    console.log("finally"); // then, catch 수행 후 무조건 finally는 수행된다.
  });

// 3. Promise 연결하기
// 1초 후에 숫자 1을 전달하는 Promise 코드
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5

// 4. 오류를 잘 처리 하자
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    // setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// getHen() 코드 리팩토링
// 콜백 함수를 전달할 때 받아오는 value를 하나의 함수로 호출하는 경우에는 아래와 같이 표현할 수 있다.
// getHen() //
//   .then(getEgg)
//   .catch((error) => {
//     return "🥖";
//   })
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);

// 5. 콜백 지옥 탈출
// Callback Hell example
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
//         onSuccess(id);
//       } else {
//         onError(new Error("Not Found"));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ellie") {
//         onSuccess({ name: "ellie", role: "admin" });
//       } else {
//         onError(new Error("No Access"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("Enter your ID");
// const password = prompt("Enter your Password");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Promise Power
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
          resolve(id);
        } else {
          reject(new Error("Not Found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("No Access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user)) // Same code : .then(userStorage.getRoles);
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
