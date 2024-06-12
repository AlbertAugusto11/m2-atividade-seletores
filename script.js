/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/
const number1 = document.getElementById("ingredients");
console.log(number1);
/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/
const number2 = document.getElementsByTagName("h1");
const number2x = document.querySelector("h1");
console.log(number2,number2x);
/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/
const number3 = document.getElementsByClassName("recipe");
const number3x = document.querySelector(".recipe");
console.log(number3,number3x);
/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/
const number4 = document.getElementsByTagName("h2");
for(i=0;i<number4.length;i++){
  number4[i].style.color = "blue";
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/
const number5 = document.getElementsByTagName("input");
console.log(number5)
for(i=0;i<number5.length;i++){
  number5[i].style.borderColor = "red";
}