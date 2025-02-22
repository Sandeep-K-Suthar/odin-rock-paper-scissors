
// function as encapsulation    

// computer play 

console.log("Choose between {Rock, Paper, Scissors}\nPass the argument here as: humanDraw('Scissors')\n\nFor Example:"); //how to for console

let computerPlay = ["Rock", "Paper", "Scissors"];
function computerDraw() {
    let show = Math.floor(Math.random() * computerPlay.length);

    // human play
    function humanDraw(human) {
        console.log(`human choose: ${human}`);
        console.log(`computer choose: ${computerPlay[show]}`);
        if (human == computerPlay[show]) {

            console.log('Draw!');
        }
        else {
            // win stratgy
            switch (human) {

                case "Rock":
                    (computerPlay[show] == "Scissors") ?
                        console.log(`human wins!`) :
                        console.log(`computer wins!`);
                    break;
                case "Paper":
                    (computerPlay[show] == "Rock") ?
                        console.log(`human wins!`) :
                        console.log(`computer wins!`);
                    break;
                case "Scissors":
                    (computerPlay[show] == "Paper") ?
                        console.log(`human wins!`) :
                        console.log(`computer wins!`);
                    break;
            }
        }
    }
    humanDraw("Scissors");
}
computerDraw(computerPlay);


