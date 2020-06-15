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