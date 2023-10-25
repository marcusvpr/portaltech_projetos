document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.getElementById("titulo");
    var listaNaoOrdenada = document.querySelector("ul");
    var link = document.querySelector("a");
    var listaOrdenada = document.getElementById("lista-ordenada");
  
    titulo.innerText = "Título do Projeto";
    link.innerText = "ProZ Educação";
  
    listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";
  
    listaOrdenada.innerHTML = "<li><a href='https://site1.com'>Site 1</a></li><li><a href='https://site2.com'>Site 2</a></li><li><a href='https://site3.com'>Site 3</a></li>";
  });