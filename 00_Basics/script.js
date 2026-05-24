console.log("Hello World");
console.log(5 + 4);
console.log(typeof 5);
console.log(parseInt("100dksfnjnsd"));

const a = "" + 100;
console.log(typeof a); // string

const b = 100 + "";
console.log(typeof b); // string

const c = + "100";
console.log(typeof c); // number

const d = Number("100");
console.log(typeof d); // number

const e = String(100);
console.log(typeof e); // string

const f = "100dfjbjds";
console.log(Number(f)); // NaN

const g = parseInt("100dfjbjds");
console.log(g); // 100
console.log(typeof g); // number

const h = parseInt("dfjbjds100");
console.log(h); // NaN

console.log(typeof NaN); // number

const i = true;
console.log(i); // true
console.log(typeof i); // boolean

const j = +false;
console.log(j); // 0
console.log(typeof j); // number

const k = +true;
console.log(k); // 1
console.log(typeof k); // number