const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburgerMenu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('active');
});

const searchBtn = document.querySelector('.searchBtn'); 
const searchBox = document.querySelector('.searchbox');
const closeBtn = document.querySelector('.closeBtn');


searchBtn.addEventListener('click', function () {
    searchBox.classList.add('active');
    hamburger.classList.add('hiddenHamburger');
})

closeBtn.addEventListener('click', function () {
    searchBox.classList.remove('active');
    hamburger.classList.remove('hiddenHamburger');
})






