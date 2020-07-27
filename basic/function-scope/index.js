"use strict";

{
    function fn() {
        const x = 1;
        console.log(x);
    }
    fn();
    // console.log(x);
}

{
    function fn(arg) {
        console.log(arg);
    }
    fn(1);
    // console.log(arg);
}

{
    let a;
    // let a;
}

{
    function fnA() {
        let x;
    }

    function fnB() {
        let x;
    }
}

{
    {
        const x = 1;
        console.log(x);
    }
    // console.log(x);
}

{
    if (true) {
        const x = "inner";
        console.log(x);
    }
    // console.log(x);
}

{
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
    // console.log(element);
}