"use strict";

{
    let x = 0;
    console.log(`ループ開始前のxの値: ${x}`);
    while (x < 10) {
        console.log(x);
        x += 1;
    }
    console.log(`ループ終了後のxの値: ${x}`);
}

{
    // let i = 1;
    // while (i > 0) {
    //     console.log(`${i}回目のループ`);
    //     i += 1;
    // }
}

{
    const x = 1000;
    do {
        console.log(x);
    } while (x < 10);
}

{
    let total = 0;
    for (let i = 0; i < 10; i++) {
        total += i + 1;
    }
    console.log(total);
}

{
    function sum(numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }

    console.log(sum([1, 2, 3, 4, 5]));
}

{
    const array = [1, 2, 3];
    array.forEach(currentValue => {
        console.log(currentValue);
    });
}

{
    function sum(numbers) {
        let total = 0;
        numbers.forEach(num => {
            total += num;
        });
        return total;
    }
    console.log(sum([1, 2, 3, 4, 5]));
}

{
    const numbers = [1, 5, 10, 15, 20];
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 === 0) {
            isEvenIncluded = true;
            break;
        }
    }
    console.log(isEvenIncluded);
}

{
    function isEven(num) {
        return num % 2 === 0;
    }

    function isEvenIncluded(numbers) {
        let isEvenIncluded = false;
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (isEven(num)) {
                isEvenIncluded = true;
                break;
            }
        }
        return isEvenIncluded;
    }

    const array = [1, 5, 10, 15, 20];
    console.log(isEvenIncluded(array));
}

{
    function isEven(num) {
        return num % 2 === 0;
    }

    function isEvenIncluded(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (isEven(num)) {
                return true;
            }
        }
        return false;
    }
    const numbers = [1, 5, 10, 15, 20];
    console.log((isEvenIncluded(numbers)));
}

{
    function isEven(num) {
        return num % 2 === 0;
    }
    const numbers = [1, 5, 10, 15, 20];
    console.log(numbers.some(isEven));
}

{
    function isEven(num) {
        return num % 2 === 0;
    }

    function filterEven(numbers) {
        const results = [];
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (!isEven(num)) {
                continue;
            }
            results.push(num);
        }
        return results;
    }

    const array = [1, 5, 10, 15, 20];
    console.log(filterEven(array));
}

{
    function isEven(num) {
        return num % 2 === 0;
    }

    const array = [1, 5, 10, 15, 20];
    console.log(array.filter(isEven));
}

{
    const obj = {
        "a": 1,
        "b": 2,
        "c": 3
    };

    for (const key in obj) {
        const value = obj[key];
        console.log(`key:${key}, value:${value}`);
    }
}

{
    const obj = {
        "a": 1,
        "b": 2,
        "c": 3
    };
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        console.log(`key:${key}, value:${value}`);
    });
}

{
    const numbers = [5, 10];
    let total = 0;
    for (const num in numbers) {
        total += num;
    }
    console.log(total);
}

{
    const array = [1, 2, 3];
    for (const value of array) {
        console.log(value);
    }
}

{
    const str = "吉野家";
    for (const value of str) {
        console.log(value);
    }
}

{
    function sum(numbers) {
        return numbers.reduce((total, num) => {
            return total + num;
        }, 0);
    }
    console.log(sum([1, 2, 3, 4, 5]));
}