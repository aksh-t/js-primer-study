"use strict";

{
    console.log(1)
    console.log(1 + 1)
    const total = 1 + 1
    const fn = function () {
        return 1
    }
    console.log(fn())
}

{
    const isTrue = true;
    if (isTrue) {
    }
    // var forIsNotExpression = if (true) { /* ifは文であるため式にはなれない */}
}

{
    // 式文(Expression statement) = 文になった式
}

{
    if (true) {
        console.log("文1")
        console.log("文2")
    }
}

{
    if (true) console.log(true);
    if (true) {
        console.log(true)
    }
}

{
    function learn() {
    }
    const read = function () {
    };
}