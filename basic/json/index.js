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