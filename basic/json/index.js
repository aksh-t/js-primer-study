"use strict";

{
    const json = '{ "id": 1, "name": "js-primer" }';
    const obj = JSON.parse(json);
    console.log(obj.id);
    console.log(obj.name);
}

{
    const json = "[1, 2, 3]";
    console.log(JSON.parse(json));
}

{
    const userInput = "not json value";
    try {
        const json = JSON.parse(userInput);
    } catch (error) {
        console.log("パースできませんでした");
    }
}

{
    const obj = { id: 1, name: "js-primer", bio: null };
    console.log(JSON.stringify(obj));
}

{
    const obj = { id: 1, name: "js-primer", bio: null };
    const replacer = (key, value) => {
        if (value === null) {
            return undefined;
        }
        return value;
    };
    console.log(JSON.stringify(obj, replacer));
}

{
    const obj = { id: 1, name: "js-primer", bio: null };
    const replacer = ["id", "name"];
    console.log(JSON.stringify(obj, replacer));
}

{
    const obj = { id: 1, name: "js-primer" };
    console.log(JSON.stringify(obj, null, 2));
}

{
    const obj = { id: 1, name: "js-primer" };
    console.log(JSON.stringify(obj, null, "\t"));
}

{
    console.log(JSON.stringify({ x: function () { } }));
    console.log(JSON.stringify({ x: Symbol("") }));
    console.log(JSON.stringify({ x: undefined }));
    console.log(JSON.stringify({ x: [10, function () { }] }));
    JSON.stringify({ [Symbol("foo")]: "foo" });
    console.log(JSON.stringify({ x: /foo/ }));
    const map = new Map();
    console.log(JSON.stringify({ x: map }));
}

{
    const obj = { foo: "foo" };
    obj.self = obj;
    try {
        JSON.stringify(obj);
    } catch (error) {
        console.error(error);
    }
}

{
    const obj = {
        foo: "foo",
        toJSON() {
            return "bar";
        }
    };
    console.log(JSON.stringify(obj));
    console.log(JSON.stringify({ x: obj }));
}