let order = [];
let clikedOrder = [];
let scorer = 0;

//0 - Verder
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criar ordem aleatoria de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clikedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clikedOrder){
        if(clikedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clikedOrder.length == order.length){
        alert(`Pontuação: ${scorer}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao parao clique do usuario
let click = (color) => {
    clikedOrder[checkOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    scorer++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${scorer}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clikedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Gênesis! Iniciando um novo Jogo!`);
    scorer = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();