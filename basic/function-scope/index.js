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