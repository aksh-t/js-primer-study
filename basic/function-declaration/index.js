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