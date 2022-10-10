var btn = document.querySelector(".btn");
var opEstoque = document.querySelector(".opsCabe1");
var opEntrada = document.querySelector(".opsCabe2");
var opSaida = document.querySelector(".opsCabe3");
var btnAddEntrada = document.querySelector(".btnAdd");
var btnOkEntrada = document.querySelector(".btnOk");
var corpo = document.querySelector(".corpo");

var paginaAtual = document.title;

opEntrada.addEventListener("click", (e)=>{
    open("entrada.html","_self");
    paginaAtual = "Entrada";
    console.log(paginaAtual);
});
opSaida.addEventListener("click", (e)=>{
    open("saida.html","_self");
    paginaAtual = "Saída";
    console.log(paginaAtual);
});
opEstoque.addEventListener("click", (e)=>{
    open("estoque.html","_self");
    paginaAtual = "Estoque";
    console.log(paginaAtual);
});
if(paginaAtual == "Login"){
    btn.addEventListener("click", (e)=>{
        if(true){
            open("estoque.html","_self");
        }
    });
};

var janelaAdd = document.createElement("iframe");

btnAddEntrada.addEventListener("click", (e)=>{
    
});


switch(paginaAtual){
    case "Estoque":
        opEstoque.style.backgroundColor = "#494981";
        opEstoque.style.color = "#fff";
        console.log("Estoque");
        break;
    case "Entrada":
        opEntrada.style.backgroundColor = "#494981";
        opEntrada.style.color = "#fff";
        break;
    case "Saída":
        opSaida.style.backgroundColor = "#494981";
        opSaida.style.color = "#fff";
        break;
};

var opTabela1 = document.querySelector(".op1");
var opTabela2 = document.querySelector(".op2");
var opTabela3 = document.querySelector(".op3");
var opTabela4 = document.querySelector(".op4");


opTabela1.addEventListener("click", ()=>{
    opTabela1.style.backgroundColor = "#494981";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";
});
opTabela2.addEventListener("click", ()=>{
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#494981";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";
});
opTabela3.addEventListener("click", ()=>{
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#494981";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";
});
opTabela4.addEventListener("click", ()=>{
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#494981";
    opTabela4.style.color = "#fff";
});