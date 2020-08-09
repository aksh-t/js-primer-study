"use strict";

{
    const map = new Map();
    console.log(map.size);
}

{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    console.log(map.size);
}

{
    const map = new Map();
    map.set("key", "value1");
    console.log(map.size);
    console.log(map.get("key"));

    map.set("key", "value2");
    console.log(map.get("key"));

    console.log(map.has("key"));
    console.log(map.has("foo"));
}

{
    const map = new Map();
    map.set("key1", "value1");
    map.set("key2", "value2");
    console.log(map.size);
    map.delete("key1");
    console.log(map.size);
    map.clear();
    console.log(map.size);
}

{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const results = [];
    map.forEach((value, key) => {
        results.push(`${key}:${value}`);
    });
    console.log(results);
}

{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const keys = [];
    for (const key of map.keys()) {
        keys.push(key);
    }
    console.log(keys);
    const keysArray = Array.from(map.keys());
    console.log(keysArray);
}

{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const entries = [];
    for (const [key, value] of map.entries()) {
        entries.push(`${key}:${value}`);
    }
    console.log(entries);
}

{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const results = [];
    for (const [key, value] of map) {
        results.push(`${key}:${value}`);
    }
    console.log(results);
}

{
    const map = {};

    function has(key) {
        return typeof map[key] !== "undefined";
    }
    console.log(has("foo"));
    console.log(has("constructor"));
}

{
    class ShoppingCart {
        constructor() {
            this.items = new Map();
        }
        addItem(item) {
            const count = this.items.get(item) || 0;
            this.items.set(item, count + 1);
        }
        getTotalPrice() {
            return Array.from(this.items).reduce((total, [item, count]) => {
                return total + item.price * count;
            }, 0);
        }
        toString() {
            return Array.from(this.items).map(([item, count]) => {
                return `${item.name}:${count}`;
            });
        }
    }
    const shoppingCart = new ShoppingCart();
    const shopItems = [
        { name: "みかん", price: 100 },
        { name: "リンゴ", price: 200 }
    ];

    shoppingCart.addItem(shopItems[0]);
    shoppingCart.addItem(shopItems[0]);
    shoppingCart.addItem(shopItems[1]);

    console.log(shoppingCart.getTotalPrice());
    console.log(shoppingCart.toString());
}

{
    function sendPOSTRequest(url, data) {
        const httpRequest = new XMLHttpRequest();
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify(data));
        httpRequest.open("POST", url);
    }

    function onLoginFormSubmit(event) {
        const form = event.target;
        const data = {
            userName: form.elements.userName,
            password: form.elements.password,
        };
        sendPOSTRequest("/api/login", data);
    }
}

{
    const map = new WeakMap();
    let obj = {};
    map.set(obj, "value");
    obj = null;
}

{
    const listenersMap = new WeakMap();

    class EventEmitter {
        addListener(listener) {
            const listeners = listenersMap.get(this) || [];
            const newListeners = listeners.concat(listener);
            listenersMap.set(this, newListeners);
        }
    }

    let eventEmitter = new EventEmitter();
    eventEmitter.addListener(() => {
        console.log("イベントが発火しました");
    });
    eventEmitter = null;
}

{
    const cache = new WeakMap();

    function getHeight(element) {
        if (cache.has(element)) {
            return cache.get(element);
        }
        const height = element.getBoundingClientRect().height;
        cache.set(element, heigt);
        return height;
    }
}

{
    const map = new Map();
    map.set(NaN, "value");
    console.log(NaN === NaN);
    console.log(map.has(NaN));
    console.log(map.get(NaN));
}