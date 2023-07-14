const audio = new Audio();
const sfx = ["../audio/dice0.mp3", "../audio/dice1.mp3", "../audio/dice2.mp3","../audio/dice3.mp3", "../audio/dice4.mp3"];


function print(x){
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = x;
}

const d4 = {
    sides: 4,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d6 = {
    sides: 6,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d8 = {
    sides: 8,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d10 = {
    sides: 10,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d12 = {
    sides: 12,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d20 = {
    sides: 20,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

const d100 = {
    sides: 100,
    roll: function(){var result = Math.floor(Math.random() * this.sides) + 1; return result;}
}

function go(sides){
    var diceN = Math.floor(Math.random() * sfx.length);
    audio.src = sfx[diceN];
    audio.currentTime = 0;
    var result = sides.roll();
    audio.play();
    print(result);
}