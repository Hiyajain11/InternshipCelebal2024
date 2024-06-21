// 2. Swap two numbers by reference?

function swap(obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
}

let obj = { a: 10, b: 20 };
console.log("Before swap: x = " + obj.a + ", y = " + obj.b);
swap(obj);
console.log("After swap: x = " + obj.a + ", y = " + obj.b);

