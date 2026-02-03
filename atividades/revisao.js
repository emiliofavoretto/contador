function MeuNome () {
    console.log ("Emílio Favorettto")
} 

MeuNome()

function MeuNome () {
    const name = "Emilio Favoretto"
    console.log (name)
} 

MeuNome()

function digaNome (name) {
    console.log(name)
}

digaNome ("maria")

function soma (num1, num2) {
    const resultado = num1 + num2
    console.log (resultado)
}

soma(5,20)
function soma (num1, num2) {
    const resultado = num1 + num2
    console.log (resultado)
}

soma(5,20)

function soma (num1, num2) {
    const resultado = num1 + num2
    
    return resultado
}

const resultadoDaSoma = soma(100,200)

console.log(resultadoDaSoma)

function endividado (receita, gastos) {
    if (receita > gastos) {
        console.log("não esta individada")
    } else {
        console.log("esta individada")
    }
}

const PessoaA = endividado(10000,5000)
const PessoaB = endividado(3000,3500)

const MeuNome1 = () => {
    console.log ("Emílio Favorettto")
} 

MeuNome1()

/*atividade*/

function media(a,b,c) {
     return (a + b + c) / 3
}

const calculomedia = media(10,10,10)
console.log(calculomedia)