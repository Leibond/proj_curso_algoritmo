function acaoBotao(params){
    var sairLoop, valor1, valor2
    do {
        valor1 = prompt ("Digite o Primeiro Valor: ")
        valor2 = prompt ("Digite o segundo Valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt (valor1) + parseInt (valor2))
        sairLoop = prompt("Deseja sair? S/N")
    } while (sairLoop == "N")
}