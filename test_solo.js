/*    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor")
    operacao = prompt("Digite a Operação, ex: + , - , * , / ")
    valor02 = prompt("Digite o segundo valor")

    if ( operacao == "+"){
        resultado = parseInt ( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-"){
        resultado = parseInt ( valor01 ) - parseInt( valor02 )
    }else if(operacao == "*"){
        resultado = parseInt ( valor01 ) * parseInt( valor02 )
    }else if(operacao == "/"){
        resultado = parseInt ( valor01 ) / parseInt( valor02 )
    }

    document.getElementById("paragrafo").innerText = resultado
    }
    */
    function acaoBotao(params) {
        var miranha, cartao, cartao2
        
        miranha = prompt ("Se você quer ver o filme do Homem Aranha, confirme digitando 'OK' ")
        cartao = prompt ("Digite o número do seu cartão!")
        cartao2 = prompt ("Se for Débito, escreva 'Débito' ")
        if ( cartao2 == "Débito"){
            alert ("Você escolheu: " + cartao2 + " e agr cê ta fudido meu parsero")
        }else if ( cartao2 == "Crédito"){
            alert ("Você escolheu: " + cartao2 + " e agr cê ta fudido meu parsero, nós sabe q o número do teu cartão é " + cartao)
        }
            }
        document.getElementById("paragrafo").innerText  