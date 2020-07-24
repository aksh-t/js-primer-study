"use strict";
{
    console.log("あ".codePointAt(0));
}

{
    console.log(String.fromCodePoint(12354));
    console.log(String.fromCodePoint(0x3042));
}

{
    const codePointOfあ = "あ".codePointAt(0);
    const hexOfあ = codePointOfあ.toString(16);
    console.log(hexOfあ);
    console.log("\u{3042}");
}

{
    function convertCodeUnits(str) {
        const codeUnits = [];
        for (let i = 0; i < str.length; i++) {
            codeUnits.push(str.charCodeAt(i).toString(16));
        }
        return codeUnits;
    }

    function convertCodePoints(str) {
        return Array.from(str).map(char => {
            return char.codePointAt(0).toString(16);
        });
    }

    {
        const str = "アオイ";
        const codeUnits = convertCodeUnits(str);
        console.log(codeUnits);
        const codePoints = convertCodePoints(str);
        console.log(codePoints);
    }

    {
        const str = "リンゴ🍎";
        const codeUnits = convertCodeUnits(str);
        console.log(codeUnits);
        const codePoints = convertCodePoints(str);
        console.log(codePoints);
    }
}