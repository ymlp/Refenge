var btnAddEntrada = document.querySelector(".btnAdd");
var btnOkEntrada = document.querySelector(".btnOk");
var corpo = document.querySelector(".corpo");
var blur = document.querySelector(".blur");

var paginaAtual = document.title;

/* Navegador */
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

/* Troca de botão selecionado no navegar conforme a pagina atual*/
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

var janelaAdd = document.createElement("iframe");

btnAddEntrada.addEventListener("click", (e)=>{
    corpo.appendChild(janelaAdd);
    blur.style.backgroundColor = "black";
    
});