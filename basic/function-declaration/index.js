"use strict";

{
    function multiple(num) {
        return num * 2;
    }
    console.log(multiple(10))
}

{
    function fn() {
        return
    }
    console.log(fn())
}

{
    function fn() {
    }
    console.log(fn())
}

{
    function echo(x) {
        return x;
    }
    console.log(echo(1))
    console.log(echo())
}

{
    function argumentsToArray(x, y) {
        return [x, y]
    }
    console.log(argumentsToArray(1, 2))
    console.log(argumentsToArray(1))
}

{
    function echo(x = "デフォルト値") {
        return x;
    }
    console.log(echo(1))
    console.log(echo())
}

{
    function addPrefix(text, prefix) {
        const pre = prefix || "デフォルト:"
        return pre + text
    }
    console.log(addPrefix("文字列"))
    console.log(addPrefix("文字列", "カスタム:"))
    console.log(addPrefix("文字列", ""))
}

{
    function addPrefix(text, prefix = "デフォルト:") {
        return prefix + text
    }
    console.log(addPrefix("文字列"))
    console.log(addPrefix("文字列", "カスタム:"))
    console.log(addPrefix("文字列", ""))
}

{
    // ES2020 null coalescing
    function addPrefix(text, prefix) {
        // prefixがnullまたはundefinedの時、デフォルト値を返す
        const pre = prefix ?? "デフォルト:";
        return pre + text;
    }
    
    console.log(addPrefix("文字列")); // => "デフォルト:文字列"
    // falsyな値でも意図通りに動作する
    console.log(addPrefix("文字列", "")); // => "文字列"
    console.log(addPrefix("文字列", "カスタム:")); // => "カスタム:文字列"
}

{
    function add(x, y) {
        return x + y;
    }
    console.log(add(1, 3))
    console.log(add(1, 3, 5))
}

{
    const max = Math.max(1, 5, 10, 20)
    console.log(max)
}

{
    function fn(...args) {
        console.log(args)
    }
    fn("a", "b", "c")
}

{
    function fn(arg1, ...restArgs) {
        console.log(arg1)
        console.log(restArgs)
    }
    fn("a", "b", "c")
}

{
    function fn(x, y, z) {
        console.log(x)
        console.log(y)
        console.log(z)
    }
    const array = [1, 2, 3]
    fn(...array)
    fn(array[0], array[1], array[2])
}

{
    function fn() {
        console.log(arguments[0])
        console.log(arguments[1])
        console.log(arguments[2])
    }
    fn("a", "b", "c")
}

{
    function printUserId(user) {
        console.log(user.id)
    }
    const user = { id: 42 }
    printUserId(user)
}

{
    function printUserId({ id }) {
        console.log(id)
    }
    const user = { id: 42 }
    printUserId(user)
}

{
    const user = {
        id: 42
    }
    const { id } = user
    console.log(id)

    function printUserId({ id }) {
        console.log(id)
    }
    printUserId(user)
}

{
    function print([first, second]) {
        console.log(first)
        console.log(second)
    }
    const array = [1, 2]
    print(array)
}

{
    function fn() {
        console.log("fnが呼び出されました")
    }
    const myFunc = fn
    myFunc()
}

{
    const factorial = function innerFact(n) {
        if (n === 0) {
            return 1
        }
        return n * innerFact(n - 1)
    }
    console.log(factorial(3))
}

{
    const fnA = () => { }
    const fnB = (x) => { }
    const fnC = x => { }
    const fnD = (x, y) => { }

    const mulA = x => { return x * x }
    const mulB = x => x * x
}

{
    const array = [1, 2, 3]
    const doubleArray = array.map(function (value) {
        return value * 2
    })
    console.log(doubleArray)
}

{
    const array = [1, 2, 3]
    const doubleArray = array.map(value => value * 2)
    console.log(doubleArray)
}

{
    function fn(x) {
        return `最初の関数　x: ${x}`
    }

    // テキストには同じ名前の関数はあと勝ちになると書いてあったが、
    // 少なくともchromeではエラーになった
    // function fn(x, y) {
    //     return `最後の関数 x: ${x}, y: ${y}`
    // }
    console.log(fn(2, 10))
}

{
    function 高階関数(コールバック関数) {
        コールバック関数()
    }
}

{
    const array = [1, 2, 3]
    const output = (value) => {
        console.log(value)
    }
    array.forEach(output)
}

{
    const array = [1, 2, 3]
    array.forEach((value) => {
        console.log(value)
    })
}

{
    const obj = {
        method1: function () {
            // 
        },
        method2: () => {
            // 
        }
    }
}

{
    const obj = {}
    obj.method = function () {
        // 
    }
}

{
    const obj = {
        method: function () {
            return "this is method"
        }
    }
    console.log(obj.method())
}

{
    const obj = {
        method() {
            return "this is method"
        }
    }
    console.log(obj.method())
}