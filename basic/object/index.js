"use strict";

{
    const ob = {};
}

{
    const obj = {
        "key": "value"
    };
}

{
    const obj = {
        key: "value"
    };
}

{
    //     const object = {
    //         my-prop: "value";
    //     }
    {
        const obj = {
            "my-prop": "value"
        };
    }
}

{
    const color = {
        red: "red",
        green: "green",
        blue: "blue"
    };
}

{
    const name = "名前";
    const obj = {
        name: name
    };
    console.log(obj);
}

{
    const name = "名前";
    const obj = {
        name
    };
    console.log(obj);
}

{
    const obj = new Object();
    console.log(obj);
}

{
    const obj = {
        key: "value"
    };
    // ドット記法
    console.log(obj.key);
    // ブラケット記法
    console.log(obj["key"]);
}

{
    const obj = {
        key: "value",
        123: 456,
        "my-key": "my-value"
    };

    console.log(obj["key"]);
    console.log(obj[123]);
    console.log(obj["my-key"]);
}

{
    const languages = {
        ja: "日本語",
        en: "英語"
    };
    const myLang = "ja";
    console.log(languages[myLang]);
}

{
    const languages = {
        ja: "日本語",
        en: "英語"
    };
    const ja = languages.ja;
    const en = languages.en;
    console.log(ja);
    console.log(en);
}

{
    const languages = {
        ja: "日本語",
        en: "英語"
    };
    const { ja, en } = languages;
    console.log(ja);
    console.log(en);
}

{
    const obj = {};
    obj.key = "value";
    console.log(obj.key);
}

{
    const key = "key-string";
    const obj = {};
    obj[key] = "value of key";
    console.log(obj[key]);
}

{
    const key = "key-string";
    // Computed Property
    const obj = {
        [key]: "value"
    };
    console.log(obj[key]);
}

{
    function changeProperty(obj) {
        obj.key = "value";
    }
    const obj = {};
    changeProperty(obj);
    console.log(obj.key);
}

{
    const obj = {
        key1: "value1",
        key2: "value2"
    };
    delete obj.key1;
    console.log(obj);
}

{
    const obj = { key: "value" };
    obj.key = "Hi!";
    console.log(obj.key);
}

{
    const obj = { key: "value" };
    // obj = {};
}

{
    const object = Object.freeze({ key: "value" });
    // object.key = "value";
}

{
    const obj = {};
    console.log(obj.notFound);
}

{
    const widget = {
        window: {
            title: "ウィジェットのタイトル"
        }
    };

    console.log(widget.windw);
    // console.log(widget.windw.title);
}

{
    const obj = {
        key: "value"
    };
    if (obj.key !== undefined) {
        console.log("`key`プロパティの値は`undefined`ではない");
    }
}

{
    const obj = {
        key: undefined
    };
    if (obj.key !== undefined) {
        // この行は実行されません
    }
}

{
    const obj = { key: undefined };
    if ("key" in obj) {
        console.log("`key`プロパティは存在する");
    }
}

{
    const obj = { key: "value" };
    if (obj.hasOwnProperty("key")) {
        console.log("`object`は`key`プロパティを持っている");
    }
}

// [ES2020] Optional chaining演算子（?.）
{
    // Optional chainingを使わない場合の例
    function printWidgetTitle(widget) {
        // 例外を避けるために`widget`のプロパティの存在を順場に確認してから、値を表示している
        if (widget.window !== undefined && widget.window.title !== undefined) {
            console.log(`ウィジェットのタイトルは${widget.window.title}です`);
        } else {
            console.log("ウィジェットのタイトルは未定義です");
        }
    }
    // タイトルが定義されているwidget
    printWidgetTitle({
        window: {
            title: "Book Viewer"
        }
    });
    // タイトルが未定義のwidget
    printWidgetTitle({
        // タイトルが定義されてない空のオブジェクト
    });
}

{
    const obj = {
        a: {
            b: "objのaプロパティのbプロパティ"
        }
    };
    // obj.a.b は存在するので、その評価結果を返す
    console.log(obj?.a?.b); // => "objのaプロパティのbプロパティ"
    // 存在しないプロパティのネストも`undefined`を返す
    // ドット記法の場合は例外が発生してしまう
    console.log(obj?.notFound?.notFound); // => undefined
    // undefinedやnullはnullishなので、`undefined`を返す
    console.log(undefined?.notFound?.notFound); // => undefined
    console.log(null?.notFound?.notFound); // => undefined
}

{
    // 先ほどの例を Optional chaining を使って書き換え
    function printWidgetTitle(widget) {
        const title = widget?.window?.title ?? "未定義";
        console.log(`ウィジェットのタイトルは${title}です`);
    }
    printWidgetTitle({
        window: {
            title: "Book Viewer"
        }
    }); // "ウィジェットのタイトルはBook Viewerです" と出力される
    printWidgetTitle({
        // タイトルが定義されてない空のオブジェクト
    }); // "ウィジェットのタイトルは未定義です" と出力される
}

{
    const languages = {
        ja: {
            hello: "こんにちは！"
        },
        en: {
            hello: "Hello!"
        }
    };
    const langJapanese = "ja";
    const langKorean = "ko";
    const messageKey = "hello";
    // Optional chaining演算子（`?.`）とブラケット記法を組みわせた書き方
    console.log(languages?.[langJapanese]?.[messageKey]); // => "こんにちは！"
    // `languages`に`ko`プロパティが定義されていないため、`undefined`を返す
    console.log(languages?.[langKorean]?.[messageKey]); // => undefined
}

{
    const obj = { key: "value" };
    console.log(obj.toString());
    console.log(String(obj));
}

{
    const customObject = {
        toString() {
            return "custom value";
        }
    };
    console.log(String(customObject));
}

{
    const obj = {};
    const keyObject1 = { a: 1 };
    const keyObject2 = { b: 2 };

    obj[keyObject1] = "1";
    obj[keyObject2] = "2";
    console.log(obj);
}

{
    const obj = {};
    const symbolKey1 = Symbol("シンボル1");
    const symbolKey2 = Symbol("シンボル2");
    obj[symbolKey1] = "1";
    obj[symbolKey2] = "2";
    console.log(obj[symbolKey1]);
    console.log(obj[symbolKey2]);
}

{
    const obj = {
        "one": 1,
        "two": 2,
        "three": 3
    };

    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
}

{
    const obj = {
        "one": 1,
        "two": 2,
        "three": 3
    };
    const keys = Object.keys(obj);
    keys.forEach(key => {
        console.log(key);
    });
}

{
    const objectA = { a: "a" };
    const objectB = { b: "b" };
    const merged = Object.assign({}, objectA, objectB);
    console.log(merged);
}

{
    const objectA = { a: "a" };
    const objectB = { b: "b" };
    const merged = Object.assign(objectA, objectB);

    console.log(merged);
    console.log(objectA);
    console.log(merged === objectA);
}

{
    const objectA = { version: "a" };
    const objectB = { version: "b" };
    const merged = Object.assign({}, objectA, objectB);
    console.log(merged);
}

{
    const objectA = { a: "a" };
    const objectB = { b: "b" };
    const merged = {
        ...objectA,
        ...objectB
    };
    console.log(merged);
}

{
    const objectA = { version: "a" };
    const objectB = { version: "b" };
    const merged = {
        ...objectA,
        ...objectB,
        other: "other"
    };
    console.log(merged);
}

{
    const shallowClone = (obj) => {
        return Object.assign({}, obj);
    };
    const obj = { a: "a" };
    const cloneObj = shallowClone(obj);
    console.log(cloneObj);
    console.log(obj === cloneObj);
}

{
    const shallowClone = (obj) => {
        return Object.assign({}, obj);
    };
    const obj = {
        level: 1,
        nest: {
            level: 2
        }
    };
    const cloneObj = shallowClone(obj);
    console.log(cloneObj.nest === obj.nest);
}

{
    const shalloClone = (obj) => {
        return Object.assign({}, obj);
    };
    function deepClone(obj) {
        const newObj = shalloClone(obj);

        Object.keys(newObj)
            .filter(k => typeof newObj[k] === "object")
            .forEach(k => newObj[k] = deepClone(newObj[k]));
        return newObj;
    }

    const obj = {
        level: 1,
        nest: {
            level: 2
        }
    };
    const cloneObj = deepClone(obj);
    console.log(cloneObj.nest === obj.nest);
}