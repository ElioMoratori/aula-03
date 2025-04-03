let rodada = 0


function jogoVidro() {
    while(rodada < 3) {
        let escolhaComputador = Math.floor((Math.random()*2)+1)
        let escolhaJogador = prompt("Escolha um caminho entre 1 e 2")
        if(escolhaJogador == escolhaComputador || escolhaJogador > 2) {
            alert("Você perdeu")
            break
        } 
        else {
            alert("Você passou para a próxima rodada: escolha com sabedoria")
            rodada++
        }
           
    }

    if(rodada == 3) {
        alert("Parabéns, você venceu o jogo!")
    }

    rodada = 0
}