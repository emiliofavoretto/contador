let contador = 0

function incrementar() {
    contador += 1;
    document.getElementById("contador").innerText = contador;
}

const cumprimentar = (nome) => {
    return "Olá " + nome + "!";
};

console.log(cumprimentar("lucas"));