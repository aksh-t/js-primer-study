"use strict";

console.log(typeof true);
console.log(typeof 42);
// ES2020 bigint
console.log(typeof 9007199254740992n);
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

// ES2020 BigInt
console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991
console.log(1n); // => 1n
console.log(9007199254740992n); // => 9007199254740992n

// 小数点を付けた場合はSyntax Error
// 1.2n;

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

// # オブジェクトリテラル
const obj = {}; // 中身が空のオブジェクトを作成
console.log(obj);

const obj2 = {
    key: "value"
};
console.log(obj2);

const obj3 = {
    "key": "value"
};
// ドット記法
console.log(obj3.key); // => "value"
// ブラケット記法
console.log(obj3["key"]); // => "value"

// プロパティ名は文字列の"123"
const object = {
    "123": "value"
};
// OK: ブラケット記法では、文字列として書くことができる
console.log(object["123"]); // => "value"
// NG: ドット記法では、数値からはじまる識別子は利用できない
// object.123


// # 配列リテラル
const emptyArray = [];
const array = [1, 2, 3];

const array2 = ["index:0", "index:1", "index:2"];
console.log(array2[0]);
console.log(array2[1]);


// # 正規表現リテラル
const numberRegExp = /\d+/;
console.log(numberRegExp.test(123));


// # プリミティブ型とオブジェクト
// ## ラッパーオブジェクト
const str3 = new String("文字列");
console.log(typeof str3); // => "object"
console.log(str3.length); // => 3

// プリミティブ型
// プリミティブ型の文字列データ
const str4 = "文字列";
// プリミティブ型の文字列は"string"型のデータ
console.log(typeof str4); // => "string"
// プリミティブ型の文字列も`length`プロパティを参照できる
console.log(str4.length); // => 3