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

// thisが問題となるパターン
// 問題: this を含むメソッドを変数に代入した場合
{
    "use strict";
    const person = {
        fullName: "Brendan Eich",
        sayName: function () {
            return this.name;
        }
    };

    console.log(person.sayName());

    const say = person.sayName;
    // say();
}

// 対処法: call、apply、bindメソッド
{
    "use strict";
    function say(message) {
        return `${message} ${this.fullName}!`;
    }
    const person = {
        fullName: "Brendan Eich"
    };
    console.log(say.call(person, "こんにちは"));
    // say();
}

{
    "use strict";
    function say(message) {
        return `${message} ${this.fullName}!`;
    }
    const person = {
        fullName: "Brendan Eich"
    };

    console.log(say.apply(person, ["こんにちは"]));
    // say();
}

{
    function add(x, y) {
        return x + y;
    }
    console.log(add.call(null, 1, 2));
    console.log(add.apply(null, [1, 2]));
}

{
    function say(message) {
        return `${message} ${this.fullName}!`;
    }
    const person = {
        fullName: "Brendan Eich"
    };
    const sayPerson = say.bind(person, "こんにちは");
    console.log(sayPerson());
}

{
    function say(message) {
        return `${message} ${this.fullName}!`;
    }
    const person = {
        fullName: "Brendan Eich"
    };
    const sayPerson = () => {
        return say.call(person, "こんにちは");
    };
    console.log(sayPerson());
}

//  問題: コールバック関数とthis
{
    "use strict";
    const Prefixer = {
        prefix: "pre",
        /**
         * `strings`配列の各要素にprefixをつける
         */
        prefixArray(strings) {
            return strings.map(function (str) {
                return this.prefix + "_" + str;
            });
        }
    };
    // Prefixer.prefixArray(["a", "b", "c"]);
}

{
    "use strict";
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            const callback = function (str) {
                return this.prefix + "_" + str;
            };
            return strings.map(callback);
        }
    };
    // Prefixer.prefixArray(["a", "b", "c"]);
}

// 対処法: thisを一次変数へ代入する
{
    "use strict";
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            const that = this;
            return strings.map(function (str) {
                return that.prefix + "_" + str;
            });
        }
    };
    const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
    console.log(prefixedStrings);
}

{
    "use strict";
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            return strings.map(function (str) {
                return this.prefix + "_" + str;
            }, this);
        }
    };
    const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
    console.log(prefixedStrings);
}

// 対処法: Arrow Functionでコールバック関数を扱う
{
    "use strict";
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            return strings.map((str) => {
                return this.prefix + "_" + str;
            });
        }
    };
    const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
    console.log(prefixedStrings);
}

{
    // const this = "thisは読み取り専用";
}

{
    const fn = () => {
        return this;
    };
    console.log(fn() === this);
}

{
    "use strict";
    function outer() {
        return () => {
            return this;
        };
    }
    const innerArrowFunction = outer();
    console.log(innerArrowFunction());
}

{
    "use strict";
    function outer() {
        const that = this;
        return () => {
            return that;
        };
    }
    const innerArrowFunction = outer();
    console.log(innerArrowFunction());
}

// メソッドとコールバック関数とArrow Function
{
    const callCallback = (callback) => {
        // 
    };

    const obj = {
        method() {
            callCallback(function () {
                // 
            });
        }
    };
}

{
    const callCallback = (callback) => {
        // 
    };

    const obj = {
        method() {
            callCallback(() => {
                // 
            });
        }
    };
}

{
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            return strings.map((str) => {
                return this.prefix + "-" + str;
            });
        }
    };
    const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
    console.log(prefixedStrings);
}

// Arrow Functionはthisをbindできない
{
    const fn = () => {
        return this;
    };
    console.log(fn());
    console.log(fn.call({}));
}

{
    const obj = {
        method() {
            const arrowFunction = () => {
                return this;
            };
            return arrowFunction();
        }
    };
    console.log(obj.method());
    console.log(obj.method.call("THAT"));
}

{
    // ES2020
    console.log(globalThis);
}