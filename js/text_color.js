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