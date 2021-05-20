var array = [];

function gerarTabuada(){
    var num = Number(window.document.getElementById("num").value);
    var tabuada = window.document.getElementById("tabuada");
    
    for(var i = 1; i <= 10; i++){
        var item = window.document.createElement("option");
        item.text = num+" X "+i+" = "+num*i;
        item.value = "tab"+i;
        tabuada.appendChild(item);
    }
    


}

function tamanho(array){
    tam = array.length;
    return tam;
}

function nMaior(array){
    var maior = array[0]; 
    for(var i in array){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}
    
 function nMenor(array){
    var menor = array[0];
    for(var i in array){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
 }
    
 function somaVetor(array){
    var soma = 0;
    for(var i in array){
        soma = soma + array[i];
    }
    return soma;
 }
    
 function mediaVetor(soma, tam){
    var media = soma/tam;
    return media;
 }

function analizarNumeros(){
    var tam = tamanho(array);
    var maior = nMaior(array);
    var menor = nMenor(array);
    var soma = somaVetor(array);
    var media = mediaVetor(soma, tam);

    var resp =  window.document.getElementById("resp");
    var itemTam = window.document.createElement("p");
    var itemMaior = window.document.createElement("p");
    var itemMenor = window.document.createElement("p");
    var itemSoma = window.document.createElement("p");
    var itemMedia = window.document.createElement("p");

    itemTam.innerText = "Quantidade de elementos igual a: "+tam;
    itemMaior.innerText = "Maior numero adicionado igual a: "+maior;
    itemMenor.innerText = "Maior numero adicionado igual a: "+menor;
    itemSoma.innerText = "Soma dos elementos igual a: "+soma;
    itemMedia.innerText = "Média dos elementos igual a: "+media;

    resp.appendChild(itemTam);
    resp.appendChild(itemMaior);
    resp.appendChild(itemMenor);
    resp.appendChild(itemSoma);
    resp.appendChild(itemMedia);
}

function adicionar(){
    var num = Number(window.document.getElementById("num").value);
    var tabela = window.document.getElementById("tabela");
    var item = window.document.createElement("option");
    item.text = "valor "+num+" adicionado";
    item.value = "tab";
    tabela.appendChild(item);
    array.push(num);
}