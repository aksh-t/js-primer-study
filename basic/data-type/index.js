"use strict";

console.log(typeof true);
console.log(typeof 42);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
console.log(typeof function () { });

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
// ## 整数リテラル
// ### 10進数
console.log(1);
console.log(10);
console.log(255);

// ### ２進数
console.log(0b1111);
console.log(0b10000000000);

// ### 8進数
console.log(0o644);
console.log(0o777);

// ### これも8進数だけど、strict modeでは例外が発生する
// console.log(0644);
// console.log(0777);

// ### 16進数
console.log(0xFF);
console.log(0xff);
console.log(0x30A2);

// ## 浮動小数点数リテラル
console.log(.123);
console.log(2e8);

// # 文字列（String）
console.log("文字列");
console.log('文字列');
console.log(`文字列`);

console.log('8 o\'clock');
console.log("8 o'clock");

// # ダブルクォートとシングルクォートでは改行を含んだ文字列は定義できない
// console.log("複数行の
// 文字列を
// 入れたい");

console.log("複数行の\n文字列を\n入れたい");

// ## [ES2015] テンプレートリテラル
console.log(`複数行の
文字列を
入れたい`);

const str2 = "文字列";
console.log(`これは${str2}です`);

console.log(`This is \`code\``);

// # nullリテラル
const foo = null;
console.log(foo);

// # undefinedはリテラルではない
// ## undefinedはただのグローバル変数で、undefinedという値を持っているだけ
function fn() {
    var undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"
}
fn();

// # true、false、nullなどはグローバル変数ではなくリテラル
// var null; // => SyntaxError


// また、オブジェクトの中でもよく利用されるものに関してはリテラル表現が用意されている
// - オブジェクト
// - 配列
// - 正規表現



