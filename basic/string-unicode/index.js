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

{
    console.log("\uD867\uDE3D");
    console.log("\u{29e3d}");
}

{
    console.log("\uD83C\uDF4E");
    console.log("\u{1F34E}");
}

{
    console.log("\uD867\uDE3D");
    console.log("𩸽"[0]);
    console.log("𩸽"[1]);
}

{
    console.log("🍎".length);
}

{
    const [all, fish] = "𩸽のひらき".match(/(.)のひらき/);
    console.log(all);
    console.log(fish);
}

{
    const [all, fish] = "𩸽のひらき".match(/(.)のひらき/u);
    console.log(all);
    console.log(fish);
}

{
    console.log("🍎".length);
    console.log("\uD83C\uDF4E");
    console.log("\uD83C\uDF4E".length);
}

{
    const codePoints = Array.from("リンゴ🍎");
    console.log(codePoints);
    console.log(codePoints.length);
}

{
    function countOfCodePoints(str, codePoint) {
        return Array.from(str).filter(item => {
            return item === codePoint;
        }).length;
    }
    console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));
}

{
    function countOfCodePoints(str, codePoint) {
        let count = 0;
        for (const item of str) {
            if (item === codePoint) {
                count++;
            }
        }
        return count;
    };
    console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));
}