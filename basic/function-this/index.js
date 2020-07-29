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

// Arrow Function以外の関数におけるthis
{
    function fn() { }
    const obj = {
        method() { }
    };
    const obj1 = {
        obj2: {
            method() { }
        }
    };
    // thisの基本的な参照先はベースオブジェクト
    // undefined
    fn();
    // obj
    obj.method();
    // obj2
    obj1.obj2.method();
    // obj2
    obj1["obj2"]["method"]();
}

// 関数宣言や関数式におけるthis
{
    "use strict";
    function fn1() {
        return this;
    }
    const fn2 = function () {
        return this;
    };
    console.log(fn1());
    console.log(fn2());
}

{
    "use strict";
    function outer() {
        console.log(this);
        function inner() {
            console.log(this);
        }
        inner();
    }
    outer();
}

// strict modeではない場合
// thisがundefinedだとグローバルオブジェクトへの参照に変換される

// strict modeの場合
// メソッド以外の関数におけるthisはundefinedになるので、使う必要はない


// メソッド呼び出しにおけるthis
{
    const obj = {
        method1: function () {
            return this;
        },
        method2() {
            return this;
        }
    };
    console.log(obj.method1());
    console.log(obj.method2());
}

{
    const person = {
        fullName: "Brendan Eich",
        sayName: function () {
            // 同じオブジェクトの別プロパティを参照できる
            return this.fullName;
        }
    };
    console.log(person.sayName());
}

{
    const obj1 = {
        obj2: {
            obj3: {
                method() {
                    return this;
                }
            }
        }
    };
    console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3);
}

