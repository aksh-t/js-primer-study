"use strict";

console.log(1 === "1");
console.log(1 == "1");

console.log(1 + true);

// 暗黙的な型変換とは
// - ある処理において、その処理過程で行われる明示的ではない型変換のこと

console.log(1 == "1");
console.log(0 == false);
console.log(10 == [10]);

console.log(1 + "2")
console.log(1 - "2")

{
    const [x, y, z] = [1, "2", 3];
    console.log(x + y + z)
    console.log(y + x + z)
    console.log(x + z + y)
}

// 明示的な型変換
// 任意の値 -> 真偽値
console.log(Boolean("string"))
console.log(Boolean(1))
console.log(Boolean({}))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))

{
    let x;
    if (!x) {
        console.log("falsyな値なら表示", x)
    }
}
{
    let x;
    if (x === undefined) {
        console.log("xがundefinedなら表示", x)
    }
}

// 数値 -> 文字列
console.log(String(1))

console.log(String("str"))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))
console.log(String(Symbol("シンボルの説明文")))
// プリミティブ型ではない値の場合
console.log(String([1, 2, 3]))
console.log(String({ key: "value" }))
console.log(String(function () { }))

// シンボル -> 文字列
try {
    console.log("文字列と" + Symbol("シンボルの説明"))
} catch (e) {
    console.log(e)
}
console.log("文字列と" + String(Symbol("シンボルの説明")))

// 文字列 -> 数値
{
    const input = window.prompt("数字を入力してください", "42")
    const num = Number(input)
    console.log(typeof num)
    console.log(num)
}

console.log(Number.parseInt("1", 10))
console.log(Number.parseInt("42px", 10))
console.log(Number.parseInt("10.5", 10))
console.log(Number.parseFloat("1"))
console.log(Number.parseFloat("42.5px"))
console.log(Number.parseFloat("10.5"))

console.log(Number.parseInt("文字列"))
console.log(Number.parseInt(undefined))

{
    const userInput = "任意の文字列"
    const num = Number.parseInt(userInput, 10)
    if (!Number.isNaN(num)) {
        console.log("NaNではない値にパースできた", num)
    }
}

console.log(Number({}))
{
    const x = 10
    const y = x + NaN
    const z = y + 20
    console.log(x)
    console.log(y)
    console.log(z)
}

console.log(typeof NaN)

{
    function isNaN(x) {
        return x !== x
    }

    console.log(isNaN(1))
    console.log(isNaN("str"))
    console.log(isNaN({}))
    console.log(isNaN([]))
    console.log(isNaN(NaN))
}
console.log(Number.isNaN(NaN))

{
    function sum(...values) {
        return values.reduce((total, value) => {
            return total + value
        }, 0)
    }
    const x = 1, z = 10
    let y;
    console.log(sum(x, y, z))
}

{
    function sum(...values) {
        return values.reduce((total, value) => {
            return total + Number(value)
        }, 0)
    }
    const x = 1, z = 10
    let y;
    console.log(sum(x, y, z))
}

{
    /**
     * 数値を合計した値を返します。
     * 1つ以上の数値と共に呼び出す必要があります。
     * @param  {...number} values 
     * @returns {number}
     **/
    function sum(...values) {
        return values.reduce((total, value) => {
            // 値がNumber型ではない場合に、例外を投げる
            if (typeof value !== "number") {
                throw new Error(`${value}はNumber型ではありません`)
            }
            return total + value
        }, 0)
    }
    const x = 1, z = 10
    let y;
    console.log(x, y, z)

    try {
        console.log(sum(x, y, z))
    } catch (e) {
        console.log(e)
    }
}

{
    function isEmptyString(str) {
        return !Boolean(str)
    }

    console.log(isEmptyString(""))
    console.log(isEmptyString(0))
    console.log(isEmptyString())
}

{
    function isEmptyString(str) {
        return typeof str === "string" && str.length === 0
    }

    console.log(isEmptyString(""))
    console.log(isEmptyString(0))
    console.log(isEmptyString())
}