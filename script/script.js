var btn = document.querySelector(".btn");
var opEstoque = document.querySelector(".OpsCabe0");
var opEntrada = document.querySelector(".OpsCabe1");
var opSaida = document.querySelector(".OpsCabe2");


if()
btn.addEventListener("click", (e)=>{
    if(true){
    open("estoque.html","_self");
    }
});

var paginaAtual = document.querySelector(title);

switch(paginaAtual){
    case "Estoque":
        opEstoque.style.backgroundColor = "#494981";
        opEstoque.style.color = "#fff";
        break;
    case "Entrada":
        opEstoque.style.backgroundColor = "#494981";
        opEstoque.style.color = "#fff";
        break;
    case "Saída":
        opEstoque.style.backgroundColor = "#494981";
        opEstoque.style.color = "#fff";
        break;
}