window.addEventListener('DOMContentLoaded', function() {
  // Método Simples
  var titulo = document.createElement('h1');
  titulo.id = 'titulo';
  document.body.appendChild(titulo);
  document.getElementById('titulo').innerText = 'Título do Site';

  // Método Complexo
  var produto = document.createElement('div');
  produto.id = 'produto';

  var nome = document.createElement('h2');
  nome.innerText = 'Nome do Produto';
  produto.appendChild(nome);

  var descricao = document.createElement('p');
  descricao.innerText = 'Descrição do Produto';
  produto.appendChild(descricao);

  var preco = document.createElement('p');
  preco.innerText = 'Preço do Produto';
  produto.appendChild(preco);

  var imagem = document.createElement('img');
  imagem.src = 'caminho_da_imagem.jpg';
  imagem.alt = 'Imagem do Produto';
  produto.appendChild(imagem);

  document.body.appendChild(produto);
});