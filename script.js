function draw() {
    const luckynumbers = parseInt(document.querySelector(".luckynumbers").value);
    const min = parseInt(document.querySelector(".min").value);
    const max = parseInt(document.querySelector(".max").value);

    const numerosAleatorios = [];
    for (let i = 0; i < luckynumbers; i++) {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        numerosAleatorios.push(result);
    }

    alert(`Os números sorteados foram: ${numerosAleatorios.join(", ")}`);

}