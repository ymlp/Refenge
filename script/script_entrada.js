/* Navegador 
Início*/

var opEstoque = document.querySelector(".opsCabe1");
var opEntrada = document.querySelector(".opsCabe2");
var opSaida = document.querySelector(".opsCabe3");
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
/* Navegador 
Fim*/


/* Troca de botão selecionado no navegar conforme a pagina atual
Início*/
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

/* Troca de botão selecionado no navegar conforme a pagina atual
Fim*/


/* Troca de cor conforme a opção selecionada e altera oque é exposto nas colunas  
Início*/
var opcoesGeral = document.querySelector(".opcoes");
var opTabela1 = document.querySelector(".op1");
var opTabela2 = document.querySelector(".op2");
var opTabela3 = document.querySelector(".op3");
var opTabela4 = document.querySelector(".op4");
var nom_col = document.querySelector("#nom_col");
var qtd_col = document.querySelector("#qtd_col");
var ultAlt_col = document.querySelector("#ultAlt_col");
var uso_col = document.querySelector("#uso_col");
var obs_col = document.querySelector("#obs_col");
var valUni_col = document.querySelector("#valUni_col");
var opcao = "estoque";
var colunas = document.querySelector(".colunas");
var categorias = document.querySelector(".categorias");
var faixa = document.querySelector(".faixa");

opTabela1.addEventListener("click", ()=>{
    /* Alteração de cor */
    opTabela1.style.backgroundColor = "#494981";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";

    debugger;
    faixa.remove(colunas);
    faixa = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "faixa";
    faixa.setAttributeNode(classe);
    colunas.appendChild(faixa);
    var nome = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    nome.setAttributeNode(classe);
    nome.innerHTML += "Nome";
    faixa.appendChild(nome);
    nome.style.borderLeft = "none";


    var qtd = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    qtd.setAttributeNode(classe);
    qtd.innerHTML += "Qtd";
    faixa.appendChild(qtd);

    var ulAlt = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    ulAlt.setAttributeNode(classe);
    ulAlt.innerHTML += "Ult.alteração";
    faixa.appendChild(ulAlt);

    var uso = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    uso.setAttributeNode(classe);
    uso.innerHTML += "Uso";
    faixa.appendChild(uso);

    var obs = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    obs.setAttributeNode(classe);
    obs.innerHTML += "Observação";
    faixa.appendChild(obs);

    var valUni = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "valUni_para";
    valUni.setAttributeNode(classe);
    valUni.innerHTML += "Valor unitário";
    faixa.appendChild(valUni);
   
    
   
});

opTabela2.addEventListener("click", ()=>{
    /* Alteração de cor */
    
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#494981";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";

    debugger;
    faixa.remove(colunas);
    faixa = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "faixa";
    faixa.setAttributeNode(classe);
    colunas.appendChild(faixa);
    var nome = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "nom_col";
    nome.setAttributeNode(classe);
    nome.innerHTML += "Nome";
    faixa.appendChild(nome);

    var itens = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "ite_col";
    itens.setAttributeNode(classe);
    itens.innerHTML += "Itens";
    faixa.appendChild(itens);

    var podSerPro = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "poSerPro_col";
    podSerPro.setAttributeNode(classe);
    podSerPro.innerHTML += "Podem ser produzidos";
    faixa.appendChild(podSerPro);   
    
    
       

});

opTabela3.addEventListener("click", ()=>{
    /* Alteração de cor */
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#494981";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";

    opcao = "portas";

     opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#494981";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#000048";
    opTabela4.style.color = "#fff";

    debugger;
    faixa.remove(colunas);
    faixa = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "faixa";
    faixa.setAttributeNode(classe);
    colunas.appendChild(faixa);
    var nome = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "nom_col";
    nome.setAttributeNode(classe);
    nome.innerHTML += "Nome";
    faixa.appendChild(nome);

    var itens = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "ite_col";
    itens.setAttributeNode(classe);
    itens.innerHTML += "Itens";
    faixa.appendChild(itens);

    var podSerPro = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "poSerPro_col";
    podSerPro.setAttributeNode(classe);
    podSerPro.innerHTML += "Podem ser produzidos";
    faixa.appendChild(podSerPro);   
    
    
});
opTabela4.addEventListener("click", ()=>{
    /* Alteração de cor */
    opTabela1.style.backgroundColor = "#000048";
    opTabela1.style.color = "#fff";
    opTabela2.style.backgroundColor = "#000048";
    opTabela2.style.color = "#fff";
    opTabela3.style.backgroundColor = "#000048";
    opTabela3.style.color = "#fff";
    opTabela4.style.backgroundColor = "#494981";
    opTabela4.style.color = "#fff";

    opcao = "parafusos"; 
    
    debugger;
    faixa.remove(colunas);
    faixa = document.createElement("div");
    var classe = document.createAttribute("class");
    classe.value = "faixa";
    faixa.setAttributeNode(classe);
    colunas.appendChild(faixa);
    var nome = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    nome.setAttributeNode(classe);
    nome.innerHTML += "Nome";
    faixa.appendChild(nome);
    nome.style.borderLeft = "none";

    var qtd = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    qtd.setAttributeNode(classe);
    qtd.innerHTML += "Qtd";
    faixa.appendChild(qtd);

    var ulAlt = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    ulAlt.setAttributeNode(classe);
    ulAlt.innerHTML += "Ult.alteração";
    faixa.appendChild(ulAlt);

    var uso = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "categorias";
    uso.setAttributeNode(classe);
    uso.innerHTML += "Uso";
    faixa.appendChild(uso);

    var obs = document.createElement("div");
    classe = document.createAttribute("class");
    classe.value = "obs_para";
    obs.setAttributeNode(classe);
    obs.innerHTML += "Observação";
    faixa.appendChild(obs);

});

/* Troca de cor conforme a opção selecionada e altera oque é exposto nas colunas  
Fim*/

/* Chamada da tela adicionar item
Início */
var btnAddEntrada = document.querySelector(".btnAdd");
var corpo = document.querySelector(".corpo");

btnAddEntrada.addEventListener("click", ()=>{

   var blur = document.createElement("div");
   var classe = document.createAttribute("class");
   classe.value = "blur";
   blur.setAttributeNode(classe);
   corpo.appendChild(blur);
   var iframe = document.createElement("iframe");
   classe = document.createAttribute("class");
   classe.value = "iframe_add"; 
   iframe.setAttributeNode(classe);
   blur.appendChild(iframe);
   var src = document.createAttribute("src");
   src.value = "addEntrada.html";
   iframe.setAttributeNode(src);
   
});

/* Chamada da tela adicionar item em iframe
Fim */