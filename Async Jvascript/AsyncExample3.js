console.log("Hello world");
for(let i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log("Timer done");
    }, 10);
}
for (let i = 0; i < 100000000; i++) {
  // some task ... // 10 sec.
}
console.log("End");
