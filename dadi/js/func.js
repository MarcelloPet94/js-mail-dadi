let userName = prompt("Il tuo nome");
if(userName == "") {userName = "Nessuno";}

const startGame = document.getElementById("startGame");
const result = document.getElementById("result");
const scoreResult = document.getElementById("scoreResult");

let winMsg = "<h2>You wins!</h2>" + "<span>Your Score: </span>";
let loseMsg = "<h2>Computer Wins</h2>" + "<span>Computer Score: </span>";
let equalMsg = "<h2>Nobody wins</h2>";
let incrementUser = 0;
let incrementComp = 0;

startGame.addEventListener('click' , function() {
    
    let randNumb = Math.floor( Math.random()*6 + 1);
    let userNumb = Math.floor( Math.random()*6 + 1);

    console.log("Computer Number is: " + randNumb);
    console.log("Your Number is: " + userNumb);

    if(randNumb > userNumb) {
        result.innerHTML = loseMsg + randNumb;  
    }
    else if(randNumb < userNumb) {
        result.innerHTML = winMsg + userNumb;       
    }
    else {
        userNumb = 0;
        randNumb = 0;
        result.innerHTML = equalMsg;
    }
    


    if((incrementUser += userNumb) > (incrementComp += randNumb)) {

        scoreResult.innerHTML = 
        `
        <h3 class="winner">
        ${userName} score is: ${incrementUser += userNumb}
        </h3>
        <h3 class="loser">
        Computer score is: ${incrementComp += randNumb}
        </h3>
        `

    }

    else  {
        scoreResult.innerHTML = 
        `
        <h3 class="loser">
        ${userName} score is: ${incrementUser += userNumb}
        </h3>
        <h3 class="winner">
        Computer score is: ${incrementComp += randNumb}
        </h3>
        `
    }
     
});



// escono due serie di numeri random
// utente e computer hanno due numeri
// uno dei due ha il numero maggiore rispetto all'altro (o uguale)
// output: chi dei due ha il più alto?

