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

