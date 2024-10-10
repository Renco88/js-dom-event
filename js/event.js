//Opation-1 On click 
//onclick=" document.body.style.backgroundColor='Yellow'


//Opation-2 On click 
function MakeRed() {
    document.body.style.backgroundColor = 'red'
}

// Opation-3 Onclick 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//Opation -4 Oneclick
const pinkbutton = document.getElementById('make-pink');
pinkbutton.addEventListener('click', makePink);


function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//Opation -4 Oneclick

const greenbutton = document.getElementById('make-green');
greenbutton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

//Opation -5 Oneclick

const goldenRod = document.getElementById('golden-rod').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod'
 });





