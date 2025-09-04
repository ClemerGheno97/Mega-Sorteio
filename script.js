function drawn() {
    // Pegando os valores dentro da função para garantir que eles sejam atualizados
    const amount = parseInt(document.querySelector(".drawn").value);
    const min = parseInt(document.querySelector(".min").value);
    const max = parseInt(document.querySelector(".max").value);

    // Selecionando o elemento onde os números sorteados serão exibidos
    const luckyNumbers = document.querySelector(".luckyn-numbers"); // Corrigido o nome da classe

    const resultScreen = document.querySelector(".result-screen");
    const mascaraResult = document.querySelector(".mascara-result");

    // Verificando se o valor mínimo é maior ou igual ao valor máximo
    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
    } else {
        // Criamos um array para armazenar os números sorteados
        const numbersDrawn = [];
        // Um loop que se repete 'drawn' vezes
        for (let i = 0; i < amount; i++) {
            // Geramos um número aleatório entre min e max
            const result = Math.floor(Math.random() * (max - min + 1) + min);
            // Adicionamos o número sorteado ao array
            numbersDrawn.push(result);
        }

        // Tornando a tela de resultado visível
        resultScreen.style.visibility = "visible";
        mascaraResult.style.visibility = "visible";

        // Exibindo os números sorteados na tela
        luckyNumbers.innerHTML = `${numbersDrawn.join(", ")}`;
    }
}

function esconder_result() {
    const resultScreen = document.querySelector(".result-screen");
    const mascaraResult = document.querySelector(".mascara-result");

    resultScreen.style.visibility = "hidden";
    mascaraResult.style.visibility = "hidden";
}

document.querySelector("button").addEventListener("click", drawn);