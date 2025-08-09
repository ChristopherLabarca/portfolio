console.log('Hola gente!');

// Recorre el DOM y busca los anchors del navbar
const anchors = document.querySelectorAll(
  '.Menu .navbar-nav .nav-item .nav-link'
);

// Recorre el DOM y buscamos el boton del navbar
const buttonNavbar = document.querySelector('.Menu .navbar-toggler');

// Usando los anchors que encontramos previamente, recorremos y le agregamos un evento click a cada uno
anchors.forEach((a) => {
  a.addEventListener('click', function () {
    buttonNavbar.click(); // le indico que tiene que hacer click sobre el buttonNavbar
  });
});