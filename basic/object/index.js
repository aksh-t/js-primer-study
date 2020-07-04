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