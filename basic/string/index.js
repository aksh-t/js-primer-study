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