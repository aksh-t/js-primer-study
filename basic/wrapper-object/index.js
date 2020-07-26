"use strict";

{
    const str = new String("input value");
    console.log(str.toUpperCase());
}

{
    const str = "文字列";
    console.log(typeof str);

    const stringWrapper = new String("文字列");
    console.log(typeof stringWrapper);
}

{
    const str = "string";
    // プロパティアクセスするとき、ラッパーオブジェクトに変換される
    str.toUpperCase();

    // これとおなじ
    (new String(str)).toUpperCase();
}

{
    // ラッパーオブジェクトからプリミティブの値を取り出す
    const stringWrapper = new String("文字列");
    console.log(stringWrapper.valueOf());
}

{
    // 以下の理由からラッパーオブジェクトではなく、リテラルを使う
    // プリミティブは必要に応じて自動的にラッパーオブジェクトにボクシングされる
    // ラッパーオブジェクトは、typeofの評価結果が"object"になり混乱を生む

    // OK
    const str = "文字列";

    // NG
    const stringWrapper = new String("文字列");
}