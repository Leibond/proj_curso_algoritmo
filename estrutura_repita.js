/*
sairLoop: caractere
    valor1, valor2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
          escreva("Digite o Primeiro Valor: ")
          leia (valor1)
          escreva("Digite o segundo Valor: ")
          leia (valor2)
          escreval("Resultado: ", valor1 + valor2)
          escreval("Deseja sair? S/N")
          leia (sairLoop)
    ate sairLoop <> ("N")
*/

function acaoBotao(params){
    var sairLoop, valor1, valor2
    do {
        valor1 = prompt ("Digite o Primeiro Valor: ")
        valor2 = prompt ("Digite o segundo Valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt (valor1) + parseInt (valor2))
        sairLoop = prompt("Deseja sair? S/N")
    } while (sairLoop == "N")
}