var dica, words,random,palavraCerta,btnDica,posicao,letra,posicao,letrasUsadas,divLetrasUsadas,tamanhoPalavraCerta,resultado;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function reload(){
    window.location.reload();
}

function inicia(){
    letra = document.getElementById("letra"); 
    posicao = document.getElementsByClassName("posicao");
    divLetrasUsadas = document.getElementById("letrasUsadas"); 
    letrasUsadas = [];
    divPalavra = document.getElementById("divPalavra");
    words = [
        ["apocalipse","Livro da Bíblia"], 
        ["submarino","Veículo maritmo"], 
        ["ornitorrinco","Mamífero"], 
        ["dinossauro","Réptil"], 
        ["saturno","Planeta"], 
        ["megabite","Unidade de Medida"], 
        ["madagascar", "Filme"], 
        ["pernambuco","Estado"], 
        ["banana","Fruta"]];
    random = getRandomInt(0,words.length);
    palavraCerta = words[random][0];
    tamanhoPalavraCerta = palavraCerta.length;
    for(var i=0; i < tamanhoPalavraCerta; i++){
        divPalavra.innerHTML += "<input type='text' class='posicao' readonly>";
    }
    dica = words[random][1];
    document.getElementById("btnDica").addEventListener("click",function(){alert(dica)});
    document.getElementById("btnVerifica").addEventListener("click", verifica);  
      
}

function verifica(){
    for(var i = 0; i < tamanhoPalavraCerta; i++){
        if(letra.value == palavraCerta[i]){
            posicao[i].value = letra.value;
        }
    }
    if(palavraCerta.indexOf(letra.value) < 0 && letrasUsadas.indexOf(letra.value) < 0){
        letrasUsadas.push(letra.value);
    }
    divLetrasUsadas.innerHTML = "Letras Usadas: "+letrasUsadas.join();
    letra.value = "";
    switch(letrasUsadas.length){
        case 1:
            document.getElementById("cabeca").style.display = "block";
            break;
        case 2:
            document.getElementById("tronco").style.display = "block";
            break;
        case 3:
            document.getElementById("bracoDir").style.display = "block";
            break;
        case 4:
            document.getElementById("bracoEsq").style.display = "block";
            break;
        case 5:
            document.getElementById("pernaDir").style.display = "block";
            break;
        case 6:
            document.getElementById("pernaEsq").style.display = "block";
            document.getElementById("lingua").style.display = "block";
            break;
        case 7:
            document.getElementById("died").style.display = "block";
            alert("Faleceu!!! a palavra era \""+palavraCerta+"\"");
            // window.location.reload();
            break;
    }
    
    resultado = 0;

    for(i=0; i<tamanhoPalavraCerta; i++){
        if(posicao[i].value.length > 0){
            resultado += 1;
        }
        if(resultado == tamanhoPalavraCerta){
            alert("Parabéns Você Acertou!!!");
        }        
    }
}

window.addEventListener("load", inicia);
