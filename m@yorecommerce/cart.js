// Capturar o elemento HTML que representa o número de itens no carrinho
const cartCount = document.getElementById("cart-count");

// Inicializar o número de itens no carrinho como zero
let count = 0;

// Adicionar um item ao carrinho
function addToCart() {
  count++;
  cartCount.textContent = count;
}

// Capturar o elemento HTML que representa a lista de itens no carrinho
const cartItems = document.getElementById("cart-items");

// Remover um item do carrinho
function removeFromCart(button) {
  // Remover o elemento pai do botão (ou seja, o item da lista)
  const listItem = button.parentElement;
  listItem.remove();

  // Atualizar o número de itens no carrinho
  count--;
  cartCount.textContent = count;
}

// Confirmar uma compra e redirecionar o usuário para uma página de confirmação
function confirmPurchase() {
  // Adicionar lógica para confirmar a compra aqui
  alert("Compra confirmada!");

  // Redirecionar o usuário para a página de confirmacao de seus itens