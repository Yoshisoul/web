const headerMenu = document.getElementById('header__menu');
const navList = document.getElementById('header__links');

headerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
})

const mainPhotos = document.querySelectorAll('.main__photos');

mainPhotos.forEach(img => {
    img.addEventListener('mouseover', () => {
        const mainNames = img.nextElementSibling;
        mainNames.style.color = 'brown';
    })

    img.addEventListener('mouseout', () => {
        const mainNames = img.nextElementSibling;
        mainNames.style.color = 'black';
    })
})