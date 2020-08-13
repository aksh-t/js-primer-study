"use strict";

{
    const rad90 = Math.PI * 90 / 180;
    const sin90 = Math.sin(rad90);
    console.log(sin90);
}

{
    for (let i = 0; i < 5; i++) {
        console.log(Math.random());
    }
}

{
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    console.log(getRandom(1, 5));
}

{
    console.log(Math.max(1, 10));
    console.log(Math.min(1, 10));
}

{
    const numbers = [1, 2, 3, 4, 5];
    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers));
}

{
    console.log(Math.floor(1.3));
    console.log(Math.floor(-1.3));
    console.log(Math.ceil(1.3));
    console.log(Math.ceil(-1.3));
    console.log(Math.round(1.3));
    console.log(Math.round(1.6));
    console.log(Math.round(-1.3));
}

{
    console.log(Math.trunc(1.3));
    console.log(Math.trunc(-1.3));
}