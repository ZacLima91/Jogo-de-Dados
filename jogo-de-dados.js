const prompt = require('prompt-sync')();

const qtdJogadores = +prompt('Quantidade de jogadores: ');
const qtdRodadas = +prompt('Quantidade de rodadas: ');
let jogadores = [];
let rodada = [];
let maiores = [];
for (let i = 1; i <= qtdJogadores; i++){
    const jogador = { nome: '', valores: [], pontos: 0 };
    const jog = prompt(`Digite o nome do ${i}° jogador: `);
    jogador.nome = jog;
    jogadores.push(jogador);
}
for (let j = 0; j < qtdRodadas; j++) {
    let maior = 0;
    console.log('################');
    console.log(`${j + 1}° rodada`);
    console.log('################');
    for (let i = 0; i < qtdJogadores; i++) {
        let dadoJogado = parseInt(Math.floor(Math.random() * 6 + 1));
        console.log(`${jogadores[i].nome} tirou ${dadoJogado}`);
        jogadores[i].valores.push(dadoJogado);
        rodada.push(dadoJogado);
        if (dadoJogado > maior) {
            maior = dadoJogado;
        }
        if (i == qtdJogadores - 1) {
            maiores.push(maior);
        }
    }
}
console.log('\n');
for (let j = 0; j < qtdRodadas; j++) {
    for (let i = 0; i < qtdJogadores; i++) {
        if (maiores[j] == jogadores[i].valores[j]) {
            jogadores[i].pontos += 1;
        }
    }
}
let maiorPontuacao = 0;
let vencedor = [];
for (let i = 0; i < qtdJogadores; i++) { 
    if (maiorPontuacao < jogadores[i].pontos) {
        maiorPontuacao = jogadores[i].pontos;
    }
}
console.log('################')
for (let i = 0; i < qtdJogadores; i++) { 
    console.log(`${jogadores[i].nome} fez ${jogadores[i].pontos} pontos.`);
    if (maiorPontuacao == jogadores[i].pontos) {
        vencedor.push(jogadores[i].nome);
    }
}
console.log('################');
console.log(`\nO grande vencedor foi ${vencedor}!`);
