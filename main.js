let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

function ajustaTamanhoTela() {

    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela();

let cronometro = setInterval( () => {
    
    tempo -= 1;
    document.getElementById('cronometro').innerHTML = tempo;
    
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

setInterval(posicaoRandomica, 2000)

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
