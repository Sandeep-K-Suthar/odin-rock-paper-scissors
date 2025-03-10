

document.querySelector('.welcome').addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        document.querySelector('.welcome').style.display = 'none';
        document.querySelector('.play').style.display = 'flex';
    }
});
var i = 0;
var j = 0;
const humanCount = document.querySelector('.humanCount');
const computerCount = document.querySelector('.computerCount');

humanCount.innerText = 0;
computerCount.innerText = 0;

const play = document.querySelector('.play');
const reverse = play.cloneNode(true);
const resultAnnouncement = document.querySelector('.resultAnnouncement');


document.querySelectorAll('.bt1, .bt2, .bt3').forEach(button => {

    button.addEventListener('click', (e) => {
        document.querySelector('.result').style.display = 'flex';
        const event = e.target.innerText;
        const cpChoice = computerChoice();

        document.querySelector('.humanEntery').innerText = `Your choice: ${event}`;
        document.querySelector('.computerEntery').innerText = `Your choice: ${cpChoice}`;

        switch (event) {
            case 'Rock':
                if (cpChoice == 'Scissors') {
                    humanCount.innerText = ++i;
                }
                else if (cpChoice == 'Paper') {
                    computerCount.innerText = ++j;
                }
                break;
            case 'Paper':
                if (cpChoice == 'Rock') {
                    humanCount.innerText = ++i;
                }
                else if (cpChoice == 'Scissors') {
                    computerCount.innerText = ++j;
                }
                break;
            case 'Scissors':
                if (cpChoice == 'Paper') {
                    humanCount.innerText = ++i;
                }
                else if (cpChoice == 'Rock') {
                    computerCount.innerText = ++j;
                }
                break;

            default:
                break;
        }
        if (i > 4 || j > 4) {
            console.log(i, j, 'you won!');
            i = 0;
            j = 0;

            play.replaceChildren(...resultAnnouncement.children);

            document.querySelector('.play button').addEventListener('click', (e) => {
                // if (e.target.tagName == 'BUTTON') {
                    play.replaceChildren(...reverse.children);
                    humanCount.innerText = 0;
                    computerCount.innerText = 0;
                    
                // }
                
                console.log(play.innerHTML);
            });
        };
    });
});

const computerChoice = () => {
    const select = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random(select) * select.length);

    return (select[choice]);
}
