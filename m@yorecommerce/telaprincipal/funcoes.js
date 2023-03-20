// Importa o arquivo db.json
const produtos = require('./db.json').produtos;

// Função para obter todos os produtos
function obterProdutos() {
  return produtos;
}

// Função para obter um produto pelo ID
function obterProdutoPorId(id) {
  return produtos.find(p => p.id === id);
}

// Função para obter produtos por categoria
function obterProdutosPorCategoria(categoriaId) {
  return produtos.filter(p => p.categoriaId === categoriaId);
}

// Função para adicionar um novo produto
function adicionarProduto(produto) {
  produtos.push(produto);
}

// Função para atualizar um produto existente
function atualizarProduto(id, novoProduto) {
  const index = produtos.findIndex(p => p.id === id);
  if (index !== -1) {
    produtos[index] = novoProduto;
  }
}

// Função para remover um produto
function removerProduto(id) {
  const index = produtos.findIndex(p => p.id === id);
  if (index !== -1) {
    produtos.splice(index, 1);
  }
}