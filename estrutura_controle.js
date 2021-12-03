/*escreval ("Digite o nome do ALuno: ")
   leia (nome)
   escreval ("Digite a Nota 01 do ALuno: ")
   leia (nota01)
   escreval ("Digite a Nota 02 do ALuno: ")
   leia (nota02)
   media := (nota01 + nota02) / 2

   se media >= 5    entao
      escreval ("Aprovado ", nome)
   senao
        escreval ("Reprovado ", nome)
   fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o Nome do Aluno: ")
nota1 = prompt ("Digite a Nota do Aluno: ")
nota2 = prompt ("Digite a Nota 2 do Aluno: ")

media = (parseInt (nota1) + parseInt(nota2)) / 2;

if(media >= 50)
    alert ("Aprovado, " + nome)
else
    alert ("Reprovado, " + nome)