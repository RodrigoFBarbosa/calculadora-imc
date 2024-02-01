function calculate() {
    let peso = Number(document.getElementById('input-kg').value);
    let altura = Number(document.getElementById('input-alt').value);
    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;
    let messageElement = document.getElementById('message');

    output.value = imc.toFixed(1);

    if (imc < 18.5) {
        messageElement.innerHTML = `<p>Seu IMC está baixo. Procure um profissional da saúde</p>`
        messageElement.style.color = 'red'
    } else if (imc > 24.9) {
        messageElement.innerHTML = `<p>Seu IMC está alto. Procure um profissional da saúde</p>`
        messageElement.style.color = 'red'
    } else {
        messageElement.innerHTML = `<p>Seu IMC está adequado para sua altura</p>`
        messageElement.style.color = 'green'
    }
}