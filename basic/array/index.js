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