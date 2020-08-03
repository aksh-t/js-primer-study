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

{
    // アクセッサプロパティ
    class NumberWrapper {
        constructor(value) {
            this._value = value;
        }
        get value() {
            console.log("getter");
            return this._value;
        }
        set value(newValue) {
            console.log("setter");
            this._value = newValue;
        }
    }

    const numberWrapper = new NumberWrapper(1);
    console.log(numberWrapper.value);

    numberWrapper.value = 42;
    console.log(numberWrapper.value);
}

{
    const array = [1, 2, 3, 4, 5];
    array.length = 2;
    console.log(array.join(", "));
    array.length = 5;
    console.log(array.join(", "));
}

{
    class ArrayLike {
        constructor(items = []) {
            this._items = items;
        }

        get items() {
            return this._items;
        }

        get length() {
            return this._items.length;
        }

        set length(newLength) {
            const currentItemLength = this.items.length;
            if (newLength < currentItemLength) {
                this._items = this.items.slice(0, newLength);
            } else if (newLength > currentItemLength) {
                this._items = this.items.concat(new Array(newLength - currentItemLength));
            }
        }
    }

    const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
    arrayLike.length = 2;
    console.log(arrayLike.items.join(", "));
    arrayLike.length = 5;
    console.log(arrayLike.items.join(", "));
}

{
    class ArrayWrapper {
        constructor(array = []) {
            this.array = array;
        }

        static of(...items) {
            return new ArrayWrapper(items);
        }

        get length() {
            return this.array.length;
        }
    }

    const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
    const arrayWrapperB = ArrayWrapper.of(1, 2, 3);

    console.log(arrayWrapperA.length);
    console.log(arrayWrapperB.length);
}

{
    class ArrayWrapper {
        constructor(array = []) {
            this.array = array;
        }

        static of(...items) {
            // staticメソッドのthisはインスタンスではなく、クラス自身を参照する
            return new this(items);
        }

        get length() {
            return this.array.length;
        }
    }

    const arrayWrapper = ArrayWrapper.of(1, 2, 3);
    console.log(arrayWrapper.length);
}

{
    class ConflictClass {
        constructor() {
            this.method = () => {
                console.log("インスタンスオブジェクトのメソッド");
            };
        }

        method() {
            console.log("プロトタイプのメソッド");
        }
    }

    const conflict = new ConflictClass();
    conflict.method();

    delete conflict.method;
    conflict.method();
}