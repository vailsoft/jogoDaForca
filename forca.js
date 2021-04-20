var dica, words,random,palavraCerta,btnDica,posicao,letra,posicao,letrasUsadas,divLetrasUsadas,tamanhoPalavraCerta,resultado;

// Gerador de número aleatório
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Recarrega a página
function reload(){
    window.location.reload();
}

function inicia(){
    posicao = document.getElementsByClassName("posicao");
    divPalavra = document.getElementById("divPalavra");
    divLetrasUsadas = document.getElementById("letrasUsadas"); 
    letra = document.getElementById("letra"); 

    letrasUsadas = [];
    words = [["apocalipse","Livro da Bíblia"],["genessis","Livro da Bíblia"],["mateus","Livro da Bíblia"], ["tessalonicenses","Livro da Bíblia"], ["submarino","Veículo maritmo"], ["ornitorrinco","Mamífero"], ["dinossauro","Réptil"], ["saturno","Planeta"],["urano","Planeta"], ["megabite","Unidade de Medida"], ["madagascar", "Filme"], ["pernambuco","Estado"], ["banana","Fruta"],["internacional", "Time de Futebol"],["engenheiro","Profissão"],["programador","Profissão"],["uruguai","País"],["portugal","País"],["espanha","País"],["japones","Idioma"]];
    random = getRandomInt(0,words.length);
    palavraCerta = words[random][0];
    tamanhoPalavraCerta = palavraCerta.length;
    dica = words[random][1];
    
    for(var i=0; i < tamanhoPalavraCerta; i++){
        divPalavra.innerHTML += "<input type='text' class='posicao' readonly>";
    }

    document.getElementById("btnDica").addEventListener("click",function(){alert(dica)});
    document.getElementById("btnVerifica").addEventListener("click", verifica);  
      
}

function verifica(){
    // Verifica se a letra digitada está contida em alguma posição da palavra certa
    for(var i = 0; i < tamanhoPalavraCerta; i++){
        if(letra.value == palavraCerta[i]){
            posicao[i].value = letra.value;
        }
    }

    // Verifica destina as letras que não estão contidas na palavra correta para um array e impede de adicionar letras repetidas no mesmo array
    if(palavraCerta.indexOf(letra.value) < 0 && letrasUsadas.indexOf(letra.value) < 0){
        letrasUsadas.push(letra.value);
    }
    divLetrasUsadas.innerHTML = "Letras Usadas: "+letrasUsadas.join();
    
    letra.value = "";
    
    // Torna visível as partes do boneco
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
            // Mostra mensagem quando perde
            alert("Faleceu!!! a palavra era \""+palavraCerta+"\"");
            // window.location.reload();
            break;
    }
    
    // Mostra mensagem quando você ganha
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
