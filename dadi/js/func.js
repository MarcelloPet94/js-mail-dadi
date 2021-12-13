const startGame = document.getElementById("startGame");
const result = document.getElementById("result");

let winMsg = "<h2>You wins!</h2>" + "<span>Your Score: </span>";
let loseMsg = "<h2>Computer Wins</h2>" + "<span>Computer Score: </span>";
let equalMsg = "<h2>Nobody wins</h2>" + "<span>Evrybody score: </span>";

startGame.addEventListener('click' , function() {
    
    let randNumb = Math.floor( Math.random()*6 + 1);
    let userNumb = Math.floor( Math.random()*6 + 1);

    console.log("Computer Number is: " + randNumb);
    console.log("Your Number is: " + userNumb);

    if(randNumb > userNumb) {
        result.innerHTML = winMsg + randNumb;
        
    }
    else if(randNumb < userNumb) {
        result.innerHTML = loseMsg + userNumb;
    }
    else {
        result.innerHTML = equalMsg + userNumb;
    }

});



// escono due serie di numeri random
// utente e computer hanno due numeri
// uno dei due ha il numero maggiore rispetto all'altro (o uguale)
// output: chi dei due ha il più alto?

