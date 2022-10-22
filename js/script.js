
let numCartas=0
const container = document.querySelector(".cartas");
const cartas=[
    `<div class="carta 1" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/bobrossparrot.gif"></div>
    </div>`,
    `<div class="carta 2" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/explodyparrot.gif"></div>
    </div>`,
    `<div class="carta 3" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/fiestaparrot.gif"></div>
    </div>`,
    `<div class="carta 4" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/metalparrot.gif"></div>
    </div>`,
    `<div class="carta 5" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/revertitparrot.gif"></div>
    </div>`,
    `<div class="carta 6" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/tripletsparrot.gif"></div>
    </div>`,
    `<div class="carta 7" onclick="virarCarta(this)">
        <div class="face frente"><img src="./images/parrot.png"></div>
        <div class="face verso"><img src="./images/unicornparrot.gif"></div>
    </div>`
];
perguntaQuantidade();

function perguntaQuantidade(){
    numCartas = Number(prompt("Com quantas cartas quer jogar?"));
    if(numCartas%2!==0){
        perguntaQuantidade();
    }
    else{
        adicionaCartas();
    }
}

function adicionaCartas(){
    let i=0;
    let j=0;
    let array=[];
    cartas.sort(comparador);
    while(i<(numCartas/2)){
        while(j<2){
            array.push(cartas[i]);
            j++;
        }
        j=0;
        i++;
    }
    array.sort(comparador);
    while(j<numCartas){
        container.innerHTML += array[j];
        j++;
    }

}

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(item){
    const clicadaFrente = item.querySelector(".frente");
    const clicadaVerso = item.querySelector(".verso");
    item.classList.add("virada");
    clicadaFrente.classList.add('frente-vira');    
    clicadaVerso.classList.add('verso-vira');
    verificaIgualdade();
}

function voltarCarta(c1,c2){
    const c1Frente = item.querySelector(".frente");
    const c1Verso = item.querySelector(".verso");
    c1.classList.remove("virada");
    c1Frente.classList.remove('frente-vira');    
    c1Verso.classList.remove('verso-vira');
    c2.classList.remove("virada");
    const c2Frente = item.querySelector(".frente");
    const c2Verso = item.querySelector(".verso");
    c2Frente.classList.remove('frente-vira');    
    c2.classList.remove('verso-vira');
}

