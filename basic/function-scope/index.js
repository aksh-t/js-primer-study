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