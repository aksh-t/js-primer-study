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