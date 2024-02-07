// Desafio 1
function ordemDecrescente() {
    const inputs = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
        document.getElementById('input4').value,
        document.getElementById('input5').value
    ];

    const ordemDecrescente = inputs.sort().reverse().join(' - ');
    document.getElementById('resultado').innerText = ordemDecrescente;
}

// Desafio 2
function numerosSequenciais() {
    const quantidade = parseInt(prompt('Digite a quantidade de números:'));
    const array = [];

    for (let i = 1; i <= quantidade; i++) {
        array.push(i);
    }

    document.getElementById('resultado2').innerText = array.join(' ');
}

// Desafio 3
function fraseParaVetor() {
    const frase = prompt('Digite uma frase:');
    const caracteres = frase.split('');

    document.getElementById('resultado3').innerHTML = `Conteúdo: ${caracteres.join(', ')}<br>Tamanho do vetor: ${caracteres.length}`;
}