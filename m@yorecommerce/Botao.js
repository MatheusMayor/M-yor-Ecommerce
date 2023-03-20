const homeButton = document.getElementById('home-button');
const productsButton = document.getElementById('products-button');
const contactButton = document.getElementById('contact-button');
const aboutUsButton = document.getElementById('about-us-button');
const content = document.getElementById('content');

homeButton.addEventListener('click', () => {
  getContent('home.html');
});

productsButton.addEventListener('click', () => {
  getContent('products.html');
});

contactButton.addEventListener('click', () => {
  getContent('contact.html');
});

aboutUsButton.addEventListener('click', () => {
  getContent('about-us.html');
});

function getContent(url) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      content.innerHTML = xhr.responseText;
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}





