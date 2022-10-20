let numCartas=0
const container = document.querySelector(".cartas");
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
    while(i<numCartas){
        container.innerHTML += `<div class="carta"></div>`;
        i++;
    }
}