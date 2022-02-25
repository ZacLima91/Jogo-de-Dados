const prompt = require('prompt-sync')();

let jogadores = []
let numero = 0;

const rodadas = +prompt("Rodadas: ");
const qtdjogador = +prompt("Quantidades de Jogadores: ");
for (let i = 1; i <= qtdjogador; i++){
    let n = prompt(`Nome do ${i}° jogador: `)
    let jog = { 'nome': n , 'valores':[],'pontos': 0}
    jogadores.push(jog)
    for (let j = 0; j < rodadas; j++){
        numero = Math.floor(Math.random() * 6 + 1)
        jog.valores.push(numero)
    }
    
}
let rodada = []
for (let i = 0; i < jogadores.length; i++) {
    for (let j = 0; j < jogadores.length; j++) {
        let num = jogadores[j].valores[i]
        rodada.push(num)
    }
    console.log(`Rodada: ${rodada}`)
    for (let x = 0; x < rodada.length; x++) {
        let maior = 0
        if (rodada[x] > maior) {
            maior = rodada[x]
            for (let y = 0; y < jogadores.length; y++) {
                if (maior == jogadores[y].valores[x]) {
                    jogadores[y].pontos += 1
                }
            }
        }
        rodada = []
    }
}

console.log(jogadores);