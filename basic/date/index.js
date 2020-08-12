"use strict";

{
    const now = new Date();
    console.log(Date.now());

    console.log(now.getTime());
    console.log(now.toISOString());
}

{
    const date = new Date(1136214245999);
    console.log(date.toISOString());
}

{
    const inUTC = new Date("2006-01-02T15:04:05.999Z");
    console.log(inUTC.toISOString());

    const inLocal = new Date("2006-01-02T15:04:05.999");
    console.log(inLocal.toISOString());
}

{
    const date1 = new Date(2006, 0, 2, 15, 4, 5, 999);
    console.log(date1.toISOString());

    const ms = Date.UTC(2006, 0, 2, 15, 4, 5, 999);
    const date2 = new Date(ms);
    console.log(date2.toISOString());
}

{
    const invalid = new Date("");
    console.log(invalid.getTime());
    console.log(invalid.toString());
}

{
    function formatDate(date) {
        const yyyy = String(date.getFullYear());
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        return `${yyyy}/${mm}/${dd}`;
    }

    const date = new Date("2006-01-02T15:04:05.999");
    console.log(formatDate(date));
}

{
    const now = new Date();
    const timezoneOffsetInHours = now.getTimezoneOffset() / 60;
    console.log(`Hours in UTC: ${now.getHours() + timezoneOffsetInHours}`);
}
