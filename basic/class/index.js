"use strict";
{
    // クラス宣言文
    class MyClass {
        constructor() {
            // 
        }
    }
}

{
    // クラス式
    const MyClass = class MyClass {
        constructor() { }
    };

    const AnonymousClass = class {
        constructor() { }
    };
}

{
    class MyClassA {
        constructor() {

        }
    }

    class MyClassB {

    }
}

{
    class MyClass {
    }

    const myClass = new MyClass();
    const myClassAnother = new MyClass();
    console.log(myClass === myClassAnother);
    console.log(myClass instanceof MyClass);
    console.log(myClassAnother instanceof MyClass);
}

{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    const point = new Point(3, 4);
    console.log(point.x);
    console.log(point.y);
}

{
    class MyClass {
        constructor() { }
    }

    // Uncaught TypeError: Class constructor MyClass cannot be invoked without 'new'
    // MyClass();
}

{
    class Point {
        constructor(x, y) {
            return { x, y };
        }
    }

    const point = new Point();
    console.log(point);
    console.log(point instanceof Point);
}

{
    class Thing { }
    const thing = new Thing();
}

{
    // ES2015 以前の関数によるクラスの実装
    const Point = function PointConstructor(x, y) {
        this.x = x;
        this.y = y;
    };

    const point = new Point(3, 4);
}

{
    function MyClassLike() {
    }

    MyClassLike();

    class MyClass {
    }

    // MyClass();
}

{
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count++;
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();

    counterA.increment();
    console.log(counterA.count);
    console.log(counterB.count);
}

{
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count++;
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();

    console.log(counterA.increment === counterB.increment);
}

{
    class Counter {
        constructor() {
            this.count = 0;
            this.increment = () => {
                this.count++;
            };
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    counterA.increment();
    console.log(counterA.count);
    console.log(counterB.count);
}

{
    class Counter {
        constructor() {
            this.count = 0;
            this.increment = () => {
                this.count++;
            };
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    console.log(counterA.increment !== counterB.increment);
}

{
    "use strict";
    class ArrowClass {
        constructor() {
            this.method = () => {
                return this;
            };
        }
    }
    const instance = new ArrowClass();
    const method = instance.method;
    console.log(method());
}

{
    "use strict";
    class PrototypeClass {
        method() {
            return this;
        }
    }
    const instance = new PrototypeClass;
    const method = instance.method;
    console.log(method());
}