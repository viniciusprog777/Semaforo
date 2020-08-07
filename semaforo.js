const turnGreen = document.getElementById ( 'turnGreen' );
const turnYellow = document.getElementById ( 'turnYellow' );
const turnRed = document.getElementById ( 'turnRed' );
const turnAuto = document.getElementById ( 'turnAuto' );
const semaforo = document.getElementById ( 'semaforo' );
let intervalId;
let imgTest = -1;
let imgs = [];   
imgs[0] = './img/vermelho.png';
imgs[1] = './img/amarelo.png';
imgs[2] = './img/verde.png';
            

function semaGreen (){
        semaforo.src = './img/verde.png';
        clearInterval(intervalId);
    
}
function semaYellow (){
        semaforo.src = './img/amarelo.png';
        clearInterval(intervalId);
}
function semaRed (){
        semaforo.src = './img/vermelho.png';
        clearInterval(intervalId);
}
function semaAuto() {
        intervalId = setInterval(function semaAuto (){   
    
        ++imgTest;

        if (imgTest >= imgs.length) {
                imgTest = 0;
        }

        semaforo.src = imgs[imgTest];     

        }, 1000);
}

turnGreen.addEventListener ( 'click', semaGreen);
turnYellow.addEventListener ( 'click', semaYellow);
turnRed.addEventListener ( 'click', semaRed);
turnAuto.addEventListener ( 'click', semaAuto);



