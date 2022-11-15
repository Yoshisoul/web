const headerMenu = document.getElementById('header__menu');
const navList = document.getElementById('header__links');

headerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
})