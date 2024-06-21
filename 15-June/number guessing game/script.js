let secretNumber = Math.floor(Math.random()*100)+1;
let chances = 10;

function checkGuess(){
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if(isNaN(userGuess)|| userGuess<1 || userGuess>100){
        document.getElementById("result").innerHTML="Please enter a number between 1 and 100";
        return;
    }
    chances--;

    if(userGuess===secretNumber){
        document.getElementById("result").style.color="green";
        document.getElementById("result").innerHTML="Congratulations! You guessed the number in ";
        disableInputAndButton();
    }
    else{
        const hint = userGuess > secretNumber ? "lower" : "higher";
        document.getElementById("result").innerHTML =`Try again! The secret number is ${hint}`;
        document.getElementById("chances").innerHTML =  chances;
    }
    if(chances===0){
        document.getElementById("result").innerHTML = `Sorry, you've run out of chances. The correct number was ${secretNumber};`
        disableInputAndButton();
    }
}

function disableInputAndButton(){
    document.getElementById("userGuess").disabled = true;
    document.getElementById("button").disabled = true;
}
function replay(){
    secretNumber = Math.floor(Math.random()*100)+1;
    chances=10;
    document.getElementById("userGuess").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("result").style.color="red";
    document.getElementById("chances").innerHTML = chances;
    document.getElementById("userGuess").disabled = false;
    document.getElementById("button").disabled = false;
}