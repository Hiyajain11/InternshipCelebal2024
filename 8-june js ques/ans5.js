// 5. Write a JavaScript program to check the total marks of a student in various
// examinations. The student will get A+ grade if the total marks are in the
// range 89..100 inclusive, if the examination is "Final-exam." the student will
// get A+ grade and total marks must be greater than or equal to 90. Return
// true if the student get A+ grade or false otherwise.


let physics=90;
let maths=85;
let chemistry=95;
let percentage=(physics+maths+chemistry)/3;

if(percentage>=89 && percentage<=100){
    
        console.log("A+ grade");
        return true;
}


else{
    console.log("Not A+ grade");
    return false;
}