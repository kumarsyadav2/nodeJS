const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("my name is saurabh");
});

event.on("sayMyName", () => {
    console.log("my middle name is Kumar");
});

event.on("sayMyName", () => {
    console.log("My last name is Yadav");
});

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("sayMyName");
event.emit("checkPage", 200, "ok");