function leiamais(){
    var pontos = document.getElementById("pontos");
    var maistexto = document.getElementById("mais");
    var btleiamais = document.getElementById("btleiamais");

    if(pontos.style.display === "none"){
        pontos.style.display = 'inline';
        maistexto.style.display ='none';
        btleiamais.innerHTML="Leia Mais"
    }else{
        pontos.style.display = 'none';
        maistexto.style.display ='inline';
        btleiamais.innerHTML="Leia Menos"
    }

}