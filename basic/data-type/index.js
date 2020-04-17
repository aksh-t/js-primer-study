"use strict";

console.log(typeof true);
console.log(typeof 42);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
console.log(typeof function() {});

// "と"で囲んだ範囲が文字列リテラル
const str = "こんにちは";

// 次の4つのプリミティブ型は、それぞれリテラル表現を持っている
// - 真偽値
// - 数値
// - 文字列
// - null

// # 真偽値
true;
false;

// # 数値
// ## 10進数
console.log(1);
console.log(10);
console.log(255);

// ## ２進数
console.log(0b1111);
console.log(0b10000000000);

// ## 8進数
console.log(0o644);
console.log(0o777);

// ## これも8進数だけど、strict modeでは例外が発生する
// console.log(0644);
// console.log(0777);

// ## 16進数
console.log(0xFF);
console.log(0xff);
console.log(0x30A2)





// また、オブジェクトの中でもよく利用されるものに関してはリテラル表現が用意されている
// - オブジェクト
// - 配列
// - 正規表現



