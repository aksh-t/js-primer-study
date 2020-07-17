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
    const str = "This book is \"js-primer\""
    console.log(str)
}