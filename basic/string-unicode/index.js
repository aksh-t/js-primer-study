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