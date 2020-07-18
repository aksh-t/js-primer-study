"use strict";
{
    const double = "文字列";
    console.log(double);
    const single = '文字列';
    console.log(single);
    console.log(double === single);
}

{
    // ES2015 テンプレートリテラル
    const multiline = `1行目
2行目
3行目`;
    console.log(multiline);
}

{
    // リテラルと同じ記号はエスケープすれば使える
    const str = "This book is \"js-primer\"";
    console.log(str);
}

{
    const multiline = "1行目\n2行目\n3行目";
    console.log(multiline);
}

{
    console.log("¯\_(ツ)_/¯");
}

{
    console.log("¯\\_(ツ)_/¯");
}

{
    const str = "a" + "b";
    console.log(str);
}

{
    const name = "JavaScript";
    console.log("Hello " + name + "!");
}

{
    const name = "JavaScript";
    console.log(`Hello ${name}!`);
}

{
    const str = "文字列";
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[2]);
}

{
    const str = "文字列";
    console.log(str[42]);
}

{
    const str = "アオイ";
    console.log(str.charCodeAt(0).toString(16));
    console.log(str.charCodeAt(1).toString(16));
    console.log(str.charCodeAt(2).toString(16));
}

{
    const str = String.fromCharCode(
        0x30a2,
        0x30aa,
        0x30a4
    );
    console.log(str);
}
// JavaScriptの文字列の各要素はUTF-16のCode Unitで構成されている