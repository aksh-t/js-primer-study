"use strict";

{
    const obj = {};
    // ビルトインメソッド
    console.log(obj.toString());
}

{
    console.log(typeof Object.prototype.toString);
}

{
    const obj = {
        "key": "value"
    };
    console.log(obj.toString === Object.prototype.toString);
    console.log(obj.toString());
}

{
    const customObject = {
        toString() {
            return "custom value";
        }
    };
    // プロトタイプメソッドよりもインスタンス自身のメソッドの方が優先される
    console.log(customObject.toString());
}

{
    const obj = {};
    // hasOwnProperty はオブジェクト自身のプロパティだけ見る
    console.log(obj.hasOwnProperty("toString"));
    // in演算子は継承元のprototypeオブジェクトまで探索する
    console.log("toString" in obj);
}

{
    const obj = {
        toString() {
            return "custom value";
        }
    };
    console.log(obj.hasOwnProperty("toString"));
    console.log("toString" in obj);
}

{
    // const obj = {} と同じことが起きる
    const obj = Object.create(Object.prototype);
    console.log(obj.hasOwnProperty === Object.prototype.hasOwnProperty);
}

{
    // Arrayのインスタンス -> Array.prototype -> Object.prototype
    // ↑の継承のイメージ
    const Array = function () { };
    Array.prototype = Object.create(Object.prototype);
    const array = Object.create(Array.prototype);
    console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);
}

{
    const array = [];
    console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);
}

{
    const numbers = [1, 2, 3];
    // Object#toString よりも Array#toString が優先される
    console.log(numbers.toString());
}

{
    // Object.prototypeを継承しないオブジェクトを作成
    const obj = Object.create(null);
    console.log(obj.hasOwnProperty);
}

{
    const obj = {};
    console.log(obj["toString"]);

    // before ES2015でMapオブジェクトの代わりを作るイディオム
    const mapLike = Object.create(null);
    console.log(mapLike["toString"]);
}

{
    // ES2015 ではMapオブジェクトが導入された
    const map = new Map();
    console.log(map.has("toString"));
}