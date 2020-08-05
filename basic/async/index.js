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
