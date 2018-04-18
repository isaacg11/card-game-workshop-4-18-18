let message = document.getElementById('message');
let card1Name = document.getElementById('card1Name');
let card1Level = document.getElementById('card1Level');
let card1Img = document.getElementById('card1Img');
let card2Name = document.getElementById('card2Name');
let card2Level = document.getElementById('card2Level');
let card2Img = document.getElementById('card2Img');
let btn = document.getElementById('btn');

const hand1 = [
    {name: 'wizard', level: 1, img: './images/wizard.jpg'},
    {name: 'elf', level: 2, img: './images/elf.jpg'},
    {name: 'ogre', level: 3, img: './images/ogre.jpg'}
];

const hand2 = [
    {name: 'goblin', level: 1, img: './images/goblin.jpg'},
    {name: 'witch', level: 2, img: './images/witch.jpg'},
    {name: 'dragon', level: 3, img: './images/dragon.jpg'}
];

message.innerHTML = 'Player 1, please draw';

function draw() {
    btn.disabled = true;
    message.innerHTML = 'Player 1 is drawing...';
    let card1 = Math.round(Math.random() * 2);
    setTimeout(function() {
        card1Name.innerHTML = 'Name: ' + hand1[card1].name;
        card1Level.innerHTML = 'Level: ' + hand1[card1].level;
        card1Img.src = hand1[card1].img;
        message.innerHTML = 'Player 2 is drawing...';
        setTimeout(function() {
            let card2 = Math.round(Math.random() * 2);   
            card2Name.innerHTML = 'Name: ' + hand2[card2].name;
            card2Level.innerHTML = 'Level: ' + hand2[card2].level;
            card2Img.src = hand2[card2].img;

            if(hand1[card1].level > hand2[card2].level) {
                message.innerHTML = 'Player 1 wins!';
            } else if(hand2[card2].level > hand1[card1].level) {
                message.innerHTML = 'Player 2 wins!';                
            } else if(hand1[card1].level === hand2[card2].level) {
                message.innerHTML = 'Its a tie!'; 
            }

            setTimeout(function() {
                btn.disabled = false;                
            }, 2000)
        }, 2000)
    }, 2000)

}

