"use strict";

// 同期処理
{
    function blockTime(timeout) {
        const startTime = Date.now();
        while (true) {
            const diffTime = Date.now() - startTime;
            if (diffTime >= timeout) {
                return;
            }
        }
    }
    console.log("処理を開始");
    blockTime(1000);
    console.log("この行が呼ばれるまで処理が1秒間ブロックされる");
}
// 同期的にブロックする処理があると、ブラウザのメインスレッドがブロックされる

// 非同期処理
{
    function blockTime(timeout) {
        const startTime = Date.now();
        while (true) {
            const diffTime = Date.now();
            if (diffTime >= timeout) {
                return;
            }
        }
    }

    console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
    setTimeout(() => {
        console.log("3. ブロックする処理を開始します");
        blockTime(1000);
        console.log("4. ブロックする処理が完了しました");
    }, 10);
    console.log("2. 同期的な処理を実行します");
}

// 非同期処理はメインスレッドで実行される
{
    function blockTime(timeout) {
        const startTime = Date.now();
        while (true) {
            const diffTime = Date.now() - startTime;
            if (diffTime >= timeout) {
                return;
            }
        }
    }

    const startTime = Date.now();
    setTimeout(() => {
        const endTime = Date.now();
        console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
    }, 10);
    console.log("ブロックする処理を開始します");
    blockTime(1000);
    console.log("ブロックする処理が完了しました");
}

// 非同期処理と例外処理
{
    try {
        setTimeout(() => {
            // ↓catchされない
            // throw new Error("非同期なエラー");
        }, 10);
    } catch (error) {
        console.log("非同期エラーはキャッチされないため、この行は実行されません");
    }
    console.log("この行は実行されます");
}

{
    setTimeout(() => {
        try {
            throw new Error("エラー");
        } catch (error) {
            console.log("エラーをキャッチできる");
        }
    }, 10);
    console.log("この行は実行されます");
    // このやり方だと非同期処理の外からは非同期処理の中で例外が発生したかがわからない
}

// エラーファーストコールバック
try {
    fs.readFile("./example.txt", (error, data) => {
        if (error) {
            // 読み込み中にエラーが発生しました
        } else {
            // データを読み込むことができました
        }
    });
} catch (e) {
    // ↑はNode.jsのAPIをコールしていてブラウザで実行すると例外が出るので、握り潰す
}

{
    /**
     * 1000ミリ秒未満のランダムなタイミングでレスポンスを擬似的にデータ取得する関数
     * 指定した`path`にデータがある場合は`callback(null, レスポンス)`を呼ぶ
     * 指定した`path`にデータがない場合は`callback(エラー)`を呼ぶ
     */
    function dummyFetch(path, callback) {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                callback(null, { body: `Response body of ${path}` });
            } else {
                callback(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    }

    dummyFetch("/success/data", (error, response) => {
        if (error) {
            // この行は実行されません
        } else {
            console.log(response);
        }
    });

    dummyFetch("failure/data", (error, response) => {
        if (error) {
            console.log(error.message);
        } else {
            // この行が実行されません
        }
    });
}

{
    // 成功用と失敗用の2つのコールバックを受け取るスタイル
    /**
     * リソースの取得に成功した場合は`successCallback(レスポンス)`を呼び出す
     * リソースの取得に失敗した場合は`failureCallback(エラー)`を呼び出す
     */
    function dummyFetch(path, successCallback, failureCallback) {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                successCallback({ body: `Response body of ${path}` });
            } else {
                failureCallback(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    }

    dummyFetch("/success/data",
        (response) => { console.log(response); },
        (error) => { console.log(error.message); }
    );

    dummyFetch("failure/data",
        (response) => { console.log(response); },
        (error) => { console.log(error.message); }
    );
}

// [ES2015] Promise
try {
    // エラーファーストコールバックを受け取る非同期処理の例
    asyncTask((error, result) => {
        if (error) {
            // 非同期処理が失敗したときの処理
        } else {
            // 非同期処理が成功したときの処理
        }
    });
} catch (e) {
}

try {
    // Promise
    asyncPromiseTask().then(() => {
        // 非同期処理が成功したときの処理
    }).catch(() => {
        // 非同期処理が失敗したときの処理
    });
} catch (e) {
}

// Promiseインスタンスの作成
{
    const executer = (resolve, reject) => {
        // 非同期の処理が成功したときはresolveを呼ぶ
        // 非同期の処理が失敗したときはrejectを呼ぶ
    };
    const promise = new Promise(executer);
}

{
    const promise = new Promise((resolve, reject) => {
        // 非同期の処理が成功したときはresolve()を呼ぶ
        // 非同期の処理が失敗したときはreject()を呼ぶ
    });
    const onFulfilled = () => {
        console.log("resolveされたときに呼ばれる");
    };
    const onRejected = () => {
        console.log("rejectされたときに呼ばれる");
    };
    promise.then(onFulfilled, onRejected);
}

// Promise#thenとPromise#catch
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/success")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            });
        }, 1000 * Math.random());
    }

    dummyFetch("/success/data").then(function onFulfilled(response) {
        console.log(response);
    }, function onRejected(error) {
        // この行は実行されません
    });
    dummyFetch("/failure/data").then(function onFulfilled(response) {
        // この行は実行されません
    }, function onRejected(error) {
        console.log(error);
    });
}

{
    function delay(timeoutMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                setTimeout(() => {
                    resolve();
                }, timeoutMs);
            });
        });
    }
    delay(10).then(() => {
        console.log("10ミリ秒後に呼ばれる");
    });
}

{
    function errorPromise(message) {
        return new Promise((resolve, reject) => {
            reject(new Error(message));
        });
    }
    // 非推奨
    errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
        console.log(error.message);
    });

    // 推奨
    errorPromise("catchでエラーハンドリング").catch(error => {
        console.log(error.message);
    });
}

// Promiseと例外
{
    function throwPromise() {
        return new Promise((resolve, reject) => {
            throw new Error("例外が発生");
        });
    }

    throwPromise().catch(error => {
        console.log(error.message);
    });
}

// Promiseの状態
// 3つの状態
// Fulfilled <- Settled(不変)
// Rejected <- Settled(不変)
// Pending
{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject(new Error("エラー"));
        }, 16);
    });
    promise.then(() => {
        console.log("Fulfilledとなった");
    }, (error) => {
        // この行は呼び出されない
    });
}

{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            resolve();
        }, 16);
    });
    promise.then(() => {
        console.log("最初のresolve時に一度だけ呼ばれる");
    }, (error) => {
        // この行は呼び出されない
    });
}

// Promise.resolve
// テストでよく使う
{
    // 糖衣構文
    const fulfilledPromise = Promise.resolve();
}

{
    const fulFilledPromise = new Promise((resolve) => {
        resolve();
    });
}

{
    const fulFilledPromise = Promise.resolve(42);
    fulFilledPromise.then(value => {
        console.log(value);
    });
}

{
    const promise = Promise.resolve();
    promise.then(() => {
        console.log("2. コールバック関数が実行されました");
    });
    console.log("1. 同期的な処理が実行されました");
}

{
    const promise = new Promise((resolve) => {
        console.log("1. resolveします");
        resolve();
    });
    promise.then(() => {
        console.log("3. コールバック関数が実行されました");
    });
    console.log("2. 同期的な処理が行われました");
}

// Promise.reject
// テストでよく使う & PromiseチェーンにおけるPromiseの状態操作
{
    const rejectedPromise = Promise.reject(new Error("エラー"));
}

{
    const rejectedPromise = new Promise((resolve, reject) => {
        reject(new Error("エラー"));
    });
}

{
    Promise.reject(new Error("エラー")).catch(() => {
        console.log("2. コールバック関数が実行されました");
    });
    console.log("1. 同期的な処理が実行されました");
}

// Promiseチェーン
{
    Promise.resolve()
        .then(() => {
            console.log(1);
        })
        .then(() => {
            console.log(2);
        });
}

{
    const firstPromise = Promise.resolve();
    const secondPromise = firstPromise.then(() => {
        console.log(1);
    });
    const thirdPromise = secondPromise.then(() => {
        console.log(2);
    });
    console.log(firstPromise === secondPromise);
    console.log(secondPromise === thirdPromise);
}

{
    function asyncTask() {
        return Math.random() > 0.5
            ? Promise.resolve("成功")
            : Promise.reject(new Error("失敗"));
    }

    asyncTask()
        .then(function onFulfilled(value) {
            console.log(value);
        })
        .catch(function onRejected(error) {
            console.log(error.message);
        });
}

{
    const rejectedPromise = Promise.reject(new Error("失敗"));
    rejectedPromise.then(() => {
        // このthenのコールバック関数は呼び出されません
    }).then(() => {
        // このthenのコールバック関数は呼び出されません
    }).catch(error => {
        console.log(error.message);
    });
}

{
    Promise.resolve().then(() => {
        throw new Error("例外");
    }).then(() => {
        // このthenのコールバック関数は呼び出されません
    }).catch(error => {
        console.log(error.message);
    });
}

{
    Promise.reject(new Error("エラー")).catch(error => {
        console.log(error);
    }).then(() => {
        console.log("thenのコールバック関数が呼び出される");
    });
}

// Promiseチェーンで値を返す
{
    Promise.resolve(1).then((value) => {
        console.log(value);
        return value * 2;
    }).then(value => {
        console.log(value);
        return value * 2;
    }).then(value => {
        console.log(value);
    }).then(value => {
        console.log(value);
    });
}

{
    Promise.reject(new Error("失敗")).catch(error => {
        return 1;
    }).then(value => {
        console.log(value);
        return value * 2;
    }).then(value => {
        console.log(value);
    });
}

// コールバック関数でPromiseインスタンスを返す
{
    Promise.resolve().then(function onFulfilledA() {
        return Promise.reject(new Error("失敗"));
    }).then(function onFulfilledB() {
        console.log("onFulfilledBは呼び出されません");
    }).catch(function onRejected(error) {
        console.log(error.message);
    }).then(function onFulfilledC() {
        console.log("onFulFilledCは呼び出されます");
    });
}

{
    function main() {
        return Promise.reject(new Error("エラー"));
    }

    main().catch(error => {
        console.log(error);
        return Promise.reject(error);
    }).then(() => {
        // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
    }).catch(error => {
        console.log("メインの処理が失敗した");
    });
}

// [ES2018] Promiseチェーンの最後に処理を書く
{
    const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
    promise.then(() => {
        console.log("Promise#then");
    }).catch((error) => {
        console.log("Promise#catch");
    }).finally(() => {
        console.log("Promise#finally");
    });
}

{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.randome());
        });
    }

    let isLoading = true;
    dummyFetch("/resource/A").then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    }).finally(() => {
        isLoading = false;
        console.log("Promise#finally");
    });
}

// Promiseチェーンで逐次処理
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ bode: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            });
        }, 1000 * Math.random());
    }

    const result = [];
    dummyFetch("/resource/A").then(response => {
        result.push(response.body);
        return dummyFetch("/resource/B");
    }).then(response => {
        result.push(response.body);
    }).then(() => {
        console.log(results);
    });
}

// Promise.allで複数のPromiseをまとめる
{
    function delay(timeoutMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timeoutMs);
            }, timeoutMs);
        });
    }
    const promise1 = delay(1);
    const promise2 = delay(2);
    const promise3 = delay(3);

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        console.log(values);
    });
}

{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }

    const fetchedPromise = Promise.all([
        dummyFetch("/resource/A"),
        dummyFetch("/resource/B")
    ]);
    fetchedPromise.then(([responseA, responseB]) => {
        console.log(responseA.body);
        console.log(responseB.body);
    });
}

{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }

    const fetchedPromise = Promise.all([
        dummyFetch("resource/A"),
        dummyFetch("/not_found/B")
    ]);
    fetchedPromise.then(([responseA, responseB]) => {
        // この行は実行されません
    }).catch(error => {
        console.error(error);
    });
}

// Promise.race
{
    function delay(timeoutMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timeoutMs);
            }, timeoutMs);
        });
    }

    const racePromise = Promise.race([
        delay(1),
        delay(32),
        delay(64),
        delay(128)
    ]);
    racePromise.then(value => {
        console.log(value);
    });
}

{
    function timeout(timeoutMs) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
            }, timeoutMs);
        });
    }
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }

    Promise.race([
        dummyFetch("/resource/data"),
        timeout(500)
    ]).then(response => {
        console.log(response.body);
    }).catch(error => {
        console.log(error.message);
    });

}

// [ES2017] Async Function
{
    async function doAsync() {
        return "値";
    }

    doAsync().then(value => {
        console.log(value);
    });
}

// Async Functionの定義
{
    // 関数宣言
    async function fn1() { }
    // 関数式
    const fn2 = async function () { };
    // Arrow Function
    const fn3 = async () => { };
    // メソッドの短縮記法
    const obj = { async MSInputMethodContext() { } };
}

// Async FunctionはPromiseを返す
{
    async function resolveFn() {
        return "返り値";
    }
    resolveFn().then(value => {
        console.log(value);
    });

    async function rejectFn() {
        return Promise.reject(new Error("エラーメッセージ"));
    }
    rejectFn().catch(error => {
        console.log(error.message);
    });

    async function exceptionFn() {
        throw new Error("例外が発生しました");
    }
    exceptionFn().catch(error => {
        console.log(error.message);
    });
}