var nome, nota1, nota2;
nome = prompt("Digite o Nome do Aluno: ")
nota1 = prompt ("Digite a Nota do Aluno: ")
nota2 = prompt ("Digite a Nota 2 do Aluno: ")

media = (parseInt (nota1) + parseInt(nota2)) / 2;

if(media >= 50)
    alert ("Aprovado, " + nome)
else
    alert ("Reprovado, " + nome)