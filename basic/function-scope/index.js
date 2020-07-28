"use strict";

{
    function fn() {
        const x = 1;
        console.log(x);
    }
    fn();
    // console.log(x);
}

{
    function fn(arg) {
        console.log(arg);
    }
    fn(1);
    // console.log(arg);
}

{
    let a;
    // let a;
}

{
    function fnA() {
        let x;
    }

    function fnB() {
        let x;
    }
}

{
    {
        const x = 1;
        console.log(x);
    }
    // console.log(x);
}

{
    if (true) {
        const x = "inner";
        console.log(x);
    }
    // console.log(x);
}

{
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
    // console.log(element);
}

{
    {
        const x = "x";
        {
            console.log(x);
        }
    }
}

{
    {
        // console.log(xyz)
    }
}

// 内側から外側のスコープへと順番に定義を探す仕組み => スコープチェーン
{
    {
        const x = "outer";
        {
            const x = "inner";
            console.log(x);
        }
        console.log(x);
    }
}

// ビルトインオブジェクトは実行時にグローバルスコープに定義される
console.log(isNaN);
console.log(Array);

{
    // 自分で定義した変数がビルトインオブジェクトより優先される
    const Array = 1;
    console.log(Array);
    // 内側のスコープで外側のスコープと同じ名前の変数を定義することで、
    // 外側の変数が参照できなくなることを、変数の隠蔽(shadowing)と呼びます
}

{
    // 写経の便宜上、このブロックスコープをグローバルスコープであるものとする
    function doHeavyTask() {
        // 計測したい処理
    }
    const startTime = Date.now();
    doHeavyTask();
    const endTime = Date.now();
    console.log(`実行時間は${endTime - startTime}ミリ秒`);
    // startTime と endTime が不必要にグローバルを汚染する
}

{
    const measureTask = (taskFn) => {
        const startTime = Date.now();
        taskFn();
        const endTime = Date.now();
        console.log(`実行時間は${endTime - startTime}ミリ秒`);
    };
    function doHeavyTask() {
        // 計測したい処理
    }
    measureTask(doHeavyTask);
}

{
    let let_x;
    var var_x;

    console.log(let_x);
    console.log(var_x);

    let_x = "letのx";
    var_x = "varのx";
}

{
    // console.log(x);
    let x = "letのx";
}

{
    console.log(x);
    var x = "varのx";
}

{
    // ↑が解釈されたコード
    var x;
    console.log(x);

    x = "varのx";
    console.log(x);
}

{
    function fn() {
        console.log(x);
        {
            var x = "varのx";
        }
        console.log(x);
    }
    fn();
}

{
    // ↑を解釈したコード
    function fn() {
        var x;
        console.log(x);
        {
            x = "varのx";
        }
        console.log(x);
    }
    fn();
}

// 変数の巻き上げ(hoisting)


{
    // 関数宣言が巻き上げられるため、呼び出しできる
    hello();

    function hello() {
        return "Hello";
    }
}

{
    // 変数宣言が巻き上げられ、暗黙的に'undefined'となる
    // hello();

    var hello = function () {
        return "Hello";
    };
}

{
    // 即時実行関数(IIFE, Immediately-Invoked Function Expression)
    (function () {
        var foo = "foo";
        console.log(foo);
    })();
    console.log(typeof foo === "undefined");
}

{
    // ↑と等価だが、↑の方が無駄な関数定義が残らなくて良い
    function fn() {
        var foo = "foo";
        console.log(foo);
    }
    console.log(typeof foo === "undefined");
}

{
    // ES2015でletとconstが導入されたため、即時実行関数は置き換え可能になった
    {
        const foo = "foo";
        console.log(foo);
    }
    console.log(typeof foo === "undefined");
}

{
    // クロージャー
    function createCounter() {
        let count = 0;
        function increment() {
            count = count + 1;
            return count;
        }
        return increment;
    }
    const myCounter = createCounter();
    console.log(myCounter());
    console.log(myCounter());

    const newCounter = createCounter();
    console.log(newCounter());
    console.log(newCounter());

    console.log(myCounter());
    console.log(newCounter());
}

{
    // 静的スコープ
    const x = 10;

    function printX() {
        console.log(x);
    }

    function run() {
        const x = 20;
        printX();
    }

    run();
}

{
    // 擬似言語に夜動的スコープの例
    // var x = 10;

    // fn printX() {
    //     print(x);
    // }

    // fn run() {
    //     var x = 20;
    // }

    // printX(); // ここでは 10 が出力される
    // run(): //ここでは 20 が出力される
}

{
    let x = "before text";
    x = "after text";
    // "before text"はどこからも参照されなくなり、GCの対象になる
}

{
    function printX() {
        const x = "X";
        console.log(x);
    }
    printX();
    // この時点で"X"の参照はなくなり、GCの対象になる
}

{
    function createArray() {
        const tempArray = [1, 2, 3];
        return tempArray;
    }
    const array = createArray();
    console.log(array);
    // 変数arrayが[1, 2, 3]を参照しているので解放されない
}


// クロージャー(関数閉包)
// 静的スコープと参照され続けている変数のデータが保持されるという2つ性質で成り立つ
{
    const createCounter = () => {
        let count = 0;
        return function increment() {
            count = count + 1;
            return count;
        };
    };
    const countUp = createCounter();
    const newCountUp = createCounter();
    console.log(countUp === newCountUp);
    console.log(countUp());
    console.log(newCountUp());
}