"use strict";

// async & awiat
// clear style of using promise

// 1. async
async function fetchUser() {
  // do network request in 10 seconds...
  // Promise version
  // return new Promise((resolve, reject) => {
  //   resolve("eliie");
  // });

  // async version
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await : async 키워드가 붙은 함수 안에서만 사용 가능한 키워드
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}
// Promise getBanana
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// callback hell
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// 일반적인 async 함수
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

// 3. 병렬 처리
// Promise로 만들어주게되면 바로 실행가능한 코드가 되어버린다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 4. 유용한 Promise
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log);

// 배열에 전달된 Promise 중에서 가장 먼저 값을 리턴하는 Promise 만 전달 되어진다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
