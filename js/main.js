const openMenuButton = document.querySelector('.mobile-nav-header .bars');
const closeMenuButton = document.querySelector('.mobile-nav .fa-times');

openMenuButton.addEventListener('click', function (e) {
  document.querySelector('.mobile-nav').style.transform = 'translate(0)';
});

closeMenuButton.addEventListener('click', function () {
  document.querySelector('.mobile-nav').style.transform = 'translate(-370px)';
});
