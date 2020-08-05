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