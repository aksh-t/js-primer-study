// # 二項演算子
console.log(1 + 1)
console.log(10 + 0.5)

{
    const value = "文字列" + "結合"
    console.log(value)
}

console.log(1 - 1)
console.log(10 - 0.5)

console.log(2 * 8)
console.log(10 * 0.5)

console.log(8 / 2)
console.log(10 / 0.5)

console.log(8 % 2)
console.log(9 % 2)
console.log(10 % 0.5)
console.log(10 % 4.5)

console.log(2 ** 4)
console.log(Math.pow(2, 4))

// # 単行演算子
console.log(+1)
console.log(+"1")
console.log(+"文字列")

console.log(NaN === NaN)
console.log(typeof NaN)
console.log(Number.isNaN(NaN))

console.log(-1)
console.log(-(-1))
console.log(-"1")
console.log(-"文字列")

{
    let num = 1
    num++
    console.log(num)
}

{
    let x = 1
    console.log(x++)
    console.log(x)
}

{
    let x = 1
    console.log(++x)
    console.log(x)
}

{
    let num = 1
    num--
    console.log(num)
}

{
    let x = 1
    console.log(x--)
    console.log(x)
}

{
    let y = 1
    console.log(--y)
    console.log(y)
}

// # 比較演算子
console.log(1 === 1)
console.log(1 === "1")

{
    const objA = {}
    const objB = {}
    console.log(objA === objB)
    console.log(objA === objA)
}

console.log(1 !== 1)
console.log(1 !== "1")

console.log(1 == 1)
console.log("str" == "str")

{
    const objA = {}
    const objB = {}
    console.log(objA == objB)
    console.log(objA == objA)
}

console.log(1 == "1")
console.log(1 == "01")
console.log(0 == false)
console.log(0 == null)
console.log(null == undefined)

{
    const value = undefined
    if (value === null || value === undefined) {
        console.log("valueがnullまたはundefinedである場合の処理")
    }
    if (value == null) {
        console.log("valueがnullまたはundefinedである場合の処理")
    }
}

console.log(1 != 1)
console.log("str" != "str")
console.log("JavaScript" != "ECMAScript")
console.log(true != true)
{
    const objA = {}
    const objB = {}
    console.log(objA != objB)
    console.log(objA != objA)
}

console.log(1 != "1")
console.log(0 != false)
console.log(0 != null)
console.log(null != undefined)

console.log(42 > 21)
console.log(42 > 42)

console.log(42 >= 21)
console.log(42 >= 42)
console.log(42 >= 43)

console.log(21 < 42)
console.log(42 < 42)

console.log(21 <= 42)
console.log(42 <= 42)
console.log(43 <= 42)

// # ビット演算子
console.log(0b0000000000000000000000000001001)
console.log((9).toString(2))

console.log(0b11111111111111111111111111110111)
console.log((-9 >>> 0).toString(2))

console.log(15 & 9)
console.log(0b1111 & 0b1001)

console.log(15 | 9)
console.log(0b1111 | 0b1001)

console.log(15 ^ 9)
console.log(0b1111 ^ 0b1001)

console.log(~15)
console.log(~0b1111)

{
    const str = "森森本森森"
    console.log(str.indexOf("本"))
    console.log(str.indexOf("火"))
}

console.log(~0)
console.log(~(-1))

{
    const str = "森森木森森"
    if (str.indexOf("木") !== -1) {
        console.log("木を見つけました")
    }
    if (~str.indexOf("木")) {
        console.log("木を見つけました")
    }
}

{
    const str = "森森木森森"
    if (str.includes("木")) {
        console.log("木を見つけました")
    }
}

console.log(9 << 2)
console.log(0b1111 << 2)

console.log((-9) >> 2)

console.log((-9) >>> 2)

// # 代入演算子
{
    let x = 1
    x = 42
    console.log(x)
}

{
    let num = 1
    num += 10
    console.log(num)
}

{
    const array = [1, 2]
    const [a, b] = array
    console.log(a)
    console.log(b)
}

{
    const array = [1, 2]
    const a = array[0]
    const b = array[1]
}

{
    const obj = {
        "key": "value"
    }
    const { key } = obj
    console.log(key)
}

{
    const obj = {
        "key": "value"
    }
    const key = obj.key
}

// # 条件(三項)演算子
{
    const valueA = true ? "A" : "B"
    console.log(valueA)
    const valueB = false ? "A" : "B"
    console.log(valueB)
}

{
    function addPrefix(text, prefix) {
        const pre = typeof prefix === "string" ? prefix : "デフォルト"
        return pre + text
    }
    console.log(addPrefix("文字列"))
    console.log(addPrefix("文字列", "カスタム"))
}

// # 論理演算子
{
    const x = true
    const y = false
    console.log(x && y)
    console.log(y && x)
}

{
    const value = "str"
    if (typeof value === "string" && value === "str") {
        console.log(`${value} is stirng value`);
    }

    if (typeof value === "string"){
        if (value === "str") {
            console.log(`${value} is string value`)
        }
    }
}

{
    const x = true
    const y = false
    console.log(x || y)
    console.log(y || x)
}

{
    const value = 1
    if (value === 0 || value === 1) {
        console.log("valueは0または1です。")
    }
}

console.log(!false)
console.log(!true)

{
    const str = ""
    console.log(!!str)
}

{
    const str = ""
    console.log(str.length > 0)
}

// [ES2020] Nullish coalescing演算子(??)
{
    // 左辺がnullishであるため、右辺の値の評価結果を返す
    console.log(null ?? "右辺の値"); // => "右辺の値"
    console.log(undefined ?? "右辺の値"); // => "右辺の値"
    // 左辺がnullishではないため、右辺の値の評価結果を返す
    console.log(true ?? "右辺の値"); // => true
    console.log(false ?? "右辺の値"); // => false
    console.log(0 ?? "右辺の値"); // => 0
    console.log("文字列" ?? "右辺の値"); // => "文字列"
}

// # グループ化演算子
{
    const a = 1
    const b = 2
    const c = 3
    console.log(a + b * c)
    console.log((a + b) * c)
}

// # カンマ演算子
{
    const x = (2, 3);
    console.log(x)
}