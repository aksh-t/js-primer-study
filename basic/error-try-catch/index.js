"use strict";
{
    try {
        console.log("try節:この行は実行されます");
        undefinedFunction();
    } catch (error) {
        console.log("catch節:この行は実行されます");
        console.log(error instanceof ReferenceError);
        console.log(error.message);
    } finally {
        console.log("finally節:この行は実行されます");
    }
}

try {
    try {
        undefinedFunction();
    } catch (error) {
        console.log(error);
    }

    try {
        undefinedFunction();
    } finally {
        console.log("この行は実行されます");
    }
} catch (e) {
}

{
    try {
        throw new Error("例外が投げられました");
    } catch (error) {
        console.log(error.message);
    }
}

{
    function assertPositiveNumber(num) {
        if (num < 0) {
            throw new Error(`${num} is not positive.`);
        }
    }

    try {
        assertPositiveNumber(-1);
    } catch (error) {
        console.log(error instanceof Error);
        console.log(error.message);
    }
}

{
    try {
        // Errorオブジェクト以外もthrowできるが、スタックトレースが得られない
        throw "例外が投げられました";
    } catch (error) {
        console.log(error);
    }
}

// ビルトインエラー
{
    try {
        console.log(x);
    } catch (error) {
        console.log(error instanceof ReferenceError);
        console.log(error.name);
        console.log(error.message);
    }
}

{
    // SyntaxErrorはパース時に発生するので、try-catchできない
    // foo! bar!;
}

{
    try {
        eval("foo! bar!");
    } catch (error) {
        console.log(error instanceof SyntaxError);
        console.log(error.name);
        console.log(error.message);
    }
}

{
    try {
        const fn = {};
        fn();
    } catch (error) {
        console.log(error instanceof TypeError);
        console.log(error.name);
        console.log(error.message);
    }
}

{
    function reverseString(str) {
        if (typeof str !== "string") {
            throw new TypeError(`${str} is not a string`);
        }
    }

    try {
        reverseString(100);
    } catch (error) {
        console.log(error instanceof TypeError);
        console.log(error.name);
        console.log(error.message);
    }
} 