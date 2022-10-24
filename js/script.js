
let numCartas=0;
let jogadas=0;
let finalizadas=0;
let cont=0;
let tempo=-1;
const container = document.querySelector(".cartas");
const cartas=[
    `<div class="carta 1">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/bobrossparrot.gif"></div>
    </div>`,
    `<div class="carta 2">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/explodyparrot.gif"></div>
    </div>`,
    `<div class="carta 3">
        <div class="face frente" onclick="virarCarta(this)">></div>
        <div class="face verso"><img src="./images/fiestaparrot.gif"></div>
    </div>`,
    `<div class="carta 4">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/metalparrot.gif"></div>
    </div>`,
    `<div class="carta 5">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/revertitparrot.gif"></div>
    </div>`,
    `<div class="carta 6">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/tripletsparrot.gif"></div>
    </div>`,
    `<div class="carta 7">
        <div class="face frente" onclick="virarCarta(this)"></div>
        <div class="face verso"><img src="./images/unicornparrot.gif"></div>
    </div>`
];
setTimeout(perguntaQuantidade,500)

function perguntaQuantidade(){
    numCartas = Number(prompt("Com quantas cartas quer jogar?"));
    if(numCartas%2!==0 || numCartas<4 || numCartas>14){
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
    container.innerHTML +=`<div class="relogio"></div>`
}
function comparador() { 
	return Math.random() - 0.5; 
}
function virarCarta(carta){
    jogadas++;
    cont++;
    const item=carta.parentNode;
    const clicadaFrente = item.querySelector(".frente");
    const clicadaVerso = item.querySelector(".verso");
    item.classList.add('virada');
    clicadaVerso.classList.add('verso-vira');
    clicadaFrente.classList.add('frente-vira');    
    if(cont==2){
        cont=0;
        setTimeout(verificaIgualdade,500);
    }
}

function voltarCarta(c1,c2){
    const c1Frente = c1.querySelector(".frente");
    const c1Verso = c1.querySelector(".verso");
    c1.classList.remove("virada");
    c1Frente.classList.remove('frente-vira');    
    c1Verso.classList.remove('verso-vira');
    c2.classList.remove("virada");
    const c2Frente = c2.querySelector(".frente");
    const c2Verso = c2.querySelector(".verso");
    c2Frente.classList.remove('frente-vira');    
    c2Verso.classList.remove('verso-vira');
}

function verificaIgualdade(){
    const listaViradas=Array.from(document.querySelectorAll(".virada"));
    let duasAtuais=[];
    for(let i=0; i<=(listaViradas.length)-1; i++){
        if(listaViradas[i].classList.contains("finalizada")==false){
            duasAtuais.push(listaViradas[i]);
        }
    }
    for(let k=0; k<=duasAtuais.length; k++){
        for(let j=1; j<=duasAtuais.length; j++){
            if(duasAtuais[k].classList.value===duasAtuais[j].classList.value){
                duasAtuais[k].classList.add("finalizada");
                duasAtuais[j].classList.add("finalizada");
                finalizadas++;
                if(finalizadas==numCartas/2){
                    alert(`Você ganhou em ${jogadas} jogadas e ${tempo} segundos!`);
                    resposta=prompt("Você quer jogar novamente? 'sim' ou 'não'");
                    if(resposta=="sim"){
                        document.location.reload();
                    }
                }
            }
            else if(duasAtuais[k].classList.value!==duasAtuais[j].classList.value){
                setTimeout(voltarCarta,500,duasAtuais[k],duasAtuais[j]);
            }
            }
        }
    }

setInterval(relogio,1000);
function relogio(){
    tempo++;
    const rel = document.querySelector(".relogio");
    rel.innerHTML=tempo;
}