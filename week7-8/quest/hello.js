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

// Quest10 ループ文
function hasOdd(numbers) {
  
}

hasOdd([1, 2, 3, 4, 5])
