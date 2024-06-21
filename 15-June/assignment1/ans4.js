// 4. Sort an array by both ascending and descending order?

let arr=[7,5,3,9,1];
console.log("Original array: ",arr);
// Ascending order
// arr.sort((a,b)=>a-b);
// console.log("Ascending order: ",arr);
// // Descending order
// arr.sort((a,b)=>b-a);
// console.log("Descending order: ",arr);

console.log(arr.sort());
arr=arr.sort();
console.log(arr.reverse());
