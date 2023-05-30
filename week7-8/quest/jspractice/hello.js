// Quest6
console.log('Hello World');

// Quest7 変数を使う事ができる
const num_1 = 5;
const num_2 = 3;

let sum = num_1 + num_2;
let difference = num_1 - num_2;

console.log(sum + difference);

// Quest8 関数を使うことができる
function greet(name) {
  // 関数を完成させてください
  console.log(`Hello,${name}!`);
}

greet("Hikaru");

// Quest9 条件分岐
  // 温度チェッカー
function checkTemperature(t) {
  if (t >= 30) {
    console.log("Hot")
  } else if (t < 30 && t >= 15) {
    console.log("Warm")
  } else {
    console.log("Cold")
  }
}

checkTemperature(30)
// checkTemperature(15)
// checkTemperature(14)

  // 偶数チェッカー
function checkOddOrEven(n) {
  if (n % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkOddOrEven(2)
// checkOddOrEven(3)

// Quest10 ループ
// 奇数を含むか判定
function hasOdd(numbers) {
  let result = false; // 初期値として false を設定

  numbers.forEach(function (number) {
    if (number % 2 !== 0) {
      result = true; // 奇数が見つかった場合、result を true に更新
    }
  });

  return result;
}

console.log(hasOdd([1, 2, 3, 4, 5]))

// 奇数の抽出
function odd(numbers) {
  return numbers.filter(function (num) {
    return num % 2 !== 0;
  });
}

console.log(odd([1, 2, 3, 4, 5]))

// ２乗の計算
function square(numbers) {
  return numbers.map(function(num){
    return num * num
  });
}

console.log(square([1, 2, 3, 4, 5]))
