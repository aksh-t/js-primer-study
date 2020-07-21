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

{
    const strings = "赤・青・緑".split("・");
    console.log(strings);
}

{
    const str = "赤・青・緑".split("・").join("、");
    console.log(str);
}

{
    const str = "a     b    c      d";
    const strings = str.split(/\s+/);
    console.log(strings);
}

{
    // CodeUnitの個数を返す
    console.log("文字列".length);
}

{
    console.log("".length);
}

{
    console.log("文字列" === "文字列");
    console.log("JS" === "ES");
    console.log("文字列" === "文字");
}

{
    console.log("A".charCodeAt(0));
    console.log("B".charCodeAt(0));
    console.log("A" > "B");
    console.log("ABC" > "ABD");
}

{
    const str = "ABCDE";
    console.log(str.slice(1));
    console.log(str.slice(1, 5));
    console.log(str.slice(-1));
    console.log(str.slice(1, 4));
    console.log(str.slice(4, 1));
}

{
    const str = "ABCDE";
    console.log(str.substring(1));
    console.log(str.substring(1, 5));
    console.log(str.substring(-1));
    console.log(str.slice(1, 4));
    console.log(str.slice(4, 1));
}

{
    const url = "https://example.com?param=1";
    const indexOfQuery = url.indexOf("?");
    const queryString = url.slice(indexOfQuery);
    console.log(queryString);
}

{
    const str = "にわにはにわにわとりがいる";
    console.log(str.indexOf("にわ"));
    console.log(str.lastIndexOf("にわ"));
    console.log(str.indexOf("未知のキーワード"));
}

{
    const str = "JavaScript";
    const searchWord = "Script";
    const index = str.indexOf(searchWord);
    if (index !== -1) {
        console.log(`${searchWord}が見つかりました`);
    } else {
        console.log(`${searchWord}は見つかりませんでした`);
    }
}

{
    // ES2015
    const str = "にわにはにわにわとりがいる";
    console.log(str.startsWith("にわ"));
    console.log(str.startsWith("いる"));
    console.log(str.endsWith("にわ"));
    console.log(str.endsWith("いる"));
    console.log(str.includes("にわ"));
    console.log(str.includes("いる"));
}

{
    const pattern = /a+/;
}

{
    const pattern = new RegExp("a+");
}

{
    // 正規表現リテラルはパース時点でパターンが評価される
    function main() {
        // const invalidPattern = /[/;;
    }
}

{
    // RegExpコンストラクタは実行時までパターンは評価されない
    function main() {
        const invalidPattern = new RegExp("[");
    }
    // main();
}

{
    const pattern = /\s{3}/;
}

{
    const spaceCount = 3;
    const pattern = new RegExp(`\\s{${spaceCount}}`);
}
// 正規表現リテラルの方が記述が簡潔で、パフォーマンスも良い
// 変数を使って動的にパターンを変えたいときは、RegExpコンストラクタを使う

{
    const str = "ABC123EFG";
    const searchPattern = /\d{3}/;
    console.log(str.search(searchPattern));
}

{
    const str = "abc123def";
    const searchPattern = /\d+/;
    const index = str.search(searchPattern);
    // str.slice(index, index + マッチした文字列の長さ)
}

{
    const str = "ABC あいう DE えお";
    const alphabetsPattern = /[a-zA-Z]+/;
    const results = str.match(alphabetsPattern);
    console.log(results.length);
    console.log(results[0]);
    console.log(results.index);
    console.log(results.input);
}

{
    const str = "ABC あいう DE えお";
    const alphabetsPattern = /[a-zA-Z]+/g;
    const resultWithG = str.match(alphabetsPattern);
    console.log(resultWithG.length);
    console.log(resultWithG[0]);
    console.log(resultWithG[1]);
    console.log(resultWithG.index);
    console.log(resultWithG.input);
}

{
    const str = "ABC あいう DE えお";
    const alphabetsPattern = /[a-zA-Z]+/;
    const results = alphabetsPattern.exec(str);
    console.log(results.length);
    console.log(results[0]);
    console.log(results.index);
    console.log(results.input);
}

{
    const str = "ABC あいう DE えお";
    const alphabetsPattern = /[a-zA-Z]+/g;
    console.log(alphabetsPattern.lastIndex);
    const result1 = alphabetsPattern.exec(str);
    console.log(result1[0]);
    console.log(alphabetsPattern.lastIndex);
    const result2 = alphabetsPattern.exec(str);
    console.log(result2[0]);
    console.log(alphabetsPattern.lastIndex);
    const result3 = alphabetsPattern.exec(str);
    console.log(result3);
    console.log(alphabetsPattern.lastIndex);
}

{
    const str = "ABC あいう DE えお";
    const alphabetsPattern = /[a-zA-Z]+/g;
    let matches;
    while (matches = alphabetsPattern.exec(str)) {
        console.log(`match: ${matches[0]}, lastIndex: ${alphabetsPattern.lastIndex}`);
    }
}

{
    const pattern = /ECMAScript (\d+)/;
    const [all, capture1] = "ECMAScript 6".match(pattern);
    console.log(all);
    console.log(capture1);
}

{
    const str = "にわにはにわにわとりがいる";
    console.log(/^にわ/.test(str));
    console.log(/^いる/.test(str));
    console.log(/にわ$/.test(str));
    console.log(/いる$/.test(str));
    console.log(/にわ/.test(str));
    console.log(/いる/.test(str));
}

{
    const str = "/正規表現のような文字列/";
    const regExpLikePattern = /^\/.*\/$/;
    console.log(regExpLikePattern.test(str));

    const isRegExpLikeString = (str) => {
        return str.startsWith("/") && str.endsWith("/");
    };
    console.log(isRegExpLikeString(str));
}

{
    const str = "文字列";
    // delete str[0];
}

{
    const str = "文字列";
    const newStr = str.replace("文字", "");
    console.log(newStr);
}

{
    const str = "にわにはにわにわとりがいる";
    // 最初に一致したものだけ置換
    console.log(str.replace("にわ", "niwa"));
    // 最初に一致したものだけ置換
    console.log(str.replace(/にわ/, "niwa"));
    // 繰り返し置換
    console.log(str.replace(/にわ/g, "niwa"));
}

{
    function toDateJa(dateString) {
        return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
            return `${year}年${month}月${day}日`;
        });
    }

    console.log(toDateJa("本日は晴天ナリ"));
    console.log(toDateJa("今日は2017-03-17です"));
}