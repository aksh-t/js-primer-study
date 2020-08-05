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
