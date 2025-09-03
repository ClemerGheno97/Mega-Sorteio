function draw() {
    const luckynumbers = parseInt(document.querySelector(".luckynumbers").value);
    const min = parseInt(document.querySelector(".min").value);
    const max = parseInt(document.querySelector(".max").value);


    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.")
    }
    else {
        const numerosAleatorios = [];
        for (let i = 0; i < luckynumbers; i++) {
            const result = Math.floor(Math.random() * (max - min + 1) + min);
            numerosAleatorios.push(result);
        }

        alert(`Os números sorteados foram: ${numerosAleatorios.join(", ")}`);

    }
}