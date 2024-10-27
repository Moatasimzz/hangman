
let wg = 0;


const hangImg = document.getElementById('hang');
const bodyParts = {
    head: document.querySelector('.head'),
    body: document.querySelector('.body'),
    leftHand: document.querySelector('.left-hand'),
    rightHand: document.querySelector('.right-hand'),
    leftLeg: document.querySelector('.left-leg'),
    rightLeg: document.querySelector('.right-leg'),
};


function updateHangman() {
    wg++;
    switch (wg) {
        case 1:
            bodyParts.head.style.display = 'block';
            break;
        case 2:
            bodyParts.body.style.display = 'block';
            break;
        case 3:
            bodyParts.leftHand.style.display = 'block';
            break;
        case 4:
            bodyParts.rightHand.style.display = 'block';
            break;
        case 5:
            bodyParts.leftLeg.style.display = 'block';
            break;
        case 6:
            bodyParts.rightLeg.style.display = 'block';
            alert('You lost! The word was: ' + selectedWord);
            resetGame();
            break;
    }
}


function resetHangman() {
    wg = 0;
    for (const part in bodyParts) {
        bodyParts[part].style.display = 'none'; 
    }
}

