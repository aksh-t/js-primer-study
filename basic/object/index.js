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