// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

console.log('\n');

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow`);
    }

    return gifts;
}

wrapGifts(gifts);

// Assignment
// create a new, empty array to hold the messages
const blank = [];

function writeCards(peeps, event) {
    for (let i = 0; i < peeps.length; i++) {
        const msg = `Thank you, ${peeps[i]}, for the wonderful ${event} gift!`;
        blank[i] = msg;
    }
    return blank;
}

// Assignment
function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }    
}

