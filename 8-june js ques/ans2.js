// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f =
// temperature in Fahrenheit ]
// Expected Output :
// 60Â°C is 140 Â°F
// 45Â°F is 7.222222222222222Â°C

let f=45;
let c;
c = (f-32)*5/9;
console.log(f+"Â°F is "+c+" Â°C");


c=60;
f = c*9/5+32;
console.log(c+"Â°C is "+f+" Â°F");


