var pagina = document.body.id;

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
var abaAtu = 1;

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
    abaAtu = 1;

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
    abaAtu = 2; 
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
    abaAtu = 3;
    
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
    abaAtu = 4;

});

/* Troca de cor conforme a opção selecionada e altera oque é exposto nas colunas  
Fim*/

/* Chamada da tela adicionar item
Início */
var btnAddEnt = document.querySelector(".btnAdd");
var corpo = document.querySelector(".corpo");
var addEntrada = document.createElement("div");
classe = document.createAttribute("class");
classe.value = "addEstoque"; 
var addEst = document.querySelector(".addEstoque");
var addKit = document.querySelector(".addKits");
addEntrada.setAttributeNode(classe);

var btn_can = document.querySelector(".btn_can");
var btn_ok = document.querySelector(".btn_ok");
var btn_sair = document.querySelector(".btn_sair");


btnAddEnt.addEventListener("click", ()=>{


    switch(abaAtu){
        case 1:    
        
            var btn_sair = document.querySelector(".btn_sair");
            var addItens = document.querySelector(".addItens");
            var btn_ok = document.querySelector(".addEstoque .conteudo .botoes .btn_ok");
            var addEst = document.querySelector(".addEstoque");

            addEst.style.zIndex = "1";
            addEst.style.opacity = "1";
 
            btn_ok.addEventListener("click", ()=>{
                addEst.style.zIndex = "-1";
                addEst.style.opacity = "0";
                /* Codigo de lançamento no banco */
            });
    
            btn_can.addEventListener("click", ()=>{
                addEst.style.zIndex = "-1";
                addEst.style.opacity = "0";
            });
    
            btn_sair.addEventListener("click", ()=>{
                addEst.style.zIndex = "-1";
                addEst.style.opacity = "0";
            });
        break;
        case 2:
            var btn_sair1 = document.querySelector(".addKits .bar_sup .btn_sair");
            var btn_ok1 = document.querySelector(".addKits .conteudo .botoes .btn_ok");
            var btn_add1 = document.querySelector(".addKits .conteudo .botoes .btn_add");
            addKit.style.opacity = "1";
            addKit.style.zIndex = "1";
           
            btn_sair1.addEventListener("click", ()=>{
        
                addKit.style.zIndex = "-1";
                addKit.style.opacity = "0";
            });

            btn_ok1.addEventListener("click", ()=>{
                addKit.style.zIndex = "-1";
                addKit.style.opacity = "0";
                /* codigo de add na tabela */
            });

            btn_add1.addEventListener("click", ()=>{
                addItens.style.zIndex = "2";
                addItens.style.opacity = "1";

            });

            var btn_okAddItens = document.querySelector(".addItens .btn_ok");
            var btn_sairAddItens = document.querySelector(".addItens .btn_sair");

            btn_sairAddItens.addEventListener("click",()=>{
                addItens.style.zIndex = "-1";
                addItens.style.opacity  = "0";
                /* codigo de adicionar itens a array */
            });

            btn_okAddItens.addEventListener("click",()=>{
                addItens.style.zIndex = "-1";
                addItens.style.opacity  = "0";
                /* codigo de adicionar itens a array */
            });
        break;
        case 3:
            var addPortas = document.querySelector(".addPortas");
            addPortas.style.zIndex = "1";
            addPortas.style.opacity = "1"; 

            var btn_add = document.querySelector(".addPortas .btn_add");
            var addItens  = document.querySelector(".addPortas .addItens");

            btn_add.addEventListener("click", ()=>{
                addItens.style.zIndex = "1";
                addItens.style.opacity = "1"; 
            });

            var btn_ok = document.querySelector(".addPortas .conteudo .botoes .btn_ok");

            btn_ok.addEventListener("click", ()=>{
                addPortas.style.zIndex = "-1";
                addPortas.style.opacity = "0"; 
            });


            var btn_sair = document.querySelector(".addPortas .bar_sup .btn_sair");

            btn_sair.addEventListener("click", ()=>{
                addPortas.style.zIndex = "-1";
                addPortas.style.opacity = "0"; 
            });

            btn_ok = document.querySelector(".addPortas .addItens .btn_ok");
          
            btn_ok.addEventListener("click", ()=>{
                addItens.style.zIndex = "-1";
                addItens.style.opacity = "0"; 
                /* Codigo de adição na array */
            });

            btn_sair = document.querySelector(".addPortas .addItens .bar_sup .btn_sair");

            btn_sair.addEventListener("click", ()=>{
                addItens.style.zIndex = "-1";
                addItens.style.opacity = "0"; 
            });

        break;
        case 4:
            var addParafusos = document.querySelector(".addParafusos");

            addParafusos.style.zIndex = "1";
            addParafusos.style.opacity = "1";

            var btn_ok = document.querySelector(".addParafusos .conteudo .botoes .btn_ok");

            btn_ok.addEventListener("click", ()=>{
              
                addParafusos.style.zIndex = "-1";
                addParafusos.style.opacity = "0";
                /* Lancamento no banco de dados */
            });
            
            var btn_sair = document.querySelector(".addParafusos .bar_sup .btn_sair");

            btn_sair.addEventListener("click", ()=>{
                addParafusos.style.zIndex = "-1";
                addParafusos.style.opacity = "0";
            });

            var btn_can = document.querySelector(".addParafusos .conteudo .botoes .btn_can");

            btn_can.addEventListener("click", ()=>{
                addParafusos.style.zIndex = "-1";
                addParafusos.style.opacity = "0";
            });

        break;
    }
});









/* Navegador 
Início*/


/*  import {comando} from "./script/script_addEntrada.js"; */





/* Chamada da tela adicionar item em iframe
Fim */
