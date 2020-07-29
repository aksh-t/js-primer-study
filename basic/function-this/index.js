"use strict";
// 関数の種類
{
    // `function`キーワードによる関数宣言
    function fn1() { }
    // `function`を式として扱う関数式
    const fn2 = function () { };
    // Arrow Functionを使った関数式
    const fn3 = () => { };
}

// メソッドの種類
{
    // JavaScriptではオブジェクトのプロパティが関数である場合に、それをメソッドと呼ぶ
    const obj = {
        method1: function () {
        },
        method2: () => {
        }
    };
}

{
    const obj = {
        // メソッドの短縮記法
        method() {
        }
    };
}

