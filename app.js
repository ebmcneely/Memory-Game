let cardClicked = null;
let matches = 0;

const colors = ["red", "green", "blue", "orange", "cyan", "pink", "yellow", "teal"];

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += `${color} `;
    cardA.setAttribute('data-color', color);
        
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += `${color} `;
    cardB.setAttribute('data-color', color);
}

function whenClicked(e) {
    const target = e.currentTarget;

    if (target === cardClicked || target.className.includes('done')) {
        return;
    }
    else {
        target.className = target.className.replace('background-hidden', '');
        target.className += 'done';
    }
    
    console.log(target);    
    console.log(target.getAttribute('data-color'));

    if (!cardClicked) {
        cardClicked = target;
        console.log(cardClicked);
    }
    else if (cardClicked) {
        if (cardClicked.getAttribute('data-color') === target.getAttribute('data-color')) {
            cardClicked = null;
            matches++;
            if (matches === 8) {
                alert('YOU WIN!!!');
            };
        }
        else {
            console.log('cards not equal');
            setTimeout(function () {
                console.log('we are here');
                cardClicked.className = cardClicked.className.replace('done', '') + 'background-hidden';
                target.className = target.className.replace('done', '') + 'background-hidden';
                cardClicked = null;
            }, 1000);
        }
    }
}