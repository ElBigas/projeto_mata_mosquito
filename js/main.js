/**
 * Primeiramente estaremos ajustando o tamanho da tela ao redimensionar a 
 * janela do navegador e, em seguida, criaremos imagens de mosquitos em 
 * posições, tamanho e direção são aleatórios aleatórias na tela. A velocidade 
 * com que os mosquitos aparecem depende do nível selecionado pelo player 
 * (normal, difícil ou chuck-norris). 
 * O player tem 15 segundos para clicar nos mosquitos antes que o jogo termine
 * e vá para a tela de vitória. Cada vez que o player perde um mosquito, 
 * suas vidas são decrementadas. Se o player esgotar todas as suas vidas antes 
 * de chegar ao final do tempo, o jogo irá para a tela "fim de jogo". 
 */


let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let nivel = window.location.search;
nivel = nivel.replace('?', '');
let criaMosquitoTempo = 1500

if (nivel === 'normal') {

    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {

    criaMosquitoTempo = 1000
} else if (nivel === 'chuck-norris') {

    criaMosquitoTempo = 750
}

function ajustaTamanhoTela() {

    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela();

let cronometro = setInterval( () => {
    
    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);        
        window.location.href = 'vitoria.html'
    } else {

        document.getElementById('cronometro').innerHTML = tempo;
    }    
    
}, 1000);

function posicaoRandomica() {

    //remover o mosquito caso exista
    if (document.getElementById('mosquito')) {

        document.getElementById('mosquito').remove();

        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {

            document.getElementById('v' + vidas).src = 'images/coracao_vazio.png';

            vidas++;
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criar elemento HTML
    let mosquito = document.createElement('img');
    mosquito.src = 'images/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = () => {
        document.getElementById('mosquito').remove();
        console.log('Matou o mosquito!')
    }

    //faz o elemento ser filho do 'body'
    document.body.appendChild(mosquito);
}

let criaMosquito = setInterval(posicaoRandomica, criaMosquitoTempo)

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    if (classe === 0) {
        return 'mosquito1';
    } else if (classe === 1) {
        return 'mosquito2';
    } else {
        return 'mosquito3';
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    console.log(classe)

    if (classe === 0) {
        return 'ladoA';
    } else if (classe === 1) {
        return 'ladoB';
    }
}
