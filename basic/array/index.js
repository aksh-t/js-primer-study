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

{
    const array = ["A", "B", "C"];
    array.push("D");
    console.log(array);
    const poppedItem = array.pop();
    console.log(poppedItem);
    console.log(array);
}

{
    const array = ["A", "B", "C"];
    array.unshift("S");
    console.log(array);
    const shiftedItem = array.shift();
    console.log(shiftedItem);
    console.log(array);
}

{
    const array = ["A", "B", "C"];
    const newArray = array.concat(["D", "E"]);
    console.log(newArray);
}

{
    const array = ["A", "B", "C"];
    const newArray = array.concat("新しい要素");
    console.log(newArray);
}

{
    // ES2015
    const array = ["A", "B", "C"];
    const newArray = ["X", "Y", "Z", ...array];
    const newArrayConcat = ["X", "Y", "Z"].concat(array);
    console.log(newArray);
    console.log(newArrayConcat);
}

{
    const array = ["A", "B", "C"];
    const newArray = ["X", ...array, "Z"];
    console.log(newArray);
}

{
    // ES2019
    const array = [[["A"], "B"], "C"];
    console.log(array.flat());
    console.log(array.flat(1));
    console.log(array.flat(2));
    console.log(array.flat(Infinity));
}

{
    const array = ["A", "B", "C"];
    console.log(array.flat());
}

{
    const array = ["A", "B", "C"];
    array.splice(1, 1);
    console.log(array);
    console.log(array.length);
    console.log(array[1]);
    // すべて削除
    array.splice(0, array.length);
    console.log(array.length);
}

{
    const array = [1, 2, 3];
    array.length = 0;
    console.log(array);
}

{
    let array = [1, 2, 3];
    console.log(array.length);
    array = [];
    console.log(array);
}

{
    const myArray = ["A", "B", "C"];
    const result = myArray.push("D");
    console.log(result);
    console.log(myArray);
}

{
    const myArray = ["A", "B", "C"];
    const newArray = myArray.concat("D");
    console.log(newArray);
    console.log(myArray);
    console.log(myArray === newArray);
}

{
    function removeAtIndex(array, index) {
        array.splice(index, 1);
        return array;
    }
    const array = ["A", "B", "C"];
    const newArray = removeAtIndex(array, 1);
    console.log(array);
}

{
    const myArray = ["A", "B", "C"];
    const copiedArray = myArray.slice();
    myArray.push("D");
    console.log(myArray);
    console.log(copiedArray);
    console.log(copiedArray === myArray);
}

{
    function removeAtIndex(array, index) {
        const copiedArray = array.slice();
        copiedArray.splice(index, 1);
        return copiedArray;
    }
    const array = ["A", "B", "C"];
    const newArray = removeAtIndex(array, 1);
    console.log(newArray);
    console.log(array);
}