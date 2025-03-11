


let i = 0;
let j = 0;

const play = document.querySelector('.play');
const choose = document.querySelector('.choose');
const resultAnnouncement = document.querySelector('.resultAnnouncement');
const resultAnnouncementText = document.querySelector('.resultAnnouncement h3');
const humanCount = document.querySelector('.humanCount');
const computerCount = document.querySelector('.computerCount');

humanCount.innerText = i;
computerCount.innerText = j;


document.querySelector('.welcome button').addEventListener('click', (e) => {
    document.querySelector('.welcome').style.display = 'none';
    play.style.display = 'flex';
    choose.style.display = 'flex';
    callLogic();
});


function callLogic() {
    document.querySelectorAll('.bt1, .bt2, .bt3').forEach(button => {
        button.addEventListener('click', gameLogic);
    });

}

function gameLogic(e) {
    document.querySelector('.result').style.display = 'flex';
    const event = e.target.innerText;
    const cpChoice = computerChoice();

    document.querySelector('.humanEntery').innerText = `Your choice: ${event}`;
    document.querySelector('.computerEntery').innerText = `Computer choice: ${cpChoice}`;

    const winningStrategy = {
        'Rock': 'Scissors',
        'Paper': 'Rock',
        'Scissors': 'Paper',
    }

    if (winningStrategy[event] !== winningStrategy[cpChoice]) {
        document.querySelector('.tie p').innerText = '';
    }
    if (winningStrategy[event] === cpChoice) {
        humanCount.innerText = ++i;
        humanCount.classList.remove('score-update');
        setTimeout(() => {
            humanCount.classList.add('score-update');
        }, 10);
    }
    else if (winningStrategy[cpChoice] === event) {
        computerCount.innerText = ++j
        computerCount.classList.remove('score-update');
        setTimeout(() => {
            computerCount.classList.add('score-update');
        }, 10);
    }
    else if (winningStrategy[event] === winningStrategy[cpChoice]) {
        document.querySelector('.tie p').innerText = 'Tie!';
    }

    if (i > 4 || j > 4) {
        console.log(i, j, 'you won!');
        choose.style.display = 'none';
        resultAnnouncement.style.display = 'flex';
        if (i > 4) {

            announcementAnimation();

            resultAnnouncementText.innerText = 'You Won!'
            play.style.background = 'linear-gradient(to right, #348f50, #56b4d3)';

        }
        else {
            announcementAnimation();
            resultAnnouncementText.innerText = 'You Loose!'
            play.style.background = 'rgba(239, 70, 58, 0.88)';
        }
        i = 0;
        j = 0;
    };
};

document.querySelector('.resultAnnouncement button').addEventListener('click', () => {
    choose.style.display = 'flex';
    resultAnnouncement.style.display = 'none';
    play.style.background = 'rgba(255, 255, 255, 0.3)';

    humanCount.innerText = i;
    computerCount.innerText = j;
});


const computerChoice = () => {
    const select = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * select.length);
    return (select[choice]);
}

function announcementAnimation() {
    setTimeout(() => {
        resultAnnouncementText.classList.add('grow');
    }, 10);
    resultAnnouncementText.addEventListener('transitionend', () => {
        resultAnnouncementText.classList.remove('grow');
    })

}






