"use strict";
{
    const emptyArray = [];
    const numbers = [1, 2, 3];
    const matrix = [
        ["a", "b"],
        ["c", "d"]
    ];
}

{
    const array = ["one", "two", "three"];
    console.log(array[0]);
}

{
    const matrix = [
        ["a", "b"],
        ["c", "d"]
    ];
    console.log(matrix[0][0]);
}

{
    const array = ["one", "two", "three"];
    console.log(array.length);
    console.log(array[array.length - 1]);
}

{
    const array = ["one", "two", "three"];
    // オブジェクトの存在しないプロパティへのアクセスと同じ
    console.log(array[100]);
}

{
    const obj = {
        "0": "one",
        "1": "two",
        "2": "three",
        "length": 3
    };
    console.log(obj[100]);
}

{
    // 疎な配列(<=>密な配列)
    const sparseArray = [1, , 3];
    console.log(sparseArray.length);
    console.log(sparseArray[1]);
}

{
    const obj = {};
    const array = [];
    console.log(Array.isArray(obj));
    console.log(Array.isArray(array));
}

{
    const array = [];
    // "object" が返る
    console.log(typeof array);
}

{
    // ES2015
    const typedArray = new Int8Array(8);
    console.log(Array.isArray(typedArray));
}

{
    // ES2015
    // 分割代入(Destructuring assignment)
    const array = ["one", "two", "three"];
    const [first, second, third] = array;
    console.log(first);
    console.log(second);
    console.log(third);
}

{
    const denseArray = [1, undefined, 3];
    const sparseArray = [1, , 3];
    // 判断できない
    console.log(denseArray[1]);
    console.log(sparseArray[1]);
}

{
    const denseArray = [1, undefined, 3];
    const sparseArray = [1, , 3];
    // 判断できる
    console.log(denseArray.hasOwnProperty(1));
    console.log(sparseArray.hasOwnProperty(1));
}

{
    const array = ["Java", "JavaScript", "Ruby"];
    // === 厳密一致で探索する
    const indexOfJS = array.indexOf("JavaScript");
    console.log(indexOfJS);
    console.log(array[indexOfJS]);
    console.log(array.indexOf("JS"));
}

{
    const obj = { key: "value" };
    const array = ["A", "B", obj];
    // === じゃないので -1
    console.log(array.indexOf({ key: "value" }));
    // オブジェクトリテラルは新しいオブジェクトを作るので === にならない
    console.log(obj === { key: "value" });
    // 同じオブジェクトは一致する
    console.log(array.indexOf(obj));
}

{
    const colors = [
        { "color": "red" },
        { "color": "green" },
        { "color": "blue" }
    ];
    // テストするコールバック関数を渡す
    const indexOfBlue = colors.findIndex((obj) => {
        return obj.color === "blue";
    });
    console.log(indexOfBlue);
    console.log(colors[indexOfBlue]);
}

{
    // ES2015
    const colors = [
        { "color": "red" },
        { "color": "green" },
        { "color": "blue" }
    ];
    const blueColor = colors.find((obj) => {
        return obj.color === "blue";
    });
    console.log(blueColor);

    const whiteColor = colors.find((obj) => {
        return obj.color === "white";
    });
    console.log(whiteColor);
}

{
    const array = ["A", "B", "C", "D", "E"];
    console.log(array.slice(1, 4));
    console.log(array.slice(1));
    console.log(array.slice(-1));
    console.log(array.slice(4, 1));
}

{
    const array = ["Java", "JavaScript", "Ruby"];
    const indexOfJS = array.indexOf("JavaScript");
    if (indexOfJS !== -1) {
        console.log("配列にJavaScriptが含まれている");
    }
}

{
    // ES2016
    const array = ["Java", "JavaScript", "Ruby"];
    if (array.includes("JavaScript")) {
        console.log("配列にJavaScriptが含まれている");
    }
}

{
    const colors = [
        { "color": "red" },
        { "color": "green" },
        { "color": "blue" }
    ];
    const isIncludedBlueColor = colors.some((obj) => {
        return obj.color === "blue";
    });
    console.log(isIncludedBlueColor);
}