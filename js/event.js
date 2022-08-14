// option-1 
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}


// option-2 --[we will use it]
{/* <button onclick="makeRed()">Make Red</button> */}
function makeRed() {

    document.body.style.backgroundColor = 'red';
}

// option-3

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option-3-another [we will use it sometimes]
const makePurpleButton = document.getElementById('make-purple');
// console.log(makePurpleButton)
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option-4 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option-4 -another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})
// option-4 final [importent we will use it ]
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenRod'
})