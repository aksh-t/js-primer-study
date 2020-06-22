"use strict";

{
    if (true) {
        console.log("この行は実行されます")
    }
}

{
    if (true)
        console.log("この行は実行されます")
}

{
    const x = 42
    if (x > 10) {
        console.log("xは10より大きな値です")
    }
}

{
    if (true) {
        console.log("この行は実行されます")
    }
    if ("文字列") {
        console.log("この行は実行されます")
    }
    if (42) {
        console.log("この行は実行されます")
    }
    if (["配列"]) {
        console.log("この行は実行されます")
    }
    if ({ name: "オブジェクト" }) {
        console.log("この行は実行されます")
    }
}

{
    if (false) {
        // この行は実行されません
    }
    if ("") {
        // この行は実行されません
    }
    if (0) {
        // この行は実行されません
    }
    if (undefined) {
        // この行は実行されません
    }
    if (null) {
        // この行は実行されません
    }
}

{
    const version = "ES6"
    if (version === "ES5") {
        console.log("ECMAScript 5")
    } else if (version === "ES6") {
        console.log("ECMAScript 2015")
    } else if (version === "ES7") {
        console.log("ECMAScript 2016")
    }
}

{
    const num = 1
    if (num > 10) {
        console.log(`numは10より大きいです: ${num}`)
    } else {
        console.log(`numは10以下です: ${num}`)
    }
}

{
    const year = new Date().getFullYear()
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(`${year}はうるう年です`)
            } else {
                console.log(`${year}はうるう年ではありません`)
            }
        } else {
            console.log(`${year}はうるう年です`)
        }
    } else {
        console.log(`${year}はうるう年ではありません`)
    }
}

{
    const year = new Date().getFullYear()
    if (year % 400 === 0) {
        console.log(`${year}はうるう年です`)
    } else if (year % 100 === 0) {
        console.log(`${year}はうるう年ではありません`)
    } else if (year % 4 === 0) {
        console.log(`${year}はうるう年です`)
    } else {
        console.log(`${year}はうるう年ではありません`)
    }
}